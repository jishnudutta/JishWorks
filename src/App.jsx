function App() {
  return (
    <div>
      <main className="min-h-screen bg-[#050816] flex flex-col">
        <nav
          className="
            fixed top-5 left-1/2 -translate-x-1/2
            z-50
            flex items-center
            w-[95%] max-w-6xl
            px-8 py-4
            rounded-full
            bg-white/10
            backdrop-blur-2xl
            border border-white/10
            shadow-2xl
          "
        >
          <h1 className="text-2xl font-bold tracking-tight text-white select-none">
            Jish<span className="text-orange-400">Works</span>
          </h1>

          <div className="ml-auto flex items-center gap-8 text-gray-300">
            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </nav>
        {/* <section className="flex items-center justify-center">
          <div>
            <div className="text-white flex-col w-0.5 left-0">
             ------------------------------------------
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
