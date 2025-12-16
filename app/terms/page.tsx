"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, AlertTriangle } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative mx-auto mb-5 w-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-xl blur-md opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg mx-auto">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">1. Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your") 
                and Sally Calls ("we", "us", or "our") regarding your use of our AI-powered voice calling services.
              </p>
              <p>
                By accessing our website, submitting a demo request, or using our services, you agree to be bound by these Terms 
                and our Privacy Policy. If you do not agree to these Terms, you must not use our services.
              </p>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  Important Notice
                </p>
                <p className="mt-2">
                  These Terms are governed by Australian law and comply with the <strong>Competition and Consumer Act 2010 (Cth)</strong> 
                  and the <strong>Australian Consumer Law (ACL)</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Sally Calls provides the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI Voice Agent:</strong> Automated voice calling system powered by artificial intelligence</li>
                <li><strong>Call Management:</strong> Inbound and outbound call handling and routing</li>
                <li><strong>Calendar Integration:</strong> Appointment scheduling and calendar synchronization</li>
                <li><strong>CRM Integration:</strong> Customer relationship management system integration</li>
                <li><strong>Analytics and Reporting:</strong> Call analytics, transcripts, and performance metrics</li>
                <li><strong>Custom Dashboard:</strong> Web-based interface for managing calls and viewing data</li>
              </ul>
              <p className="mt-3">
                Services are provided on a subscription basis with different pricing tiers as detailed on our website.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">3. Eligibility and Account Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">3.1 Eligibility</h4>
                <p>You must:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Represent a legitimate business or organization (for business accounts)</li>
                  <li>Be located in or operate within Australia</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">3.2 Account Registration</h4>
                <p>To use our services, you must:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your account credentials secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <p className="mt-3">
                  You are responsible for all activities that occur under your account.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">4. Pricing and Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">4.1 Pricing Plans</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Pay as You Go:</strong> $0.25 per call + $500 one-time setup fee</li>
                  <li><strong>Starter:</strong> $199/month (400 calls included) + $500 one-time setup fee</li>
                  <li><strong>Professional:</strong> $399/month (unlimited calls) + $500 one-time setup fee</li>
                  <li><strong>Enterprise:</strong> Custom pricing + $500 one-time setup fee</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">4.2 Setup Fee</h4>
                <p>
                  A one-time, non-refundable setup fee of $500 applies to all plans. This covers initial configuration, 
                  AI training, and system integration.
                </p>

                <h4 className="font-semibold text-foreground mt-4">4.3 Payment Terms</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Setup fees are due before service activation</li>
                  <li>Monthly subscription fees are billed in advance on the first day of each billing cycle</li>
                  <li>Pay-as-you-go usage is billed monthly in arrears</li>
                  <li>All prices are in Australian Dollars (AUD) and include GST where applicable</li>
                  <li>Payment must be made via the payment methods we accept</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">4.4 Late Payment</h4>
                <p>
                  If payment is not received within 7 days of the due date, we reserve the right to suspend or 
                  terminate your service. Late payments may incur additional charges.
                </p>

                <h4 className="font-semibold text-foreground mt-4">4.5 Price Changes</h4>
                <p>
                  We may change our prices with 30 days' written notice. Continued use of services after the 
                  notice period constitutes acceptance of the new prices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">5. Australian Consumer Law Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-foreground flex items-center gap-2 mb-2">
                  <Scale className="w-5 h-5 text-blue-600" />
                  Your Consumer Guarantees
                </p>
                <p>
                  Under the <strong>Australian Consumer Law</strong>, our services come with consumer guarantees 
                  that cannot be excluded. You are entitled to:
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Services provided with due care and skill</li>
                <li>Services that are fit for any purpose you specify</li>
                <li>Services supplied within a reasonable time</li>
                <li>A refund, replacement, or compensation if services fail to meet consumer guarantees</li>
              </ul>
              <p className="mt-3">
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy 
                conferred by the Australian Consumer Law that cannot be lawfully excluded, restricted, or modified.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">6. Service Level and Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">6.1 Service Availability</h4>
                <p>
                  We aim to provide services with 99.5% uptime, excluding scheduled maintenance. We do not guarantee 
                  uninterrupted or error-free service.
                </p>

                <h4 className="font-semibold text-foreground mt-4">6.2 Scheduled Maintenance</h4>
                <p>
                  We may perform scheduled maintenance with reasonable notice. Emergency maintenance may be performed 
                  without prior notice.
                </p>

                <h4 className="font-semibold text-foreground mt-4">6.3 Service Suspension</h4>
                <p>We reserve the right to suspend services for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Non-payment of fees</li>
                  <li>Breach of these Terms</li>
                  <li>Illegal or abusive use of services</li>
                  <li>Technical issues or security concerns</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">7. Customer Obligations and Acceptable Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">7.1 Compliance with Laws</h4>
                <p>You must:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Comply with all applicable Australian laws and regulations</li>
                  <li>Not use services for any illegal purpose</li>
                  <li>Comply with the <strong>Spam Act 2003</strong> and <strong>Do Not Call Register Act 2006</strong></li>
                  <li>Comply with the <strong>Privacy Act 1988</strong> when handling personal information</li>
                  <li>Obtain necessary consents for call recording where required by law</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">7.2 Prohibited Use</h4>
                <p>You must NOT use our services to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Make unsolicited telemarketing calls without proper consent</li>
                  <li>Contact numbers on the Do Not Call Register (unless exempt)</li>
                  <li>Send spam or malicious content</li>
                  <li>Harass, threaten, or abuse any person</li>
                  <li>Impersonate any person or entity</li>
                  <li>Violate any third party's intellectual property rights</li>
                  <li>Interfere with or disrupt our systems or services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use services for fraudulent or deceptive purposes</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">7.3 Content Responsibility</h4>
                <p>
                  You are solely responsible for all content, messages, and communications made through our services. 
                  You must ensure your content complies with Australian law and does not infringe third-party rights.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">8. Call Recording and Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                All calls made through our AI voice agent service may be recorded for quality assurance, training, 
                compliance, and improvement purposes.
              </p>
              <p>
                You acknowledge and agree that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our AI agent will provide notice of recording at the beginning of calls</li>
                <li>You are responsible for obtaining any additional consents required under Australian law</li>
                <li>You must comply with the <strong>Telecommunications (Interception and Access) Act 1979</strong></li>
                <li>Call recordings are stored securely and used in accordance with our Privacy Policy</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">9. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">9.1 Our Intellectual Property</h4>
                <p>
                  All intellectual property rights in our services, including software, AI technology, trademarks, 
                  logos, and content, remain our exclusive property or that of our licensors.
                </p>

                <h4 className="font-semibold text-foreground mt-4">9.2 License Grant</h4>
                <p>
                  We grant you a limited, non-exclusive, non-transferable license to use our services during the 
                  term of your subscription, subject to these Terms.
                </p>

                <h4 className="font-semibold text-foreground mt-4">9.3 Your Content</h4>
                <p>
                  You retain all intellectual property rights in your content. By using our services, you grant us 
                  a license to use, store, process, and transmit your content solely to provide our services.
                </p>

                <h4 className="font-semibold text-foreground mt-4">9.4 AI Training</h4>
                <p>
                  We may use de-identified call data to train and improve our AI systems. We will not use your 
                  personally identifiable information without your consent.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">10. Data Protection and Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                We collect, use, and protect your personal information in accordance with the <strong>Privacy Act 1988</strong> 
                and our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
              <p>Key points:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your data is stored securely in Australia or with providers who comply with Australian privacy standards</li>
                <li>We implement industry-standard security measures</li>
                <li>You have rights to access, correct, and delete your personal information</li>
                <li>We will notify you of any data breaches as required by law</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">11. Liability and Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="font-semibold text-foreground mb-2">⚠️ Important Limitation Notice</p>
                  <p>
                    To the maximum extent permitted by law (subject to Australian Consumer Law):
                  </p>
                </div>

                <h4 className="font-semibold text-foreground mt-4">11.1 Limitation of Liability</h4>
                <p>
                  We are not liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p>
                  Our total liability to you for any claim arising from these Terms or our services shall not exceed 
                  the amount you paid us in the 12 months preceding the claim.
                </p>

                <h4 className="font-semibold text-foreground mt-4">11.2 Australian Consumer Law</h4>
                <p>
                  Nothing in this clause limits or excludes any guarantee, right, or remedy you have under the 
                  Australian Consumer Law that cannot lawfully be limited or excluded.
                </p>

                <h4 className="font-semibold text-foreground mt-4">11.3 Indemnification</h4>
                <p>
                  You agree to indemnify and hold us harmless from any claims, damages, losses, and expenses 
                  (including legal fees) arising from:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your breach of these Terms</li>
                  <li>Your violation of any law or third-party rights</li>
                  <li>Your use of our services</li>
                  <li>Content you provide or transmit through our services</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">12. Warranties and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">12.1 Service "As Is"</h4>
                <p>
                  Subject to the Australian Consumer Law, our services are provided "as is" and "as available" 
                  without warranties of any kind, express or implied.
                </p>

                <h4 className="font-semibold text-foreground mt-4">12.2 No Guarantee of Results</h4>
                <p>
                  We do not guarantee that our AI voice agent will achieve specific results, conversion rates, 
                  or business outcomes.
                </p>

                <h4 className="font-semibold text-foreground mt-4">12.3 Third-Party Services</h4>
                <p>
                  We are not responsible for any third-party services, integrations, or websites that you use 
                  in connection with our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">13. Term and Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">13.1 Term</h4>
                <p>
                  These Terms commence when you first access or use our services and continue until terminated 
                  in accordance with this clause.
                </p>

                <h4 className="font-semibold text-foreground mt-4">13.2 Termination by You</h4>
                <p>
                  You may terminate your subscription at any time by providing 30 days' written notice. You remain 
                  responsible for all fees incurred up to the termination date.
                </p>

                <h4 className="font-semibold text-foreground mt-4">13.3 Termination by Us</h4>
                <p>We may terminate or suspend your account immediately if you:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Breach these Terms</li>
                  <li>Fail to pay fees when due</li>
                  <li>Use services for illegal or prohibited purposes</li>
                  <li>Engage in conduct that harms our reputation or business</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">13.4 Effect of Termination</h4>
                <p>Upon termination:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your right to use our services immediately ceases</li>
                  <li>You must pay all outstanding fees</li>
                  <li>Setup fees are non-refundable</li>
                  <li>We may delete your data in accordance with our data retention policy</li>
                  <li>Provisions that by their nature should survive will continue to apply</li>
                </ul>

                <h4 className="font-semibold text-foreground mt-4">13.5 Refund Policy</h4>
                <p>
                  Monthly subscription fees are non-refundable except as required by Australian Consumer Law. 
                  If you terminate mid-billing cycle, no refund will be provided for the unused portion.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">14. Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">14.1 Good Faith Negotiation</h4>
                <p>
                  If a dispute arises, the parties agree to first attempt to resolve it through good faith negotiation.
                </p>

                <h4 className="font-semibold text-foreground mt-4">14.2 Mediation</h4>
                <p>
                  If negotiation fails, the parties may agree to submit the dispute to mediation before commencing 
                  legal proceedings.
                </p>

                <h4 className="font-semibold text-foreground mt-4">14.3 Governing Law and Jurisdiction</h4>
                <p>
                  These Terms are governed by the laws of Australia. The parties submit to the non-exclusive 
                  jurisdiction of the courts of Australia and courts of appeal from them.
                </p>

                <h4 className="font-semibold text-foreground mt-4">14.4 Australian Consumer Law</h4>
                <p>
                  Nothing in this clause affects your rights under the Australian Consumer Law to seek remedies 
                  through relevant consumer protection agencies or courts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">15. General Provisions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">15.1 Amendments</h4>
                <p>
                  We may modify these Terms at any time by posting the updated Terms on our website. Material 
                  changes will be notified to you with 30 days' notice. Continued use after changes constitutes 
                  acceptance.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.2 Assignment</h4>
                <p>
                  You may not assign or transfer your rights under these Terms without our written consent. We may 
                  assign our rights without restriction.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.3 Severability</h4>
                <p>
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions 
                  will continue in full force and effect.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.4 Waiver</h4>
                <p>
                  Our failure to enforce any right or provision of these Terms will not be deemed a waiver of such 
                  right or provision.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.5 Entire Agreement</h4>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and us 
                  regarding our services and supersede all prior agreements.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.6 Force Majeure</h4>
                <p>
                  We are not liable for any failure or delay in performance due to circumstances beyond our reasonable 
                  control, including acts of God, natural disasters, war, terrorism, labor disputes, or government actions.
                </p>

                <h4 className="font-semibold text-foreground mt-4">15.7 Notices</h4>
                <p>
                  Notices must be sent to the email addresses provided in your account or to subodhmaharjan3@gmail.com 
                  for notices to us.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">16. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <p><strong>Email:</strong> subodhmaharjan3@gmail.com</p>
                <p><strong>Business Name:</strong> Sally Calls</p>
                <p><strong>Location:</strong> Australia</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-4">
                <p className="font-semibold text-foreground mb-2">Consumer Rights Resources</p>
                <p><strong>ACCC:</strong> <a href="https://www.accc.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.accc.gov.au</a></p>
                <p><strong>ACMA:</strong> <a href="https://www.acma.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.acma.gov.au</a></p>
                <p><strong>Do Not Call Register:</strong> <a href="https://www.donotcall.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.donotcall.gov.au</a></p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">17. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                By using our services, you acknowledge that you have read, understood, and agree to be bound by 
                these Terms of Service and our Privacy Policy.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 rounded-lg border border-primary/20">
                <p className="font-semibold text-foreground">
                  If you do not agree to these Terms, you must not access or use our services.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-purple-500 font-semibold transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

