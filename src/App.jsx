function App() {
  return (
    <div>
      <main className="min-h-screen bg-[#050816] flex flex-col text-white">
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
            <a href="#hero" className="hover:text-white transition">
              Top
            </a>

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
        <section
          id="hero"
          className="flex flex-col items-center justify-center mx-auto mt-40"
        >
          <h2 className="font-bold text-6xl md:text-8xl font-display">
            Hi, I'm Jishnu Dutta.
          </h2>
          <br />
          <p className="max-w-3xl py-5 font-display font-medium md:text-2xl text-xl text-gray-200">
            A curious developer who loves exploring new technologies and
            building meaningful projects. From machine learning and AI to modern
            web development, I'm always learning, experimenting, and turning
            ideas into reality.
          </p>
        </section>
        <section id="about" className="flex flex-col items-center justify-center mx-auto mt-10">
          <h3 className="font-display font-semibold text-4xl"></h3>
          <p className="font-sans font-normal text-lg max-w-3xl my-2 text-gray-300">
            
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
