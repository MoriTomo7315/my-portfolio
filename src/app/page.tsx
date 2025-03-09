"use client";
import TopHeading from "./components/atomics/topHeading";
import SectionTitle from "./components/atomics/sectionTitle";
import AppGallery from "./components/organisms/appGallery";
import AboutMeZone from "./components/organisms/aboutMeZone";
import TechStackZone from "./components/organisms/techStackZone";
import ContactIconButton from "./components/atomics/contactIconButton";

export default function Home() {
  return (
    <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-24">
        <TopHeading />
        
        <section>
          <SectionTitle idName="app-gallery" title="App Gallery" />
          <AppGallery />
        </section>

        <section>
          <SectionTitle idName="about-me" title="About Me" />
          <AboutMeZone />
        </section>

        <section>
          <SectionTitle idName="technology-stack" title="Technology Stack" />
          <TechStackZone />
        </section>

        <section>
          <SectionTitle idName="contact" title="Contact" />
          <ContactIconButton />
        </section>
      </div>
    </main>
  );
}
