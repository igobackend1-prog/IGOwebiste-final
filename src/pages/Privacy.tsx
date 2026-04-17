import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Privacy = () => (
  <div className="bg-white min-h-screen selection:bg-agri-green-50 selection:text-agri-green-800">
    <SEO
      title="Privacy Policy | IGO Agritech Farms"
      description="Privacy Policy for IGO Agritech Farms — how we collect, use, and protect your information."
      url="/privacy"
    />

    <section className="pt-32 pb-16 bg-agri-earth-25 border-b border-black/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <div className="flex items-center justify-center gap-4 text-agri-gold-500 font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6">
          <div className="w-10 h-[1px] bg-agri-gold-500" />
          Legal
          <div className="w-10 h-[1px] bg-agri-gold-500" />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-black text-agri-earth-900 tracking-tight"
        >
          Privacy Policy
        </motion.h1>
        <div className="flex gap-1.5 justify-center mt-6">
          <div className="w-12 h-1.5 bg-agri-green-700 rounded-full" />
          <div className="w-4 h-1.5 bg-agri-gold-500 rounded-full" />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-black/60 text-base leading-relaxed mb-10">
            This Privacy Policy describes how IGO Agritech Farms ("we", "our", or "us") collects,
            uses, and safeguards information when you visit our website or engage with our services.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Data Collection</h2>
          <p className="text-black/60 text-base leading-relaxed">
            We may collect personal information you voluntarily provide, including your name, email
            address, phone number, postal address, and any details you share through our contact,
            enquiry, or career forms. We may also collect non-personal technical information such as
            browser type, device information, IP address, and pages visited, through standard server
            logs and analytics tools.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Use of Data</h2>
          <p className="text-black/60 text-base leading-relaxed">
            The information we collect is used to respond to enquiries, provide requested services,
            improve our website and offerings, send service-related communications, and comply with
            legal obligations. We do not sell or rent your personal information to third parties.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Cookies</h2>
          <p className="text-black/60 text-base leading-relaxed">
            Our website uses cookies and similar technologies to enhance your browsing experience,
            remember preferences, and analyse traffic. You may disable cookies through your browser
            settings, though some features of the site may not function optimally as a result.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Third-Party Services</h2>
          <p className="text-black/60 text-base leading-relaxed">
            We may use trusted third-party services (such as analytics providers, hosting providers,
            and form-submission services) that process limited data on our behalf. These providers
            are required to handle information in accordance with their respective privacy policies
            and applicable law.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Contact</h2>
          <p className="text-black/60 text-base leading-relaxed">
            If you have any questions regarding this Privacy Policy or wish to exercise your rights
            in relation to your personal information, please contact us at:
          </p>
          <p className="text-black/70 text-base leading-relaxed mt-4">
            IGO Agritech Farms<br />
            No 17, Kovalan Street, 2nd Main Road,<br />
            Uthandi Kanathur, Chennai 600119<br />
            Email: bd2@igogroups.com
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Updates</h2>
          <p className="text-black/60 text-base leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or applicable law. Any updates will be posted on this page, and the revised policy will
            take effect upon publication.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Privacy;
