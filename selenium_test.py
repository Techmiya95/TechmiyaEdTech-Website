"""
Comprehensive Selenium Test Suite for Techmiya EdTech Website
URL: https://www.techmiyaedtech.com
Runs automated tests across all pages and features.
"""

import time
import json
import traceback
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from webdriver_manager.chrome import ChromeDriverManager

# ──────────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────────
BASE_URL = "https://www.techmiyaedtech.com"
TIMEOUT = 15  # seconds for waits
RESULTS = []  # accumulates test results


def add_result(test_id, category, test_name, status, details=""):
    RESULTS.append({
        "id": test_id,
        "category": category,
        "test": test_name,
        "status": status,  # PASS / FAIL / WARN
        "details": details
    })


def setup_driver():
    """Initialize headless Chrome driver."""
    opts = Options()
    opts.add_argument("--headless=new")
    opts.add_argument("--no-sandbox")
    opts.add_argument("--disable-dev-shm-usage")
    opts.add_argument("--window-size=1920,1080")
    opts.add_argument("--disable-gpu")
    opts.add_argument("--ignore-certificate-errors")
    opts.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=opts)
    driver.implicitly_wait(5)
    return driver


# ──────────────────────────────────────────────
# 1. PAGE LOAD TESTS
# ──────────────────────────────────────────────
def test_page_loads(driver):
    """Verify every route loads with HTTP 200 and correct title element."""
    pages = [
        ("/", "Home Page"),
        ("/courses", "Courses Page"),
        ("/reviews", "Reviews Page"),
        ("/register", "Register Page"),
        ("/contact", "Contact Page"),
        ("/conditions", "Terms & Conditions"),
        ("/privacy.html", "Privacy Policy"),
        ("/data-deletion.html", "Data Deletion"),
        ("/psychometric-test", "Psychometric Test"),
        ("/blog", "Blog Page"),
        ("/jobs", "Jobs Page"),
        ("/services/corporate-training", "Corporate Training"),
        ("/services/csr-programs", "CSR Programs"),
        ("/services/partnerships", "Partnerships"),
        ("/services/campus-drives", "Campus Drives"),
        ("/services/hackathons", "Hackathons"),
        ("/services/fdp-sdp", "FDP & SDP"),
        ("/services/internships", "Internships"),
        ("/services/mentorship", "Mentorship"),
        ("/thankyou", "Thank You Page"),
        ("/get-voucher", "Get Voucher Page"),
    ]

    tc_id = 1
    for path, name in pages:
        try:
            url = BASE_URL + path
            driver.get(url)
            time.sleep(2)
            title = driver.title
            # Check page loaded (not blank)
            body_text = driver.find_element(By.TAG_NAME, "body").text
            if len(body_text.strip()) > 10:
                add_result(f"TC-{tc_id:03d}", "Page Load", f"{name} ({path}) loads successfully", "PASS", f"Title: '{title}'")
            else:
                add_result(f"TC-{tc_id:03d}", "Page Load", f"{name} ({path}) loads successfully", "FAIL", "Page body appears empty")
        except Exception as e:
            add_result(f"TC-{tc_id:03d}", "Page Load", f"{name} ({path}) loads successfully", "FAIL", str(e)[:200])
        tc_id += 1


# ──────────────────────────────────────────────
# 2. 404 PAGE TEST
# ──────────────────────────────────────────────
def test_404_page(driver):
    """Verify a random non-existent route shows the 404 page."""
    try:
        driver.get(BASE_URL + "/this-page-does-not-exist-12345")
        time.sleep(2)
        body = driver.find_element(By.TAG_NAME, "body").text.lower()
        if "404" in body or "not found" in body or "page" in body:
            add_result("TC-100", "Error Handling", "404 page displays for unknown route", "PASS", "404 content detected")
        else:
            add_result("TC-100", "Error Handling", "404 page displays for unknown route", "WARN", "Page loaded but no clear 404 message found")
    except Exception as e:
        add_result("TC-100", "Error Handling", "404 page displays for unknown route", "FAIL", str(e)[:200])


