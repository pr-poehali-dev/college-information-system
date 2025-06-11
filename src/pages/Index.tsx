import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import Faculty from "@/components/Faculty";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <Stats />
      <Programs />
      <Faculty />
      <Contact />
    </div>
  );
};

export default Index;
