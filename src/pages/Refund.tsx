import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            REFUND <span className="text-primary">POLICY</span>
          </h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">30-DAY MONEY-BACK GUARANTEE</h2>
              <p>
                We're confident you'll love Nexora's service. That's why we offer a 30-day 
                money-back guarantee for all new residential customers. If you're not completely 
                satisfied with our service within the first 30 days, we'll refund your initial 
                payment in full - no questions asked.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">ELIGIBILITY FOR REFUNDS</h2>
              <p className="mb-4">Refunds are available under the following conditions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Request must be made within 30 days of service activation</li>
                <li>Applies to first-time residential customers only</li>
                <li>Equipment must be returned in good condition</li>
                <li>No outstanding balance on the account</li>
                <li>Valid for the initial monthly service fee only</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">NON-REFUNDABLE ITEMS</h2>
              <p className="mb-4">The following items are not eligible for refunds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Installation fees (unless service was never installed)</li>
                <li>Equipment purchased outright (not rented)</li>
                <li>Third-party services or add-ons</li>
                <li>Business service plans</li>
                <li>Service beyond the first 30 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">HOW TO REQUEST A REFUND</h2>
              <p className="mb-4">To request a refund, please follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact our customer service team via phone at 1-800-NEXORA or email at refunds@nexora.tech</li>
                <li>Provide your account number and reason for cancellation</li>
                <li>Schedule equipment return with our logistics team</li>
                <li>Return all equipment within 14 days of cancellation</li>
                <li>Refund will be processed within 10 business days after equipment return</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">EQUIPMENT RETURN</h2>
              <p className="mb-4">
                All Nexora-provided equipment must be returned to receive a refund:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Wi-Fi router and power adapter</li>
                <li>ONT (Optical Network Terminal) if applicable</li>
                <li>All cables and accessories provided</li>
                <li>Original packaging (if available)</li>
              </ul>
              <p className="mt-4">
                Failure to return equipment or returning damaged equipment may result in 
                equipment charges being deducted from your refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">REFUND PROCESSING</h2>
              <p>
                Refunds will be issued to the original payment method used for the purchase. 
                Processing time varies by payment method:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Credit/Debit cards: 5-10 business days</li>
                <li>Bank transfers: 7-14 business days</li>
                <li>PayPal: 3-5 business days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">PRORATED REFUNDS</h2>
              <p>
                For customers beyond the 30-day guarantee period, we offer prorated refunds 
                on a case-by-case basis for service cancellation due to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Relocation to an area without Nexora coverage</li>
                <li>Extended service outages (beyond our control)</li>
                <li>Service quality issues that cannot be resolved</li>
              </ul>
              <p className="mt-4">
                Prorated refunds are calculated based on unused days in your billing cycle.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">BUSINESS ACCOUNTS</h2>
              <p>
                Business accounts have different refund terms as specified in your service 
                agreement. Please contact our business support team at business@nexora.tech 
                for details about your specific contract terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">DISPUTES</h2>
              <p>
                If you believe you're entitled to a refund that was denied, you may escalate 
                your case by contacting our customer relations team at disputes@nexora.tech. 
                We will review all disputes within 15 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bebas text-foreground mb-4">CONTACT US</h2>
              <p>
                For refund inquiries or to initiate a refund request:
                <br /><br />
                Email: refunds@nexora.tech<br />
                Phone: 1-800-NEXORA<br />
                Hours: Monday-Friday, 9AM-6PM EST<br />
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

export default Refund;
