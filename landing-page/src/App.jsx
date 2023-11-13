import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";

function App() {

  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col justify-start items-stretch">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App