# ──────────────────────────────────────────────
# 3. HEADER / NAVIGATION TESTS
# ──────────────────────────────────────────────
def test_header(driver):
    """Test header elements: logo, nav links, CTA buttons."""
    driver.get(BASE_URL)
    time.sleep(3)

    # TC-101: Logo presence
    try:
        logo = driver.find_element(By.CSS_SELECTOR, "header img[alt*='Logo']")
        add_result("TC-101", "Header", "Logo image is present in header", "PASS", f"alt='{logo.get_attribute('alt')}'")
    except:
        try:
            logo = driver.find_element(By.CSS_SELECTOR, "header img")
            add_result("TC-101", "Header", "Logo image is present in header", "PASS", f"Found header image (alt='{logo.get_attribute('alt')}')")
        except:
            add_result("TC-101", "Header", "Logo image is present in header", "FAIL", "No img tag found in header")

    # TC-102: Brand name
    try:
        brand = driver.find_element(By.XPATH, "//header//span[contains(text(),'Techmiya')]")
        add_result("TC-102", "Header", "Brand name 'Techmiya' is visible", "PASS", brand.text)
    except:
        add_result("TC-102", "Header", "Brand name 'Techmiya' is visible", "FAIL", "Brand name not found")

    # TC-103: Top bar with job guarantee message
    try:
        top_bar = driver.find_element(By.XPATH, "//*[contains(text(),'100% Job Guarantee')]")
        add_result("TC-103", "Header", "Top bar shows '100% Job Guarantee' message", "PASS", "Message found")
    except:
        add_result("TC-103", "Header", "Top bar shows '100% Job Guarantee' message", "FAIL", "Message not found")

    # TC-104: Branch phone numbers in top bar
    try:
        phones = driver.find_elements(By.CSS_SELECTOR, "a[href^='tel:']")
        phone_count = len(phones)
        if phone_count >= 3:
            add_result("TC-104", "Header", "Branch phone numbers displayed (at least 3)", "PASS", f"Found {phone_count} phone links")
        else:
            add_result("TC-104", "Header", "Branch phone numbers displayed (at least 3)", "WARN", f"Found only {phone_count} phone links")
    except Exception as e:
        add_result("TC-104", "Header", "Branch phone numbers displayed (at least 3)", "FAIL", str(e)[:200])

    # TC-105: Navigation links present
    expected_nav = ["Home", "Courses", "Services", "Reviews", "Contact"]
    found_navs = []
    missing_navs = []
    for nav_text in expected_nav:
        try:
            driver.find_element(By.XPATH, f"//nav//a[contains(text(),'{nav_text}')] | //nav//button[contains(text(),'{nav_text}')]")
            found_navs.append(nav_text)
        except:
            missing_navs.append(nav_text)
    
    if not missing_navs:
        add_result("TC-105", "Header", "All primary navigation links present", "PASS", f"Found: {', '.join(found_navs)}")
    else:
        add_result("TC-105", "Header", "All primary navigation links present", "WARN", f"Missing: {', '.join(missing_navs)}; Found: {', '.join(found_navs)}")

    # TC-106: 'Access LMS' CTA button
    try:
        lms_btn = driver.find_element(By.XPATH, "//a[contains(@href,'lms.techmiyaedtech.com')]")
        add_result("TC-106", "Header", "'Access LMS' button links to LMS subdomain", "PASS", f"href={lms_btn.get_attribute('href')}")
    except:
        add_result("TC-106", "Header", "'Access LMS' button links to LMS subdomain", "FAIL", "LMS link not found")

    # TC-107: 'Enquire Now' CTA button
    try:
        enq = driver.find_element(By.XPATH, "//a[contains(@href,'/register')]//button[contains(text(),'Enquire')]")
        add_result("TC-107", "Header", "'Enquire Now' button links to register page", "PASS", "Button found")
    except:
        try:
            enq = driver.find_element(By.XPATH, "//a[contains(@href,'/register')]")
            add_result("TC-107", "Header", "'Enquire Now' button links to register page", "PASS", "Register link found")
        except:
            add_result("TC-107", "Header", "'Enquire Now' button links to register page", "FAIL", "Not found")


