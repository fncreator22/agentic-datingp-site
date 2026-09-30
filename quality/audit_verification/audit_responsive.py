import os
import json
from playwright.sync_api import sync_playwright

def main():
    os.makedirs('quality/audit_verification/screenshots/responsive_audit', exist_ok=True)
    os.makedirs('quality/audit_verification/screenshots/competitive_reference', exist_ok=True)

    viewports = [
        ('desktop', 1280, 800),
        ('tablet', 768, 1024),
        ('mobile', 375, 812),
    ]

    pages_to_test = [
        ('home', 'http://localhost:3000/'),
        ('people', 'http://localhost:3000/people'),
        ('profile_elena', 'http://localhost:3000/people/person_01'),
        ('matches_elena', 'http://localhost:3000/people/person_01/matches'),
        ('demo', 'http://localhost:3000/demo'),
        ('date_replay', 'http://localhost:3000/dates/date_person_01_person_02'),
        ('missing_dates_hub', 'http://localhost:3000/dates'),
    ]

    results = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for vp_name, width, height in viewports:
            print(f"\n--- Auditing Viewport: {vp_name} ({width}x{height}) ---")
            context = browser.new_context(
                viewport={'width': width, 'height': height},
                user_agent='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            )
            page = context.new_page()

            for page_name, url in pages_to_test:
                try:
                    resp = page.goto(url, timeout=15000, wait_until='networkidle')
                    page.wait_for_timeout(1000)
                    status_code = resp.status if resp else 0
                    
                    # Check for horizontal scroll / overflow
                    has_h_scroll = page.evaluate('document.documentElement.scrollWidth > document.documentElement.clientWidth')
                    
                    ss_path = f"quality/audit_verification/screenshots/responsive_audit/{page_name}_{vp_name}.png"
                    page.screenshot(path=ss_path, full_page=True)
                    
                    entry = {
                        'page': page_name,
                        'url': url,
                        'viewport': vp_name,
                        'status_code': status_code,
                        'has_horizontal_overflow': has_h_scroll,
                        'screenshot': ss_path
                    }
                    results.append(entry)
                    print(f"  [{status_code}] {page_name} ({vp_name}) -> overflow={has_h_scroll}, ss={ss_path}")
                except Exception as e:
                    print(f"  Error on {page_name} ({vp_name}): {e}")

            context.close()

        browser.close()

    with open('quality/audit_verification/responsive_audit_results.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2)

    print("\nResponsive audit screenshots captured successfully.")

if __name__ == '__main__':
    main()
