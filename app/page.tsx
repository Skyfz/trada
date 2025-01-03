import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Pricing } from "@/components/Pricing";
import { BecomeSeller } from "@/components/BecomeSeller";
import { Roadmap } from "@/components/Roadmap";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
          <main>
            <Hero />
            <Features />
            <About />
            <Pricing />
            <BecomeSeller />
            <Roadmap />
            <Reviews />
            <FAQ />
            <Contact />
          </main>
          <footer className="py-8 text-center text-sm text-gray-500">
            <p>© 2024 Trada. All rights reserved.</p>
            <p>Based in Sandton, South Africa</p>
          </footer>
    </section>
  );
}