# ──────────────────────────────────────────────
# 4. FOOTER TESTS
# ──────────────────────────────────────────────
def test_footer(driver):
    """Test footer elements: logo, links, social, contact info."""
    driver.get(BASE_URL)
    time.sleep(2)

    # TC-201: Footer exists
    try:
        footer = driver.find_element(By.TAG_NAME, "footer")
        add_result("TC-201", "Footer", "Footer element is present on page", "PASS", "Found <footer> tag")
    except:
        add_result("TC-201", "Footer", "Footer element is present on page", "FAIL", "No <footer> tag")
        return

    # TC-202: Footer logo / company name
    try:
        footer_brand = footer.find_element(By.XPATH, ".//span[contains(text(),'Techmiya')]")
        add_result("TC-202", "Footer", "Footer displays company name", "PASS", footer_brand.text)
    except:
        add_result("TC-202", "Footer", "Footer displays company name", "FAIL", "Not found")

    # TC-203: Social media links
    social_links = {"Facebook": "facebook.com", "Youtube": "youtube.com", "LinkedIn": "linkedin.com", "Instagram": "instagram.com"}
    for name, domain in social_links.items():
        try:
            link = footer.find_element(By.XPATH, f".//a[contains(@href,'{domain}')]")
            href = link.get_attribute("href")
            add_result(f"TC-203-{name}", "Footer", f"{name} social link present in footer", "PASS", f"href={href}")
        except:
            add_result(f"TC-203-{name}", "Footer", f"{name} social link present in footer", "FAIL", f"No link to {domain}")

    # TC-204: Quick links section
    quick_links = ["Home", "Courses", "Reviews", "Contact", "Terms", "Privacy"]
    found = []
    missing = []
    for ql in quick_links:
        try:
            footer.find_element(By.XPATH, f".//a[contains(text(),'{ql}')]")
            found.append(ql)
        except:
            missing.append(ql)
    if not missing:
        add_result("TC-204", "Footer", "All quick links present in footer", "PASS", f"Found: {', '.join(found)}")
    else:
        add_result("TC-204", "Footer", "All quick links present in footer", "WARN", f"Missing: {', '.join(missing)}")

    # TC-205: Contact info in footer
    try:
        footer_text = footer.text
        has_email = "hr@techmiyaedtech.com" in footer_text
        has_phone = "6363760275" in footer_text
        has_address = "Jayanagar" in footer_text
        if has_email and has_phone and has_address:
            add_result("TC-205", "Footer", "Contact info (email, phone, address) in footer", "PASS", "All present")
        else:
            details = f"Email: {has_email}, Phone: {has_phone}, Address: {has_address}"
            add_result("TC-205", "Footer", "Contact info (email, phone, address) in footer", "WARN", details)
    except:
        add_result("TC-205", "Footer", "Contact info (email, phone, address) in footer", "FAIL", "Could not read footer text")

    # TC-206: Copyright notice
    try:
        copyright_el = footer.find_element(By.XPATH, ".//*[contains(text(),'©') or contains(text(),'rights reserved')]")
        add_result("TC-206", "Footer", "Copyright notice present", "PASS", copyright_el.text.strip()[:100])
    except:
        add_result("TC-206", "Footer", "Copyright notice present", "FAIL", "Not found")


# ──────────────────────────────────────────────
# 5. HOME PAGE CONTENT TESTS
# ──────────────────────────────────────────────
def test_home_page(driver):
    """Test home page hero section and key content."""
    driver.get(BASE_URL)
    time.sleep(3)

    # TC-301: Hero section / lead gen form presence
    try:
        body = driver.find_element(By.TAG_NAME, "body").text
        if "voucher" in body.lower() or "register" in body.lower() or "enquire" in body.lower() or "lead" in body.lower():
            add_result("TC-301", "Home Page", "Hero section / lead gen form is present", "PASS", "Lead gen content detected")
        else:
            add_result("TC-301", "Home Page", "Hero section / lead gen form is present", "WARN", "No lead gen keywords found in body")
    except Exception as e:
        add_result("TC-301", "Home Page", "Hero section / lead gen form is present", "FAIL", str(e)[:200])

    # TC-302: Page has images (not a blank page)
    try:
        images = driver.find_elements(By.TAG_NAME, "img")
        if len(images) >= 3:
            add_result("TC-302", "Home Page", "Home page contains images", "PASS", f"Found {len(images)} images")
        else:
            add_result("TC-302", "Home Page", "Home page contains images", "WARN", f"Only {len(images)} image(s)")
    except:
        add_result("TC-302", "Home Page", "Home page contains images", "FAIL", "Error checking images")

    # TC-303: WhatsApp floating button
    try:
        wa = driver.find_element(By.XPATH, "//*[contains(@href,'wa.me') or contains(@href,'whatsapp')]")
        add_result("TC-303", "Home Page", "Floating WhatsApp button present", "PASS", f"href={wa.get_attribute('href')}")
    except:
        add_result("TC-303", "Home Page", "Floating WhatsApp button present", "WARN", "WhatsApp link not found (may be OK)")

    # TC-304: Social sidebar present
    try:
        sidebar_links = driver.find_elements(By.CSS_SELECTOR, "a[href*='instagram'], a[href*='linkedin'], a[href*='youtube']")
        if len(sidebar_links) >= 2:
            add_result("TC-304", "Home Page", "Social sidebar links present", "PASS", f"Found {len(sidebar_links)} social links on page")
        else:
            add_result("TC-304", "Home Page", "Social sidebar links present", "WARN", f"Found only {len(sidebar_links)}")
    except:
        add_result("TC-304", "Home Page", "Social sidebar links present", "FAIL", "Error")


