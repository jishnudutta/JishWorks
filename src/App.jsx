import SkillCard from "./components/SkillCard";
import { FaReact, FaServer, FaTools, FaBrain, FaGithub } from "react-icons/fa";
import GlassButton from "./components/GlassButton";
import DotGrid from "./components/DotGrid";

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
        { name: "Streamlit", style: "text-red-400" },
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
        { name: "Vercel", style: "text-white" },
      ],
    },
  ];
  return (
    <div className=" bg-[#050816] relative min-h-screen ">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={2.5}
          gap={26}
          baseColor="#2a2a2a"
          activeColor="#fb923c"
          proximity={80}
          shockRadius={100}
          shockStrength={1.5}
          resistance={1000}
          returnDuration={2}
        />
      </div>
      <main className="relative z-10 min-h-screen flex flex-col text-white">
        <nav
          className="site-nav fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl"
        >
          <h1 className="site-brand font-bold tracking-tight text-white select-none shrink-0">
            Jish<span className="text-orange-400">Works</span>
          </h1>

          <div className="site-nav-links ml-auto flex items-center text-gray-300">
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
          className="hero-section flex flex-col items-center justify-center mx-auto px-4 text-center"
        >
          <h2 className="hero-title font-bold font-display">
            Hi, I'm Jishnu Dutta
          </h2>
          <p className="hero-copy max-w-3xl font-display font-medium text-gray-200">
            A curious developer who loves exploring new technologies and
            building meaningful projects. From machine learning and AI to modern
            web development, I'm always learning, experimenting, and turning
            ideas into reality.
          </p>
        </section>
        <section
          id="about"
          className="content-section flex flex-col items-center justify-center mx-auto mt-10 px-4 scroll-mt-28 mb-20"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl mb-6">
            About
          </h3>
          <p className="font-sans font-normal text-lg md:text-xl max-w-3xl my-2 text-gray-300">
            I'm a 13-year-old Indian student developer currently in 8th grade
            who enjoys turning curiosity into projects. I love exploring
            different areas of technology, from machine learning and AI to
            modern web development and backend systems. Rather than staying in
            one field, I enjoy learning new tools, experimenting with ideas, and
            building software that solves real problems. Every project is an
            opportunity to learn something new, and this portfolio showcases
            that journey.
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
          className="content-section flex flex-col items-center justify-center mx-auto mt-10 px-4 scroll-mt-28 mb-20"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl mb-6">
            Skills
          </h3>
          <div className="skill-grid grid gap-5 sm:gap-8 md:grid-cols-2 mt-6 sm:mt-10">
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
        <section
          id="projects"
          className="content-section flex flex-col items-center justify-center mx-auto mt-10 px-4 scroll-mt-28 mb-20"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl mb-6">
            Projects
          </h3>
          <p className="font-sans font-normal text-lg md:text-xl max-w-3xl my-2 text-gray-300">
            I enjoy creating software that blends design, engineering, and
            innovation. My portfolio includes{" "}
            <a
              href="https://jishos.jishworks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-blue-400 transition-colors underline underline-offset-4"
            >
              JishOS
            </a>
            , backend services such as{" "}
            <a
              href="https://funapi.jishworks.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-blue-400 transition-colors underline underline-offset-4"
            >
              FunAPI
            </a>
            , hardware projects like ByteBoard, and AI and IoT experiments.
            Every project is an opportunity to learn, solve real problems, and
            share my work with the community.
          </p>
          <GlassButton
            tint="#3B82F6"
            onClick={() =>
              window.open(
                "https://github.com/jishnudutta",
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            <span className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              <span>View GitHub</span>
            </span>
          </GlassButton>
        </section>
        <section
          id="contact"
          className="content-section flex flex-col items-center justify-center mx-auto mt-10 px-4 scroll-mt-28 mb-20"
        >
          <h3 className="font-display font-semibold text-3xl md:text-5xl mb-6">
            Contact
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <GlassButton
              tint="#5865F2"
              onClick={() =>
                window.open(
                  "https://discord.com/users/jishnu9220",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Contact on Discord
            </GlassButton>

            <GlassButton
              tint="#22C55E"
              onClick={() =>
                (window.location.href = "mailto:jishnudutta2002@gmail.com")
              }
            >
              Email Me
            </GlassButton>
            <GlassButton
              tint="#3B82F6"
              onClick={() =>
                window.open(
                  "https://slack.com/app_redirect?channel=U0B60V8BLHF",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              Contact on Slack
            </GlassButton>
          </div>
          <div>
            <p className="mt-6 text-center text-sm text-gray-400 max-w-md">
              <span className="font-medium text-gray-300">Note:</span> The Slack
              button only works if you're already a member of the Hack Club
              Slack workspace.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
