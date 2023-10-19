import About from "@/components/about/about";
import HomeSection from "@/components/home/home";
import Nav from "@/components/nav";
import Features from "@/components/mid-section/features";
import Contacts from "@/components/contact/contacts";

export default function Home() {
  return (
    <main className="container">
      <Nav />
      <HomeSection />
      <About />
      <Features />
      <Contacts/>
    </main>
  );
}