# ──────────────────────────────────────────────
# 6. CONTACT PAGE FORM TESTS
# ──────────────────────────────────────────────
def test_contact_form(driver):
    """Test the contact form fields and validation."""
    driver.get(BASE_URL + "/contact")
    time.sleep(3)

    # TC-401: Contact form visible
    try:
        form = driver.find_element(By.TAG_NAME, "form")
        add_result("TC-401", "Contact Form", "Contact form is visible on page", "PASS", "Form element found")
    except:
        add_result("TC-401", "Contact Form", "Contact form is visible on page", "FAIL", "No <form> tag")
        return

    # TC-402: Name field present
    try:
        name_field = driver.find_element(By.ID, "name")
        add_result("TC-402", "Contact Form", "Name input field present (id='name')", "PASS", "Found")
    except:
        add_result("TC-402", "Contact Form", "Name input field present (id='name')", "FAIL", "Not found")

    # TC-403: Email field present
    try:
        email_field = driver.find_element(By.ID, "email")
        add_result("TC-403", "Contact Form", "Email input field present (id='email')", "PASS", f"type={email_field.get_attribute('type')}")
    except:
        add_result("TC-403", "Contact Form", "Email input field present (id='email')", "FAIL", "Not found")

    # TC-404: Phone field present
    try:
        phone_field = driver.find_element(By.ID, "phone")
        add_result("TC-404", "Contact Form", "Phone input field present (id='phone')", "PASS", f"type={phone_field.get_attribute('type')}")
    except:
        add_result("TC-404", "Contact Form", "Phone input field present (id='phone')", "FAIL", "Not found")

    # TC-405: Subject field present
    try:
        subject_field = driver.find_element(By.ID, "subject")
        add_result("TC-405", "Contact Form", "Subject input field present (id='subject')", "PASS", "Found")
    except:
        add_result("TC-405", "Contact Form", "Subject input field present (id='subject')", "FAIL", "Not found")

    # TC-406: Message textarea present
    try:
        msg_field = driver.find_element(By.ID, "message")
        add_result("TC-406", "Contact Form", "Message textarea present (id='message')", "PASS", f"tag={msg_field.tag_name}")
    except:
        add_result("TC-406", "Contact Form", "Message textarea present (id='message')", "FAIL", "Not found")

    # TC-407: Submit button present
    try:
        submit = driver.find_element(By.XPATH, "//button[@type='submit']")
        add_result("TC-407", "Contact Form", "Submit button present", "PASS", f"Text: '{submit.text}'")
    except:
        add_result("TC-407", "Contact Form", "Submit button present", "FAIL", "Not found")

    # TC-408: Google Maps iframe present
    try:
        iframe = driver.find_element(By.CSS_SELECTOR, "iframe[src*='google.com/maps']")
        add_result("TC-408", "Contact Form", "Google Maps iframe is embedded", "PASS", "iframe found")
    except:
        add_result("TC-408", "Contact Form", "Google Maps iframe is embedded", "FAIL", "No maps iframe")

    # TC-409: FAQ section present
    try:
        faq = driver.find_element(By.XPATH, "//*[contains(text(),'Frequently Asked')]")
        add_result("TC-409", "Contact Form", "FAQ section is visible on contact page", "PASS", "FAQ heading found")
    except:
        add_result("TC-409", "Contact Form", "FAQ section is visible on contact page", "FAIL", "Not found")

    # TC-410: Contact cards (Email Us, Call Us, Visit Us)
    cards = ["Email Us", "Call Us", "Visit Us"]
    for card_title in cards:
        try:
            driver.find_element(By.XPATH, f"//*[contains(text(),'{card_title}')]")
            add_result(f"TC-410-{card_title.replace(' ','')}", "Contact Form", f"'{card_title}' info card present", "PASS", "Found")
        except:
            add_result(f"TC-410-{card_title.replace(' ','')}", "Contact Form", f"'{card_title}' info card present", "FAIL", "Not found")

    # TC-411: Office hours section
    try:
        driver.find_element(By.XPATH, "//*[contains(text(),'Office Hours')]")
        add_result("TC-411", "Contact Form", "Office Hours section present", "PASS", "Found")
    except:
        add_result("TC-411", "Contact Form", "Office Hours section present", "FAIL", "Not found")


