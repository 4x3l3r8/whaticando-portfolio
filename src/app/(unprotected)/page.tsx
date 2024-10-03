import { ContactSection, Hero, Projects, StackSection, ToolsMarquee, WorkExperience } from "../_components/landingPage";


export default async function Home() {
  return (
    <>
      <Hero />
      <ToolsMarquee />
      <StackSection />
      <WorkExperience />
      <Projects />
      <ContactSection />
    </>
  );
}
