import { AboutSection } from "./components/about/about-section"
import { ContactSection } from "./components/contact-section/contact-section"
import { Header } from "./components/header/header"
import { HeroSection } from "./components/hero-section/hero-section"
import { ProjectsSection } from "./components/projects-section/projects-section"

function App() {
  return (
    <>
      <Header />

      <main class="container">
        <HeroSection />

        <ProjectsSection />

        <AboutSection />
      </main>

      <ContactSection />
    </>
  )
}

export default App
