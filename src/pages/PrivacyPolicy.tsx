import React from "react";
import { SEOHead } from "../components/SEOHead";

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <SEOHead
                title="Privacy Policy - Techmiya Edtech"
                description="Privacy Policy for Techmiya Edtech. Learn how we collect, use, and protect your personal information."
                canonicalUrl="https://techmiyaedtech.com/privacy-policy"
            />
            <div className="max-w-4xl mx-auto p-6 text-gray-800">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Privacy Policy – Techmiya Edtech
                </h1>

                <p className="mb-6 text-gray-600">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Section 1: Introduction */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                    <p>
                        Welcome to Techmiya Edtech. We respect your privacy and are committed to protecting your personal data.
                        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
                        and use our services.
                    </p>
                </section>

                {/* Section 2: Information We Collect */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                    <p className="mb-2">We may collect personal information that you provide to us voluntarily, including:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Personal Identification Information:</strong> Name, email address, phone number, and mailing address.
                        </li>
                        <li>
                            <strong>Educational & Professional Details:</strong> Academic background, current job status, and career interests.
                        </li>
                        <li>
                            <strong>Payment Information:</strong> Billing details and transaction history (processed securely by third-party payment gateways).
                        </li>
                    </ul>
                </section>

                {/* Section 3: How We Use Your Information */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>To provide and manage our courses, internships, and placement services.</li>
                        <li>To communicate with you regarding updates, offers, and course schedules.</li>
                        <li>To improve our website functionality and user experience.</li>
                        <li>To process payments and prevent fraudulent transactions.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>
                </section>

                {/* Section 4: Data Protection */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. Data Protection & Security</h2>
                    <p>
                        We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access,
                        alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                {/* Section 5: Cookies */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking Technologies</h2>
                    <p>
                        We use cookies to enhance your browsing experience. Cookies help us analyze website traffic and personalize content.
                        You can choose to disable cookies through your browser settings, but this may affect some website features.
                    </p>
                </section>

                {/* Section 6: WhatsApp Business & Meta Platform Data Usage */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. WhatsApp Business & Meta Platform Data Usage</h2>
                    <p className="mb-2">
                        Techmiya Edtech uses the WhatsApp Business Cloud API provided by Meta Platforms, Inc. to communicate with users for notifications, customer support, course updates, and service-related messages.
                    </p>
                    <p>
                        We collect and process WhatsApp phone numbers and message-related metadata strictly for communication purposes. We do not sell, rent, or share WhatsApp user data with third parties. All data is processed in accordance with Meta Platform Policies and applicable data protection laws.
                    </p>
                </section>

                {/* Section 7: Third-Party Disclosure */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">7. Third-Party Disclosure</h2>
                    <p>
                        We do not sell, trade, or transfer your personally identifiable information to outside parties unless we provide you with advance notice.
                        This does not include website hosting partners and other parties who assist us in operating our website, conducting our business,
                        or serving our users, so long as those parties agree to keep this information confidential.
                    </p>
                </section>

                {/* Section 8: User Data Deletion Instructions */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">8. User Data Deletion Instructions</h2>
                    <p>
                        Users can request deletion of their data by emailing us at{" "}
                        <a href="mailto:techmiya.md@gmail.com" className="text-blue-600 underline">
                            techmiya.md@gmail.com
                        </a>{" "}
                        with subject: "Data Deletion Request – n8n-auto".
                        We will delete the data within 7 working days.
                    </p>
                </section>

                {/* Section 9: Contact Us */}
                <section>
                    <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="mt-2">
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:info@techmiyaedtech.com"
                            className="text-blue-600 underline"
                        >
                            info@techmiyaedtech.com
                        </a>
                    </p>
                    <p>
                        <strong>Phone:</strong> +91 6361987951
                    </p>
                </section>
            </div>
        </>
    );
};

export default PrivacyPolicy;
