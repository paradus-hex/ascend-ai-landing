import About from "@/components/about/about";
import HomeSection from "@/components/home/home";
import Nav from "@/components/nav";
import Features from "@/components/mid-section/features";
import Contacts from "@/components/contact/contacts";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomeSection />
      <About />
      <Features />
      <Contacts/>
      <Footer/>
    </main>
  );
}
