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
      </main>
    </>
  )
}

export default App
