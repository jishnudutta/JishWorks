import SkillCard from "./components/SkillCard";
import { FaReact, FaServer, FaTools, FaBrain } from "react-icons/fa";

function App() {
  const skillsData = [
    {
      logo: FaReact,
      category: "Frontend",
      description:
        "Building responsive and modern user interfaces with today's web technologies.",
      skills: [
        { name: "React", style: "text-cyan-400" },
        { name: "Tailwind CSS", style: "text-sky-400" },
        { name: "JavaScript", style: "text-yellow-400" },
        { name: "HTML", style: "text-orange-500" },
        { name: "CSS", style: "text-blue-500" },
      ],
    },
    {
      logo: FaServer,
      category: "Backend",
      description: "Creating fast, scalable APIs and backend systems.",
      skills: [
        { name: "Python", style: "text-yellow-300" },
        { name: "FastAPI", style: "text-green-400" },
        { name: "REST APIs", style: "text-purple-400" },
        { name: "MongoDB", style: "text-green-500" },
      ],
    },
    {
      logo: FaBrain,
      category: "Machine Learning",
      description:
        "Training models, analyzing data, and experimenting with AI.",
      skills: [
        { name: "Scikit-learn", style: "text-orange-400" },
        { name: "Pandas", style: "text-cyan-400" },
        { name: "NumPy", style: "text-blue-400" },
        { name: "XGBoost", style: "text-yellow-500" },
        { name: "Matplotlib", style: "text-red-400" },
      ],
    },
    {
      logo: FaTools,
      category: "Tools",
      description: "Tools I use to build, collaborate, and ship projects.",
      skills: [
        { name: "GitHub", style: "text-gray-300" },
        { name: "VS Code", style: "text-blue-400" },
      ],
    },
  ];
  return (
    <div className=" bg-[#050816] ">
      <main className="min-h-screen flex flex-col text-white">
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-10">
            {skillsData.map((card) => (
              <SkillCard
                key={card.category}
                logo={card.logo}
                category={card.category}
                description={card.description}
                skills={card.skills}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
