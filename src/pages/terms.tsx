import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms and Conditions – Techmiya Edtech
      </h1>



      {/* Section 1: Fees and Payments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Fees and Payments</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Once paid, course fees are <strong>non-refundable</strong> under any
            circumstances.
          </li>
          <li>
            Payments can be made in <strong>installments</strong> if approved by
            Techmiya Edtech management.
          </li>
          <li>
            Students are required to pay{" "}
            <strong>70% of the course fees upfront</strong>. This portion is
            strictly non-refundable.
          </li>
          <li>
            The remaining <strong>30% is placement-linked fees</strong>. If
            placement assistance is not provided, this 30% will be refunded.
          </li>
        </ul>
      </section>

      {/* Section 2: Attendance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Attendance Policy</h2>
        <p>
          Students must maintain at least{" "}
          <strong>90% attendance</strong> throughout the course to qualify for
          placement assistance. Failure to meet this requirement may result in
          denial of placement services.
        </p>
      </section>

      {/* Section 3: Placement Assistance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Placement Assistance</h2>
        <p>
          Placement assistance is provided only to students who successfully
          complete the course, follow class rules, and maintain 90% or higher
          attendance. Techmiya Edtech does not guarantee a job but ensures
          assistance through interviews, guidance, and industry connections.
        </p>
      </section>

      {/* Section 4: Code of Conduct */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Class Decorum & Conduct</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Students must maintain discipline and follow{" "}
            <strong>classroom decorum</strong> at all times.
          </li>
          <li>
            Misbehavior, misconduct, or disrespect towards trainers, staff, or
            fellow students will not be tolerated and may result in suspension
            or expulsion without refund.
          </li>
          <li>
            Use of mobile phones, disruptive activities, or violating institute
            policies will be considered misconduct.
          </li>
        </ul>
      </section>

      {/* Section 5: General Terms */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. General Terms</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Techmiya Edtech reserves the right to modify course content,
            schedules, trainers, or policies without prior notice.
          </li>
          <li>
            By enrolling, students acknowledge and accept all the terms
            mentioned in this document.
          </li>
        </ul>
      </section>

      {/* Section 6: Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          For any queries related to these Terms and Conditions, please contact
          us at{" "}
          <a
            href="mailto:info@techmiyasolutions.com"
            className="text-blue-600 underline"
          >
            info@techmiyaedtech.com
          </a>{" "}
          or call us at <strong>+91 6361987951</strong>.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