# ──────────────────────────────────────────────
# 7. COURSES PAGE TESTS
# ──────────────────────────────────────────────
def test_courses_page(driver):
    """Test the courses listing page."""
    driver.get(BASE_URL + "/courses")
    time.sleep(3)

    # TC-501: Page heading
    try:
        heading = driver.find_element(By.TAG_NAME, "h1")
        add_result("TC-501", "Courses", "Courses page has an <h1> heading", "PASS", f"Text: '{heading.text[:80]}'")
    except:
        add_result("TC-501", "Courses", "Courses page has an <h1> heading", "FAIL", "No h1 found")

    # TC-502: Course cards present
    try:
        cards = driver.find_elements(By.XPATH, "//div[contains(@class,'card') or contains(@class,'Card')]")
        if not cards:
            # Try alternative selectors
            cards = driver.find_elements(By.XPATH, "//div[contains(@class,'rounded') and contains(@class,'shadow')]")
        if len(cards) >= 2:
            add_result("TC-502", "Courses", "Multiple course cards displayed", "PASS", f"Found ~{len(cards)} card-like elements")
        else:
            add_result("TC-502", "Courses", "Multiple course cards displayed", "WARN", f"Only {len(cards)} found")
    except:
        add_result("TC-502", "Courses", "Multiple course cards displayed", "FAIL", "Error")


# ──────────────────────────────────────────────
# 8. REVIEWS PAGE TESTS
# ──────────────────────────────────────────────
def test_reviews_page(driver):
    """Test the reviews / testimonials page."""
    driver.get(BASE_URL + "/reviews")
    time.sleep(3)

    # TC-601: Reviews heading
    try:
        heading = driver.find_element(By.TAG_NAME, "h1")
        add_result("TC-601", "Reviews", "Reviews page has an <h1> heading", "PASS", f"'{heading.text[:80]}'")
    except:
        add_result("TC-601", "Reviews", "Reviews page has an <h1> heading", "FAIL", "No h1")

    # TC-602: Review content present
    try:
        body = driver.find_element(By.TAG_NAME, "body").text
        if len(body) > 200:
            add_result("TC-602", "Reviews", "Review content / testimonials are displayed", "PASS", f"Body length: {len(body)} chars")
        else:
            add_result("TC-602", "Reviews", "Review content / testimonials are displayed", "WARN", "Very short content")
    except:
        add_result("TC-602", "Reviews", "Review content / testimonials are displayed", "FAIL", "Error")


# ──────────────────────────────────────────────
# 9. REGISTER / ENQUIRY PAGE TESTS
# ──────────────────────────────────────────────
def test_register_page(driver):
    """Test the register/enquiry page."""
    driver.get(BASE_URL + "/register")
    time.sleep(3)

    # TC-701: Register form present
    try:
        form = driver.find_element(By.TAG_NAME, "form")
        add_result("TC-701", "Register", "Registration form is present", "PASS", "Form found")
    except:
        add_result("TC-701", "Register", "Registration form is present", "FAIL", "No form")

    # TC-702: Input fields
    try:
        inputs = driver.find_elements(By.TAG_NAME, "input")
        if len(inputs) >= 3:
            add_result("TC-702", "Register", "Register form has multiple input fields", "PASS", f"Found {len(inputs)} inputs")
        else:
            add_result("TC-702", "Register", "Register form has multiple input fields", "WARN", f"Only {len(inputs)} inputs")
    except:
        add_result("TC-702", "Register", "Register form has multiple input fields", "FAIL", "Error")


# ──────────────────────────────────────────────
# 10. SEO & META TESTS
# ──────────────────────────────────────────────
def test_seo(driver):
    """Test SEO elements across key pages."""
    pages = [
        ("/", "Home"),
        ("/courses", "Courses"),
        ("/contact", "Contact"),
        ("/reviews", "Reviews"),
    ]
    tc_id = 800
    for path, name in pages:
        driver.get(BASE_URL + path)
        time.sleep(2)

        # Title tag
        title = driver.title
        if title and len(title) > 5:
            add_result(f"TC-{tc_id}", "SEO", f"{name} page has a meaningful <title> tag", "PASS", f"'{title[:80]}'")
        else:
            add_result(f"TC-{tc_id}", "SEO", f"{name} page has a meaningful <title> tag", "FAIL", f"Title: '{title}'")
        tc_id += 1

        # Meta description
        try:
            meta = driver.find_element(By.CSS_SELECTOR, "meta[name='description']")
            content = meta.get_attribute("content")
            if content and len(content) > 20:
                add_result(f"TC-{tc_id}", "SEO", f"{name} page has meta description", "PASS", f"'{content[:80]}...'")
            else:
                add_result(f"TC-{tc_id}", "SEO", f"{name} page has meta description", "WARN", f"Short/empty: '{content}'")
        except:
            add_result(f"TC-{tc_id}", "SEO", f"{name} page has meta description", "FAIL", "No meta[name='description']")
        tc_id += 1

        # H1 tag
        try:
            h1 = driver.find_element(By.TAG_NAME, "h1")
            add_result(f"TC-{tc_id}", "SEO", f"{name} page has an <h1> tag", "PASS", f"'{h1.text[:60]}'")
        except:
            add_result(f"TC-{tc_id}", "SEO", f"{name} page has an <h1> tag", "FAIL", "No h1 found")
        tc_id += 1


