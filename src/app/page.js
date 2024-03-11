import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer";
import ContactMe from "@/components/ContactMe";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#181818]">
      <Navbar />
      <div className="container mt-24 mx-auto py-10 px-20">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
      <Footer/>
    </main>
  );
}
