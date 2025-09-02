&apos;use client&apos;

import Link from &apos;next/link&apos;
import { ArrowRight } from &apos;lucide-react&apos;
import dynamic from &apos;next/dynamic&apos;

const HeroScene = dynamic(() => import(&apos;@/components/three/HeroScene&apos;), { ssr: false })

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
      <HeroScene />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
          <span className="gradient-text">AltDev</span>
          <br />
          <span className="text-4xl md:text-6xl">Innovation Unleashed</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto">
          We craft cutting-edge technology solutions that transform ideas into digital reality. 
          Your vision, our expertise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary text-lg px-8 py-4 flex items-center justify-center">
            Get Started <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link href="/services" className="btn-secondary text-lg px-8 py-4">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  )
}