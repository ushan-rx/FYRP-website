import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Domain from "@/components/Domain";
import Milestones from "@/components/Milestones";
import Documents from "@/components/Documents";
import Presentations from "@/components/Presentations";
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Domain />
      <Milestones />
      <Documents />
      <Presentations />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
