import About from "./components/about/about";
import HomeSection from "./components/home/home";
import Nav from "./components/nav";
import Features from "./components/mid-section/features";
import Review from "./components/mid-section/client-review/review";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomeSection />
      <About />
      <Features />
      <Review />
    </main>
  );
}
