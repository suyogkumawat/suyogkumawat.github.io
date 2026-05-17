import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Briefcase,
  Award,
  Server,
  Cloud,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function App() {
  const skills = [
    "AWS",
    "Azure",
    "GCP",
    "Kubernetes",
    "OpenShift",
    "Docker",
    "Terraform",
    "Helm",
    "GitHub Actions",
    "Jenkins",
    "ArgoCD",
    "FluxCD",
    "Prometheus",
    "Grafana",
    "Python",
    "Linux",
  ];

  const certifications = [
    "AWS Solutions Architect Associate",
    "AWS Cloud Practitioner",
    "AZ-900",
    "AI-900",
    "DP-900",
    "Terraform Associate Training",
    "CKA Training",
  ];

  return (
    <div className="bg-[#030712] text-white min-h-screen scroll-smooth">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-slate-800 px-6 md:px-16 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-violet-400">
          Suyog Kumawat
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-slate-300">
          <a href="#about" className="hover:text-violet-400">About</a>
          <a href="#skills" className="hover:text-violet-400">Skills</a>
          <a href="#projects" className="hover:text-violet-400">Projects</a>
          <a href="#certifications" className="hover:text-violet-400">Certifications</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition px-5 py-3 rounded-xl"
        >
          <Download size={18} />
          Resume
        </a>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e1b4b]">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-violet-400 text-xl mb-3">Hi, I'm</p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Suyog Kumawat
            </h1>

            <h2 className="text-3xl md:text-4xl mt-5 font-semibold text-violet-400">
              Cloud DevOps Engineer
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-9 max-w-2xl">
              AWS-certified DevOps Engineer with 3.5+ years of experience in
              Kubernetes, Terraform, GitHub Actions, ArgoCD, CI/CD automation,
              observability, and enterprise-grade cloud infrastructure.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className="bg-violet-600 hover:bg-violet-700 transition px-7 py-4 rounded-xl font-semibold"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-violet-500 hover:bg-violet-500/10 transition px-7 py-4 rounded-xl font-semibold"
              >
                Download Resume
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              <a href="https://github.com/suyogkumawat" target="_blank">
                <Github className="hover:text-violet-400" />
              </a>

              <a
                href="https://www.linkedin.com/in/suyogkumawat/"
                target="_blank"
              >
                <Linkedin className="hover:text-violet-400" />
              </a>

              <a href="mailto:suyogkumawat21@gmail.com">
                <Mail className="hover:text-violet-400" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-900 border border-violet-500/20 rounded-[30px] p-10 shadow-2xl shadow-violet-500/10">
              <Cloud size={240} className="text-violet-400" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-20 py-10 grid md:grid-cols-5 gap-6 bg-[#020617]">
        {[
          ["3.5+", "Years Experience"],
          ["200+", "K8s Deployments"],
          ["15+", "EKS Clusters"],
          ["15+", "Enterprise Repositories"],
          ["10+", "Engineers Mentored"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
          >
            <h3 className="text-4xl font-bold text-violet-400">{value}</h3>
            <p className="mt-2 text-slate-400">{label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-4xl font-bold text-violet-400 mb-8">
            About Me
          </h2>

          <p className="text-slate-300 text-lg leading-10">
            I specialize in building scalable and secure cloud-native platforms
            across AWS and hybrid cloud environments. I have hands-on experience
            managing Kubernetes platforms including EKS and OpenShift,
            implementing GitOps pipelines using ArgoCD and FluxCD, automating
            infrastructure provisioning with Terraform and Helm, and building
            enterprise-grade observability solutions using Prometheus, Grafana,
            and CloudWatch.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-20 py-20 bg-[#020617]">
        <h2 className="text-4xl font-bold text-violet-400 mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 hover:border-violet-500 transition border border-slate-800 rounded-2xl p-5 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-violet-400 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition">
            <Server className="text-violet-400 mb-5" size={42} />

            <h3 className="text-2xl font-semibold mb-4">
              EKS Automation Platform
            </h3>

            <p className="text-slate-300 leading-8">
              Automated Kubernetes infrastructure provisioning using Terraform,
              Helm Charts, GitHub Actions and Kustomize for multi-environment
              deployments.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition">
            <ShieldCheck className="text-violet-400 mb-5" size={42} />

            <h3 className="text-2xl font-semibold mb-4">
              Secure Code Migration
            </h3>

            <p className="text-slate-300 leading-8">
              Architected secure cross-network migrations for 15+ enterprise
              repositories using GitHub Actions and SonarQube.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-violet-500 transition">
            <Rocket className="text-violet-400 mb-5" size={42} />

            <h3 className="text-2xl font-semibold mb-4">
              Airflow on EKS
            </h3>

            <p className="text-slate-300 leading-8">
              Migrated Apache Airflow workloads from Docker to AWS EKS,
              improving execution speed, resilience and observability.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        className="px-6 md:px-20 py-20 bg-[#020617]"
      >
        <h2 className="text-4xl font-bold text-violet-400 mb-10">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4"
            >
              <Award className="text-violet-400" />
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-violet-400 mb-10">
          Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-violet-400" />
              <h3 className="text-2xl font-semibold">
                Associate Consultant DevOps — ZS Associates
              </h3>
            </div>

            <p className="text-slate-300 leading-8">
              Working on enterprise AWS cloud platforms, secure repository
              migrations, Terraform frameworks, EKS operations and cloud-native
              DevOps architectures for pharmaceutical clients.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-violet-400" />
              <h3 className="text-2xl font-semibold">
                Cloud DevOps Engineer — Cognizant
              </h3>
            </div>

            <p className="text-slate-300 leading-8">
              Managed 200+ Kubernetes deployments across 15+ EKS clusters,
              implemented GitOps automation, observability stacks and CI/CD
              platforms for enterprise healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b]"
      >
        <h2 className="text-4xl font-bold text-violet-400 mb-12 text-center">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 text-center">
            <Mail className="mx-auto text-violet-400 mb-4" size={36} />
            <h3 className="font-semibold text-xl mb-2">Email</h3>
            <p className="text-slate-300 break-all">
              suyogkumawat21@gmail.com
            </p>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 text-center">
            <Linkedin className="mx-auto text-violet-400 mb-4" size={36} />
            <h3 className="font-semibold text-xl mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/suyogkumawat/"
              target="_blank"
              className="text-slate-300"
            >
              linkedin.com/in/suyogkumawat
            </a>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 text-center">
            <Github className="mx-auto text-violet-400 mb-4" size={36} />
            <h3 className="font-semibold text-xl mb-2">GitHub</h3>
            <a
              href="https://github.com/suyogkumawat"
              target="_blank"
              className="text-slate-300"
            >
              github.com/suyogkumawat
            </a>
          </div>

          <div className="bg-slate-900/70 border border-slate-700 rounded-3xl p-8 text-center">
            <MapPin className="mx-auto text-violet-400 mb-4" size={36} />
            <h3 className="font-semibold text-xl mb-2">Location</h3>
            <p className="text-slate-300">Pune, India</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-slate-800 text-slate-500">
        © 2026 Suyog Kumawat — Cloud DevOps Engineer
      </footer>
    </div>
  );
}