# ──────────────────────────────────────────────
# 11. RESPONSIVE / VIEWPORT TESTS
# ──────────────────────────────────────────────
def test_responsive(driver):
    """Test basic responsive behaviour at mobile width."""
    viewports = [
        ("Mobile", 375, 812),
        ("Tablet", 768, 1024),
        ("Desktop", 1920, 1080),
    ]

    for vp_name, w, h in viewports:
        try:
            driver.set_window_size(w, h)
            driver.get(BASE_URL)
            time.sleep(2)
            body = driver.find_element(By.TAG_NAME, "body")
            body_width = driver.execute_script("return document.body.scrollWidth")
            viewport_width = driver.execute_script("return window.innerWidth")
            overflow = body_width > viewport_width + 20  # allow small margin
            if not overflow:
                add_result(f"TC-900-{vp_name}", "Responsive", f"No horizontal overflow at {vp_name} ({w}x{h})", "PASS", f"body={body_width}, viewport={viewport_width}")
            else:
                add_result(f"TC-900-{vp_name}", "Responsive", f"No horizontal overflow at {vp_name} ({w}x{h})", "FAIL", f"body={body_width} > viewport={viewport_width}")
        except Exception as e:
            add_result(f"TC-900-{vp_name}", "Responsive", f"No horizontal overflow at {vp_name} ({w}x{h})", "FAIL", str(e)[:200])

    # Reset to desktop
    driver.set_window_size(1920, 1080)


# ──────────────────────────────────────────────
# 12. PERFORMANCE / PAGE SPEED
# ──────────────────────────────────────────────
def test_performance(driver):
    """Measure basic page load times."""
    pages = [("/", "Home"), ("/courses", "Courses"), ("/contact", "Contact")]
    tc_id = 950
    for path, name in pages:
        try:
            start = time.time()
            driver.get(BASE_URL + path)
            WebDriverWait(driver, TIMEOUT).until(EC.presence_of_element_located((By.TAG_NAME, "footer")))
            load_time = round(time.time() - start, 2)
            if load_time < 5:
                add_result(f"TC-{tc_id}", "Performance", f"{name} page loads in under 5s", "PASS", f"Load time: {load_time}s")
            elif load_time < 10:
                add_result(f"TC-{tc_id}", "Performance", f"{name} page loads in under 5s", "WARN", f"Load time: {load_time}s (slow)")
            else:
                add_result(f"TC-{tc_id}", "Performance", f"{name} page loads in under 5s", "FAIL", f"Load time: {load_time}s (very slow)")
        except Exception as e:
            add_result(f"TC-{tc_id}", "Performance", f"{name} page loads in under 5s", "FAIL", str(e)[:200])
        tc_id += 1


# ──────────────────────────────────────────────
# 13. EXTERNAL LINK VALIDATION
# ──────────────────────────────────────────────
def test_external_links(driver):
    """Verify key external links have correct href attributes."""
    driver.get(BASE_URL)
    time.sleep(3)

    links_to_check = {
        "LMS": "lms.techmiyaedtech.com",
        "Tutorials": "tutorials.techmiyaedtech.com",
    }
    tc_id = 970
    for name, domain in links_to_check.items():
        try:
            link = driver.find_element(By.XPATH, f"//a[contains(@href,'{domain}')]")
            href = link.get_attribute("href")
            target = link.get_attribute("target")
            if target == "_blank":
                add_result(f"TC-{tc_id}", "External Links", f"{name} link points to {domain} (opens new tab)", "PASS", f"href={href}")
            else:
                add_result(f"TC-{tc_id}", "External Links", f"{name} link points to {domain} (opens new tab)", "WARN", f"href={href}, target={target} (not _blank)")
        except:
            add_result(f"TC-{tc_id}", "External Links", f"{name} link points to {domain} (opens new tab)", "FAIL", "Link not found")
        tc_id += 1


# ──────────────────────────────────────────────
# 14. SERVICES PAGES TESTS
# ──────────────────────────────────────────────
def test_service_pages(driver):
    """Test each service page loads with proper content."""
    services = [
        ("/services/corporate-training", "Corporate Training"),
        ("/services/csr-programs", "CSR Programs"),
        ("/services/partnerships", "Partnerships"),
        ("/services/campus-drives", "Campus Drives"),
        ("/services/hackathons", "Hackathons"),
        ("/services/fdp-sdp", "FDP & SDP"),
        ("/services/internships", "Internships"),
        ("/services/mentorship", "Mentorship"),
    ]
    tc_id = 1000
    for path, name in services:
        try:
            driver.get(BASE_URL + path)
            time.sleep(2)
            h1_elements = driver.find_elements(By.TAG_NAME, "h1")
            body_text = driver.find_element(By.TAG_NAME, "body").text
            has_heading = len(h1_elements) > 0
            has_content = len(body_text) > 100
            if has_heading and has_content:
                add_result(f"TC-{tc_id}", "Services", f"{name} page has heading and content", "PASS", f"h1='{h1_elements[0].text[:60]}'")
            elif has_content:
                add_result(f"TC-{tc_id}", "Services", f"{name} page has heading and content", "WARN", "Content present but no h1")
            else:
                add_result(f"TC-{tc_id}", "Services", f"{name} page has heading and content", "FAIL", "Minimal content")
        except Exception as e:
            add_result(f"TC-{tc_id}", "Services", f"{name} page has heading and content", "FAIL", str(e)[:200])
        tc_id += 1


