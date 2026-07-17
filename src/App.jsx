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

          <div className="ml-auto flex items-center md:gap-8 gap-3 text-gray-300">
            <a href="#hero" className="hover:text-white transition">
              Top
            </a>

            <a href="#about" className="hover:text-white transition">
              About
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </nav>
        <section
          id="hero"
          className="flex flex-col items-center justify-center mx-auto mt-auto min-h-[80vh] py-10 px-2"
        >
          <h2 className="font-bold text-5xl md:text-8xl font-display py-8">
            Hi, I'm Jishnu Dutta
          </h2>
          <br />
          <p className="max-w-3xl py-5 font-display font-medium md:text-2xl text-lg lg:text-3xl text-gray-200 ml-2">
            A curious developer who loves exploring new technologies and
            building meaningful projects. From machine learning and AI to modern
            web development, I'm always learning, experimenting, and turning
            ideas into reality.
          </p>
        </section>
        <section
          id="about"
          className="flex flex-col items-center justify-center mx-auto mt-10 px-2"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl">
            About
          </h3>
          <p className="font-sans font-normal text-lg md:text-xl max-w-3xl my-2 text-gray-300">
            I'm a student developer who enjoys turning curiosity into projects.
            I love exploring different areas of technology, from machine
            learning and AI to modern web development and backend systems.
            Rather than staying in one field, I enjoy learning new tools,
            experimenting with ideas, and building software that solves real
            problems. Every project is an opportunity to learn something new,
            and this portfolio showcases that journey.
          </p>
          <p className="font-sans font-normal text-lg max-w-3xl my-2 text-gray-300 md:text-xl">
            Alongside my personal projects, I also take on small freelance
            projects for individuals, students, and local businesses. If you
            have an idea you'd like to bring to life or need a modern website or
            web application, I'd be happy to discuss how I can help.
          </p>
        </section>
        <section
          id="skills"
          className="flex flex-col items-center justify-center mx-auto mt-10 px-2"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl">
            Skills
          </h3>
          <p className="font-sans font-normal text-lg md:text-xl max-w-3xl my-2 text-gray-300"></p>
        </section>
      </main>
    </div>
  );
}

export default App;
