import About from "./components/about/about";
import HomeSection from "./components/home/home";
import Nav from "./components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <HomeSection/>
      <About/>
    </main>
  );
}
