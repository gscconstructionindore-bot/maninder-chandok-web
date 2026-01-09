
import React from 'react';

export const metadata = {
    title: 'Terms of Service | Maninder Singh Chandok',
    description: 'Terms of Service for Maninder Singh Chandok website.',
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950 pt-32 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Maninder Singh Chandok ("we," "us" or "our"), concerning your access to and use of this website. By accessing the site, you have read, understood, and agreed to be bound by all of these Terms of Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Intellectual Property Rights</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Representations</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            By using the Site, you represent and warrant that (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose; and (5) your use of the Site will not violate any applicable law or regulation.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Products and Services</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            All products and services available on this Site are subject to availability. We reserve the right to discontinue any product or service at any time for any reason. Prices for all products are subject to change.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Limitation of Liability</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Governing Law</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            These Terms shall be governed by and defined following the laws of India. Maninder Singh Chandok and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Contact Us</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                            Email: maninder.chandok@gmail.com
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