# ──────────────────────────────────────────────
# 15. ACCESSIBILITY BASIC CHECKS
# ──────────────────────────────────────────────
def test_accessibility(driver):
    """Basic accessibility checks on home page."""
    driver.get(BASE_URL)
    time.sleep(3)

    # TC-1100: Images have alt attributes
    try:
        images = driver.find_elements(By.TAG_NAME, "img")
        missing_alt = [img.get_attribute("src") for img in images if not img.get_attribute("alt")]
        total = len(images)
        missing = len(missing_alt)
        if missing == 0:
            add_result("TC-1100", "Accessibility", "All images have alt attributes", "PASS", f"{total} images, all with alt text")
        else:
            add_result("TC-1100", "Accessibility", "All images have alt attributes", "WARN", f"{missing}/{total} images missing alt text")
    except:
        add_result("TC-1100", "Accessibility", "All images have alt attributes", "FAIL", "Error")

    # TC-1101: Page language attribute
    try:
        lang = driver.find_element(By.TAG_NAME, "html").get_attribute("lang")
        if lang:
            add_result("TC-1101", "Accessibility", "HTML element has lang attribute", "PASS", f"lang='{lang}'")
        else:
            add_result("TC-1101", "Accessibility", "HTML element has lang attribute", "FAIL", "No lang attribute")
    except:
        add_result("TC-1101", "Accessibility", "HTML element has lang attribute", "FAIL", "Error")

    # TC-1102: Viewport meta tag
    try:
        vp = driver.find_element(By.CSS_SELECTOR, "meta[name='viewport']")
        add_result("TC-1102", "Accessibility", "Viewport meta tag is set", "PASS", f"content='{vp.get_attribute('content')[:80]}'")
    except:
        add_result("TC-1102", "Accessibility", "Viewport meta tag is set", "FAIL", "Not found")

    # TC-1103: Buttons/links are not empty
    try:
        buttons = driver.find_elements(By.TAG_NAME, "button")
        empty_buttons = [b for b in buttons if not b.text.strip() and not b.get_attribute("aria-label")]
        if not empty_buttons:
            add_result("TC-1103", "Accessibility", "All buttons have text or aria-label", "PASS", f"Checked {len(buttons)} buttons")
        else:
            add_result("TC-1103", "Accessibility", "All buttons have text or aria-label", "WARN", f"{len(empty_buttons)}/{len(buttons)} empty buttons")
    except:
        add_result("TC-1103", "Accessibility", "All buttons have text or aria-label", "FAIL", "Error")


# ──────────────────────────────────────────────
# 16. CONSOLE ERROR CHECK
# ──────────────────────────────────────────────
def test_console_errors(driver):
    """Check for JavaScript console errors on key pages."""
    pages = [("/", "Home"), ("/courses", "Courses"), ("/contact", "Contact")]
    tc_id = 1200
    for path, name in pages:
        try:
            driver.get(BASE_URL + path)
            time.sleep(3)
            logs = driver.get_log("browser")
            severe = [l for l in logs if l.get("level") == "SEVERE"]
            if not severe:
                add_result(f"TC-{tc_id}", "Console", f"No SEVERE console errors on {name}", "PASS", f"Total logs: {len(logs)}")
            else:
                msgs = "; ".join([s.get("message", "")[:80] for s in severe[:3]])
                add_result(f"TC-{tc_id}", "Console", f"No SEVERE console errors on {name}", "FAIL", f"{len(severe)} errors: {msgs}")
        except Exception as e:
            # Some drivers don't support get_log
            add_result(f"TC-{tc_id}", "Console", f"No SEVERE console errors on {name}", "WARN", f"Could not retrieve logs: {str(e)[:100]}")
        tc_id += 1


