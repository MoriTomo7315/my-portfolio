import Header from "./organisms/header";
import TopHeading from "./atomics/topHeading";
import SectionTitle from "./atomics/sectionTitle";
import AppGallery from "./organisms/appGallery";
import AboutMeZone from "./organisms/aboutMeZone";
import TechStackZone from "./organisms/techStackZone";
import ContactIconButton from "./atomics/contactIconButton";
import Footer from "./organisms/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-full pr-32 pl-32">
        <TopHeading />
        <SectionTitle idName="app-gallery" title="App Gallerly" />
        <AppGallery />
        <SectionTitle idName="about-me" title="About Me" />
        <AboutMeZone />
        <SectionTitle idName="technology-stack" title="Technology Stack" />
        <TechStackZone />
        <SectionTitle idName="contact" title="Contact" />
        <ContactIconButton />
      </div>
      <Footer />
    </main>
  );
}
