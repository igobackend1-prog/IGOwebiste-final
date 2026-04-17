import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Terms = () => (
  <div className="bg-white min-h-screen selection:bg-agri-green-50 selection:text-agri-green-800">
    <SEO
      title="Terms of Use | IGO Agritech Farms"
      description="Terms of Use governing access to and use of the IGO Agritech Farms website and services."
      url="/terms"
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
          Terms of Use
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
            These Terms of Use ("Terms") govern your access to and use of the website and services
            provided by IGO Agritech Farms ("we", "our", or "us"). By accessing or using our site,
            you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Acceptance of Terms</h2>
          <p className="text-black/60 text-base leading-relaxed">
            By visiting, browsing, or using this website, you acknowledge that you have read,
            understood, and agree to comply with these Terms and all applicable laws and
            regulations. If you do not agree, please discontinue use of the site.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Use of Site</h2>
          <p className="text-black/60 text-base leading-relaxed">
            You agree to use this website only for lawful purposes and in a manner that does not
            infringe the rights of, restrict, or inhibit the use and enjoyment of the site by any
            third party. Unauthorised attempts to access, modify, or disrupt the site or its data
            are strictly prohibited.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Intellectual Property</h2>
          <p className="text-black/60 text-base leading-relaxed">
            All content on this website — including text, graphics, logos, images, videos, and
            software — is the property of IGO Agritech Farms or its licensors and is protected by
            applicable intellectual property laws. You may not reproduce, distribute, or
            commercially exploit any material without our prior written consent.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Disclaimer</h2>
          <p className="text-black/60 text-base leading-relaxed">
            The information on this website is provided on an "as is" basis without warranties of
            any kind, either express or implied. While we strive to keep information accurate and
            up-to-date, we make no representations regarding the completeness, reliability, or
            suitability of any content for a particular purpose.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Limitation of Liability</h2>
          <p className="text-black/60 text-base leading-relaxed">
            To the fullest extent permitted by law, IGO Agritech Farms shall not be liable for any
            direct, indirect, incidental, consequential, or punitive damages arising from your use
            of, or inability to use, the website or any services referenced on it.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Governing Law</h2>
          <p className="text-black/60 text-base leading-relaxed">
            These Terms are governed by and construed in accordance with the laws of India. Any
            disputes arising out of or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts located in Chennai, Tamil Nadu.
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-agri-earth-900 tracking-tight mt-12 mb-4">Contact</h2>
          <p className="text-black/60 text-base leading-relaxed">
            For any questions about these Terms, please contact us at:
          </p>
          <p className="text-black/70 text-base leading-relaxed mt-4">
            IGO Agritech Farms<br />
            No 17, Kovalan Street, 2nd Main Road,<br />
            Uthandi Kanathur, Chennai 600119<br />
            Email: bd2@igogroups.com
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Terms;