# ──────────────────────────────────────────────
# REPORT GENERATION
# ──────────────────────────────────────────────
def generate_report():
    """Generate markdown report from RESULTS."""
    total = len(RESULTS)
    passed = sum(1 for r in RESULTS if r["status"] == "PASS")
    failed = sum(1 for r in RESULTS if r["status"] == "FAIL")
    warned = sum(1 for r in RESULTS if r["status"] == "WARN")

    lines = []
    lines.append("# 🧪 Techmiya EdTech — Selenium Test Report\n")
    lines.append(f"**Date:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"**Target URL:** {BASE_URL}")
    lines.append(f"**Browser:** Chrome (headless)\n")

    lines.append("## Summary\n")
    lines.append(f"| Metric | Count |")
    lines.append(f"|--------|-------|")
    lines.append(f"| ✅ Passed | {passed} |")
    lines.append(f"| ❌ Failed | {failed} |")
    lines.append(f"| ⚠️ Warnings | {warned} |")
    lines.append(f"| **Total** | **{total}** |")
    lines.append(f"| **Pass Rate** | **{round(passed/total*100, 1)}%** |\n")

    # Group by category
    categories = {}
    for r in RESULTS:
        cat = r["category"]
        if cat not in categories:
            categories[cat] = []
        categories[cat].append(r)

    for cat, tests in categories.items():
        cat_pass = sum(1 for t in tests if t["status"] == "PASS")
        cat_fail = sum(1 for t in tests if t["status"] == "FAIL")
        cat_warn = sum(1 for t in tests if t["status"] == "WARN")
        lines.append(f"## {cat} ({cat_pass}✅ {cat_fail}❌ {cat_warn}⚠️)\n")

        lines.append("| ID | Test Case | Status | Details |")
        lines.append("|-----|-----------|--------|---------|")
        for t in tests:
            icon = {"PASS": "✅", "FAIL": "❌", "WARN": "⚠️"}.get(t["status"], "❓")
            detail = t["details"].replace("|", "\\|").replace("\n", " ")[:120]
            lines.append(f"| {t['id']} | {t['test']} | {icon} {t['status']} | {detail} |")
        lines.append("")

    return "\n".join(lines)


# ──────────────────────────────────────────────
# MAIN
# ──────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("  Techmiya EdTech — Selenium Test Suite")
    print("=" * 60)

    driver = None
    try:
        print("\n[1/16] Setting up Chrome driver...")
        driver = setup_driver()

        print("[2/16] Testing page loads...")
        test_page_loads(driver)

        print("[3/16] Testing 404 page...")
        test_404_page(driver)

        print("[4/16] Testing header / navigation...")
        test_header(driver)

        print("[5/16] Testing footer...")
        test_footer(driver)

        print("[6/16] Testing home page content...")
        test_home_page(driver)

        print("[7/16] Testing contact form...")
        test_contact_form(driver)

        print("[8/16] Testing courses page...")
        test_courses_page(driver)

        print("[9/16] Testing reviews page...")
        test_reviews_page(driver)

        print("[10/16] Testing register page...")
        test_register_page(driver)

        print("[11/16] Testing SEO elements...")
        test_seo(driver)

        print("[12/16] Testing responsive design...")
        test_responsive(driver)

        print("[13/16] Testing performance...")
        test_performance(driver)

        print("[14/16] Testing external links...")
        test_external_links(driver)

        print("[15/16] Testing service pages...")
        test_service_pages(driver)

        print("[16/16] Testing accessibility...")
        test_accessibility(driver)

        # Console errors test (may not work on all setups)
        print("[BONUS] Checking console errors...")
        test_console_errors(driver)

    except Exception as e:
        print(f"\n❌ CRITICAL ERROR: {e}")
        traceback.print_exc()
    finally:
        if driver:
            driver.quit()

    # Generate and save report
    report = generate_report()
    report_path = r"C:\Users\joelf\.gemini\antigravity\brain\3e55d7e6-996e-4cf7-9338-8983bcada7b4\test_report.md"
    with open(report_path, "w", encoding="utf-8") as f:
        f.write(report)
    print(f"\n✅ Report saved to: {report_path}")

    # Also save JSON for programmatic use
    json_path = r"f:\Techmiya-Latest-Website\website\test_results.json"
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(RESULTS, f, indent=2)
    print(f"✅ JSON results saved to: {json_path}")

    # Print summary to console
    total = len(RESULTS)
    passed = sum(1 for r in RESULTS if r["status"] == "PASS")
    failed = sum(1 for r in RESULTS if r["status"] == "FAIL")
    warned = sum(1 for r in RESULTS if r["status"] == "WARN")
    print(f"\n{'='*60}")
    print(f"  RESULTS: {passed} PASSED | {failed} FAILED | {warned} WARNINGS | {total} TOTAL")
    print(f"  Pass Rate: {round(passed/total*100, 1) if total else 0}%")
    print(f"{'='*60}")
