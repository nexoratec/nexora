import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            PRIVACY <span className="text-primary">POLICY</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">1. INFORMATION WE COLLECT</h2>
              <p className="mb-4">
                Nexora Technologies collects information to provide better services to our users. 
                We collect information in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Information you provide us (name, email, billing address, phone number)</li>
                <li>Connection data (IP address, service usage, bandwidth consumption)</li>
                <li>Device information (router MAC address, device types)</li>
                <li>Technical support interactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">2. HOW WE USE YOUR INFORMATION</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our internet services</li>
                <li>Process billing and payment transactions</li>
                <li>Send service updates and important notifications</li>
                <li>Provide customer support</li>
                <li>Monitor network performance and security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">3. INFORMATION SHARING</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information to third parties. 
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>For external processing by trusted service providers</li>
                <li>For legal reasons or to comply with court orders</li>
                <li>To protect against fraud and abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">4. DATA SECURITY</h2>
              <p>
                We implement industry-standard security measures to protect your personal 
                information. This includes encryption, secure servers, and regular security 
                audits. However, no method of transmission over the internet is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">5. YOUR RIGHTS</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">6. COOKIES AND TRACKING</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience 
                on our website. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">7. CHILDREN'S PRIVACY</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly 
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">8. CHANGES TO THIS POLICY</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the "Last 
                updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">9. CONTACT US</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br /><br />
                Email: privacy@nexora.tech<br />
                Phone: 1-800-NEXORA<br />
                Address: 123 Tech Plaza, Digital City, DC 12345
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
