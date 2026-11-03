import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PageMeta } from '../components/PageMeta';
import { Button } from '../components/ui/button';

export default function BrandGuidelinePage() {
  return (
    <div className="min-h-screen bg-[#001c26]">
      <PageMeta
        title="Brand Guidelines | Kotulapay"
        description="Kotulapay integrating partners can request access to the official brand guidelines."
        canonical="https://kotulapay.com/brand-guidelines"
      />
      <Header />

      <main className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-36 md:px-12 md:pt-40">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00bf6f]/10 blur-[120px]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#289685]/30 to-transparent" />
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="relative mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.06] px-7 py-12 text-center backdrop-blur-sm md:px-14 md:py-16"
        >
          <div className="mx-auto mb-7 flex size-14 items-center justify-center rounded-2xl bg-[#d4f291]">
            <Mail className="size-6 text-[#001c26]" aria-hidden="true" />
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#00bf6f]">
            Integrating partners
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Brand Guidelines
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#cdced7]">
            Our brand guidelines are available exclusively to integrating partners. To request
            access, contact our technical team by email.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-12 rounded-full bg-[#289685] px-7 text-base text-white hover:bg-[#237a71]"
          >
            <a href="mailto:tech@kotulapay.com">
              <Mail aria-hidden="true" />
              Email tech@kotulapay.com
            </a>
          </Button>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
