import Header from "@/app/_components/Header/page";
import Hero from "@/app/_components/Hero/page";
import About from "@/app/_components/About/page";
import Features from "@/app/_components/Features/page";
import Plans from "@/app/_components/Plans/page";
import Contact from "@/app/_components/Contact/page";
import Footer from "@/app/_components/Footer/page";
const Page = () => {
  return (
    <div className="relative pb-60">
      <Header />
      <Hero />
      <About />
      <Features />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
};
export default Page;
