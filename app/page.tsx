import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { ProjectGallery } from '@/components/project-gallery';
import { Skills } from '@/components/skills';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { TechMarquee } from '@/components/tech-marquee';
import { ShowcaseBanner } from '@/components/showcase-banner';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <ShowcaseBanner />
        <ProjectGallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
