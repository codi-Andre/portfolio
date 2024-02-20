import { AboutSection } from "./components/about/about-section"
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
    </>
  )
}

export default App
