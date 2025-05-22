import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <section>
      <div className="max-w-3xl mx-auto p-6 text-neutral-800">
        <h1 className="text-3xl font-heading mb-6">Privacy Policy</h1>

        <p className="mb-4">
          This Privacy Policy reflects the requirements of Regulation 2016/679 EU on the protection of natural persons with regard to the processing of personal data and on the free movement of such data ("General Data Protection Regulation" or GDPR), in relation to the processing of personal data and the Personal Data Protection Act.
        </p>

        <p className="mb-4">
          This Privacy Policy applies to the processing of personal data of individuals who use our legal assistant software application and have registered on the following website: <a href="https://app.contextops.ai" className="text-blue-600 underline">https://app.contextops.ai</a> (the "Application").
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information about us</h2>
        <p className="mb-4">
          The personal data of the users of the Application are processed by R&amp;D Solutions Ltd., registered in the Commercial Register at the Registry Agency with UIC 203244195, with seat and address of management: 1 Atanas Dukov str., floor 6, EN Building, 1407 Sofia, Bulgaria ("We", "Us"). ContextOps AI is a brand used by R&amp;D Solutions Ltd.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">What is personal data?</h2>
        <p className="mb-4">
          "Personal data" means any information relating to an identified natural person or an identifiable natural person ("data subject"); an identifiable natural person is a person who can be identified, directly or indirectly, in particular by an identifier such as a name, identification number, location data, online identifier or by one or more attributes, specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Collection, processing of personal data and purposes</h2>
        <p className="mb-4">
          "Processing" of personal data means any operation or set of operations carried out with personal data or a set of personal data by automatic or other means such as collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making the data accessible, arrangement or combination, restriction, deletion or destruction.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">What necessary information do we collect and why?</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Name and surname</li>
          <li>Email address</li>
          <li>Information about the device used (e.g. IP address, OS type, unique identifiers)</li>
          <li>User activity in the app</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">The purpose of processing your data</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Providing access to the functionalities of the application</li>
          <li>Creating and managing user accounts</li>
          <li>Communication with users</li>
          <li>Improving services through analytics and statistics</li>
          <li>Compliance with regulatory requirements</li>
          <li>Answers to your inquiries and recommendations</li>
          <li>For statistical purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Legal bases for processing</h2>
        <p className="mb-4">
          <strong>Data processing on the basis of a contract:</strong> When you use the Application, the data is processed under a contract for the provision of software.
        </p>
        <p className="mb-4">
          <strong>Processing of data based on legitimate interest:</strong> When we process your data for the purposes of statistics, improving our services and analysis, we may rely on our legitimate interest.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data retention</h2>
        <p className="mb-4">
          Your personal data will be stored in accordance with statutory deadlines. We do not store your data indefinitely. Depending on the basis of processing, the retention period may vary.
        </p>
        <p className="mb-4">
          In the case of processing based on consent (e.g. marketing), personal data will be processed until consent is withdrawn.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data transfers</h2>
        <p className="mb-4">
          Your data is not shared or transferred outside the EU/EEA.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data sharing</h2>
        <p className="mb-4">
          Your personal data may be disclosed to third parties only when necessary to provide services, perform a contract, or comply with legal obligations. These include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Cloud and hosting service providers</li>
          <li>Legal and accounting consultants</li>
          <li>Competent state authorities</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your rights</h2>
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and receive a copy of your personal data</li>
          <li>Request correction or update of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request deletion of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Object to processing based on legitimate interest</li>
          <li>Complain to the supervisory authority – CPDP (<a href="https://www.cpdp.bg" className="text-blue-600 underline" target="_blank">www.cpdp.bg</a>)</li>
        </ul>

        <p className="mb-4">
          We may request identity verification and additional information to fulfill your request. A reasonable fee may apply for repeated or excessive access requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to exercise your rights?</h2>
        <p className="mb-4">
          Submit your request via email to: <a href="mailto:AILegalAssistant@rnd-solutions.net" className="text-blue-600 underline">AILegalAssistant@rnd-solutions.net</a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Updates</h2>
        <p className="mb-4">
          This policy may be updated. Last updated on: <strong>22.05.2025</strong>.
        </p>
      </div>
      <Footer />
    </section>
  );
}
