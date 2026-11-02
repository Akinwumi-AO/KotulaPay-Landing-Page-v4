import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { PageMeta } from '../components/PageMeta';

const COLLABORATION_TOOLS = [
  {
    image: '/collaboration-tools/workplace.png',
    imageAlt: 'Zoho Workplace',
    url: 'https://workplace.zoho.com/',
    actionLabel: 'Open Workplace',
  },
] as const;

export default function TeamToolsPage() {
  return (
    <div className="min-h-screen w-full bg-[#001c26]">
      <PageMeta
        title="Team Tools | Kotulapay"
        description="Access Kotulapay collaboration and workplace tools."
        canonical="https://kotulapay.com/team-tools"
      />
      <Header />

      <main className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#00bf6f]/10 blur-[120px]" />
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#289685]/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#00bf6f]">
              Kotulapay workspace
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Collaboration tools
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#cdced7]">
              Choose a tool to continue to your workspace.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1">
            {COLLABORATION_TOOLS.map((tool, index) => (
              <motion.div
                key={tool.image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-8"
              >
                <img
                  src={tool.image}
                  alt={tool.imageAlt}
                  className="h-64 w-full rounded-2xl object-contain md:h-80"
                />
                <Button
                  asChild
                  size="lg"
                  className="mt-6 h-14 w-full rounded-full bg-[#289685] text-lg text-white hover:bg-[#237a71]"
                >
                  <a href={tool.url} target="_blank" rel="noopener noreferrer">
                    {tool.actionLabel}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
