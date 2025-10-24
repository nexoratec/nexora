import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            TERMS & <span className="text-primary">CONDITIONS</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p>
                By accessing and using Nexora Technologies' internet services, you accept and 
                agree to be bound by these Terms and Conditions. If you do not agree to these 
                terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">2. SERVICE DESCRIPTION</h2>
              <p className="mb-4">
                Nexora Technologies provides residential and business internet connectivity 
                services. Our services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>High-speed fiber-optic internet access</li>
                <li>Wi-Fi router equipment and installation</li>
                <li>24/7 technical support</li>
                <li>Optional premium services and add-ons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">3. SERVICE AVAILABILITY</h2>
              <p>
                While we strive to provide 99.9% uptime, we do not guarantee uninterrupted 
                service. Service may be affected by maintenance, upgrades, or circumstances 
                beyond our control. We will notify customers of scheduled maintenance when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">4. ACCEPTABLE USE POLICY</h2>
              <p className="mb-4">Customers agree not to use our services for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Illegal activities or distribution of illegal content</li>
                <li>Sending spam or unsolicited communications</li>
                <li>Launching cyber attacks or hacking attempts</li>
                <li>Copyright infringement</li>
                <li>Activities that harm our network or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">5. BILLING AND PAYMENTS</h2>
              <p className="mb-4">
                Service fees are billed monthly in advance. Payment terms:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due on the date specified in your billing cycle</li>
                <li>Late payments may result in service suspension</li>
                <li>You are responsible for all charges incurred under your account</li>
                <li>Prices may change with 30 days' notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">6. EQUIPMENT</h2>
              <p>
                Nexora-provided equipment remains our property and must be returned upon 
                service termination. You are responsible for any damage to equipment beyond 
                normal wear and tear.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">7. SERVICE TERMINATION</h2>
              <p className="mb-4">
                Either party may terminate service with 30 days' notice. We may immediately 
                terminate service if you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate these terms</li>
                <li>Fail to pay charges when due</li>
                <li>Provide false information</li>
                <li>Engage in fraudulent activity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">8. LIABILITY LIMITATION</h2>
              <p>
                To the maximum extent permitted by law, Nexora Technologies shall not be 
                liable for any indirect, incidental, or consequential damages arising from 
                service use or interruption. Our total liability is limited to the amount 
                paid for services in the preceding three months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">9. PRIVACY</h2>
              <p>
                Your use of our services is also governed by our Privacy Policy. Please 
                review our Privacy Policy to understand how we collect and use your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">10. MODIFICATIONS</h2>
              <p>
                We reserve the right to modify these terms at any time. Changes will be 
                effective upon posting to our website. Continued use of services after 
                changes constitutes acceptance of modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">11. CONTACT INFORMATION</h2>
              <p>
                For questions about these Terms and Conditions:
                <br /><br />
                Email: legal@nexora.tech<br />
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

export default Terms;
