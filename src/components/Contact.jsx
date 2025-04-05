export default function Contact() {

    return (
        <section id="contacts" className="bg-white dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Have questions about our services? Want to provide feedback? Need more information about our offerings? Reach out to us at any time.
                </p>
                <div className="text-center text-gray-500 dark:text-gray-400">
                    <p>Email us at:</p>
                    <p><a href="mailto:sales@rnd-solutions.net" className="text-primary-700 dark:text-primary-500">sales@rnd-solutions.net</a> for sales and partnership inquiries</p>
                    <p><a href="mailto:support@rnd-solutions.net" className="text-primary-700 dark:text-primary-500">support@rnd-solutions.net</a> for product support</p>
                    <p>Phone: <a href="tel:+359885222365" className="text-primary-700 dark:text-primary-500">+359 885 222 365</a></p>
                    <p>We are available Monday to Friday, 9 AM to 5 PM.</p>
                    <p>Address: 1 Atanas Dukov str., floor 6, EN Building, 1407 Sofia, Bulgaria</p>
                </div>
            </div>
        </section>

    );
}
