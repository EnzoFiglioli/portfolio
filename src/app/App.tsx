import {Header} from "@/components/layouts/Header";
import { About } from "@/features/about/About";
import { Chatbot } from "@/features/bot";
import { Education } from "@/features/education";
import { Hero } from "@/features/hero/index";
import { Projects } from "@/features/projects";
import { Stack } from "@/features/stack";
import { Contact } from "@/features/contact";

function App() {
  return (
    <>
      <Header />
      <main className="bg-[var(--background)] text-white min-h-screen px-5 pb-10 pt-28 md:px-6 lg:px-8">
        <Hero />
        <Stack />
        <Projects />
        <About />
        <Education />
        <Contact />
      </main>
      
      <Chatbot />
    </>
  );
}

export default App;
