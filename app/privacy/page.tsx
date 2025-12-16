"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Phone, Building, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="relative mx-auto mb-5 w-fit">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-xl blur-md opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shadow-lg mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-muted-foreground">
                Sally Calls ("we", "our", or "us") is committed to protecting your privacy and complying with the 
                <strong> Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>. 
                This Privacy Policy explains how we collect, use, disclose, and protect your personal information when 
                you use our AI-powered voice calling services and website.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center gap-2">
                <Building className="w-6 h-6" />
                About Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Sally Calls provides AI-powered voice agent services for businesses in Australia. Our registered 
                business details are:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p><strong>Business Name:</strong> Sally Calls</p>
                <p><strong>Location:</strong> Australia</p>
                <p><strong>Contact Email:</strong> privacy@sallycalls.com</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>We collect the following types of personal information:</p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-foreground mb-2">Contact Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number (including mobile numbers)</li>
                    <li>Company name and business details</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-foreground mb-2">Call Data</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Call recordings and transcripts</li>
                    <li>Call duration and timestamps</li>
                    <li>Voice data processed by our AI system</li>
                    <li>Call outcomes and analytics</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Usage data and analytics</li>
                    <li>Cookies and similar technologies</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-foreground mb-2">Business Information</h4>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>CRM integration data</li>
                    <li>Calendar and scheduling information</li>
                    <li>Customer service preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">2. How We Collect Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We collect personal information through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Our website contact and demo request forms</li>
                <li>Phone calls made through our AI voice agent service</li>
                <li>Email communications and correspondence</li>
                <li>Integration with your business systems (CRM, calendar, etc.)</li>
                <li>Cookies and analytics tools on our website</li>
                <li>Third-party service providers acting on our behalf</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">3. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We use your personal information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Delivery:</strong> To provide our AI voice calling services and schedule appointments</li>
                <li><strong>Communication:</strong> To contact you regarding your inquiries, demos, and service updates</li>
                <li><strong>AI Processing:</strong> To train and improve our AI voice agents (using de-identified data where possible)</li>
                <li><strong>Customer Support:</strong> To respond to your questions and provide technical assistance</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and improve our services</li>
                <li><strong>Billing:</strong> To process payments and maintain billing records</li>
                <li><strong>Legal Compliance:</strong> To comply with Australian laws and regulations</li>
                <li><strong>Marketing:</strong> To send you information about our services (with your consent)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">4. Call Recording and Consent</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="font-semibold text-foreground mb-2">⚠️ Important Notice</p>
                <p>
                  All calls made through our AI voice agent service may be recorded for quality assurance, 
                  training, and compliance purposes. By using our service, you consent to call recording 
                  in accordance with Australian telecommunications laws.
                </p>
              </div>
              <p>
                We provide notice at the beginning of calls that recording is taking place. Call recordings 
                are securely stored and accessed only by authorized personnel for legitimate business purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">5. Disclosure of Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>We may disclose your personal information to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third-party providers who assist us in delivering our services (e.g., cloud hosting, payment processors)</li>
                <li><strong>AI Technology Partners:</strong> Providers of AI and voice technology services</li>
                <li><strong>Business Partners:</strong> CRM systems and calendar integrations you authorize</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Professional Advisors:</strong> Lawyers, accountants, and consultants as needed</li>
              </ul>
              <p className="mt-3">
                We do not sell or rent your personal information to third parties for their marketing purposes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">6. Data Storage and Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-3">
                <p className="font-semibold text-foreground mb-2">
                  <Lock className="inline w-5 h-5 mr-2" />
                  Security Measures
                </p>
                <p>
                  We implement industry-standard security measures to protect your personal information, including:
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure cloud storage infrastructure</li>
                <li>Access controls and authentication systems</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
              </ul>
              <p className="mt-3">
                <strong>Data Storage Location:</strong> Your data is primarily stored in Australia. Where we use 
                overseas service providers, we ensure they comply with Australian privacy standards through 
                appropriate safeguards and contractual arrangements.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">7. Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>Under the Privacy Act 1988 and APPs, you have the right to:</p>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <p><strong>Access:</strong> Request access to your personal information we hold</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                  <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</p>
                </div>
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <p><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                  <p><strong>Complaint:</strong> Lodge a complaint about how we handle your information</p>
                </div>
              </div>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the details in the Contact section below.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">8. Marketing Communications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                By submitting your contact information through our forms, you agree to receive:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Automated phone calls from our AI voice agent for demonstration purposes</li>
                <li>Email communications regarding your inquiry and our services</li>
                <li>Marketing materials about Sally Calls services (with your consent)</li>
              </ul>
              <p>
                We comply with the <strong>Spam Act 2003</strong> and <strong>Do Not Call Register Act 2006</strong>. 
                You can opt-out of marketing communications at any time by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clicking the unsubscribe link in our emails</li>
                <li>Contacting us directly at privacy@sallycalls.com</li>
                <li>Informing our AI agent during a call</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">9. Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Our website uses cookies and similar technologies to improve your browsing experience and analyze 
                website traffic. We use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> To understand how visitors use our site</li>
                <li><strong>Marketing Cookies:</strong> To deliver relevant advertising (with your consent)</li>
              </ul>
              <p>
                You can control cookies through your browser settings, but disabling some cookies may affect 
                website functionality.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">10. Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services to you</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Improve our AI systems and service quality</li>
              </ul>
              <p>
                Call recordings are typically retained for 7 years in accordance with Australian business 
                record-keeping requirements. After this period, data is securely deleted or de-identified.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">11. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Our services are intended for businesses and individuals aged 18 and over. We do not knowingly 
                collect personal information from children under 18. If we become aware that we have collected 
                information from a child, we will take steps to delete it promptly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">12. Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices of these external sites. We encourage you to review their privacy policies before 
                providing any personal information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">13. Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                legal requirements. The updated policy will be posted on our website with a new "Last Updated" 
                date. Continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text flex items-center gap-2">
                <Mail className="w-6 h-6" />
                14. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                If you have any questions about this Privacy Policy, wish to exercise your privacy rights, 
                or have a complaint about how we handle your personal information, please contact us:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <strong>Email:</strong> privacy@sallycalls.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <strong>Phone:</strong> Available through our website contact form
                </p>
                <p className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-primary" />
                  <strong>Mail:</strong> Sally Calls, Australia
                </p>
              </div>
              <p className="mt-4">
                <strong>Complaints Process:</strong> We aim to respond to all privacy inquiries and complaints 
                within 30 days. If you are not satisfied with our response, you may contact the Office of the 
                Australian Information Commissioner (OAIC):
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-1">
                <p><strong>OAIC Website:</strong> <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.oaic.gov.au</a></p>
                <p><strong>OAIC Phone:</strong> 1300 363 992</p>
                <p><strong>OAIC Email:</strong> enquiries@oaic.gov.au</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">15. Consent and Agreement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                By using our website and services, you acknowledge that you have read, understood, and agree 
                to this Privacy Policy. You consent to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The collection, use, and disclosure of your personal information as described</li>
                <li>Receiving automated calls and emails from Sally Calls</li>
                <li>Call recording for quality and training purposes</li>
                <li>The use of cookies and tracking technologies on our website</li>
              </ul>
              <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 rounded-lg border border-primary/20 mt-4">
                <p className="font-semibold text-foreground">
                  If you do not agree with this Privacy Policy, please do not use our services or provide us 
                  with your personal information.
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

