"use client";
import TopHeading from "./components/atomics/topHeading";
import SectionTitle from "./components/atomics/sectionTitle";
import AppGallery from "./components/organisms/appGallery";
import AboutMeZone from "./components/organisms/aboutMeZone";
import TechStackZone from "./components/organisms/techStackZone";
import ContactIconButton from "./components/atomics/contactIconButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopHeading />
      <SectionTitle idName="app-gallery" title="App Gallerly" />
      <AppGallery />
      <SectionTitle idName="about-me" title="About Me" />
      <AboutMeZone />
      <SectionTitle idName="technology-stack" title="Technology Stack" />
      <TechStackZone />
      <SectionTitle idName="contact" title="Contact" />
      <ContactIconButton />
    </main>
  );
}
