import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Award,
  Briefcase,
  Server,
  Cloud,
  ShieldCheck,
  Rocket,
  Boxes,
} from "lucide-react";

import { motion } from "framer-motion";

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
    "Terraform Associate",
    "CKA Training",
  ];

  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(139,92,246,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.15),transparent_25%)]" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-slate-800 px-6 md:px-16 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-violet-400">
          Suyog Kumawat
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#about" className="hover:text-violet-400 transition">About</a>
          <a href="#skills" className="hover:text-violet-400 transition">Skills</a>
          <a href="#projects" className="hover:text-violet-400 transition">Projects</a>
          <a href="#experience" className="hover:text-violet-400 transition">Experience</a>
          <a href="#contact" className="hover:text-violet-400 transition">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition px-5 py-3 rounded-xl font-medium"
        >
          <Download size={18} />
          Resume
        </a>
      </nav>

      {/* HERO */}
      <section className="px-6 md:px-20 py-24 min-h-screen flex items-center">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-violet-400 text-2xl mb-4">Hi, I'm</p>

            <h1 className="text-6xl md:text-8xl font-black leading-none">
              Suyog
              <br />
              Kumawat
            </h1>

            <h2 className="mt-6 text-3xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 text-transparent bg-clip-text">
              Cloud DevOps Engineer
            </h2>

            <p className="mt-8 text-slate-300 text-lg leading-9 max-w-2xl">
              AWS-certified DevOps Engineer with 3.5+ years of experience in Kubernetes,
              Terraform, GitHub Actions, ArgoCD, CI/CD automation, observability,
              enterprise infrastructure and cloud-native platforms.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className="bg-gradient-to-r from-violet-600 to-purple-500 hover:scale-105 transition px-8 py-4 rounded-2xl font-semibold shadow-xl shadow-violet-500/20"
              >
                View Projects
              </a>

              <a
                href="mailto:suyogkumawat21@gmail.com"
                className="border border-violet-500 hover:bg-violet-500/10 transition px-8 py-4 rounded-2xl"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 mt-10">
              <a href="https://github.com/suyogkumawat" target="_blank">
                <Github className="hover:text-violet-400 hover:scale-110 transition" />
              </a>

              <a href="https://www.linkedin.com/in/suyogkumawat/" target="_blank">
                <Linkedin className="hover:text-violet-400 hover:scale-110 transition" />
              </a>

              <a href="mailto:suyogkumawat21@gmail.com">
                <Mail className="hover:text-violet-400 hover:scale-110 transition" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute w-[500px] h-[500px] bg-violet-500/20 blur-[120px] rounded-full" />

            <div className="relative bg-[#0f172a]/80 border border-violet-500/20 rounded-[40px] p-16 shadow-2xl shadow-violet-500/20">
              <Cloud size={220} className="text-violet-400" />

              <div className="absolute -top-5 -left-5 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4">
                AWS
              </div>

              <div className="absolute top-10 -right-8 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4">
                Kubernetes
              </div>

              <div className="absolute bottom-0 -left-8 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4">
                Terraform
              </div>

              <div className="absolute -bottom-6 right-0 bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4">
                ArgoCD
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-20 py-10 grid md:grid-cols-5 gap-6">
        {[
          ["3.5+", "Years Experience"],
          ["200+", "K8s Deployments"],
          ["15+", "EKS Clusters"],
          ["15+", "Enterprise Repositories"],
          ["10+", "Engineers Mentored"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="bg-[#0f172a]/70 border border-slate-800 rounded-3xl p-8 text-center backdrop-blur-md"
          >
            <h3 className="text-5xl font-black text-violet-400">{value}</h3>
            <p className="mt-3 text-slate-400">{label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-20 py-24">
        <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[40px] p-12 backdrop-blur-md">
          <h2 className="text-5xl font-bold text-violet-400 mb-10">About Me</h2>

          <p className="text-slate-300 text-lg leading-10">
            I specialize in designing scalable and secure cloud-native platforms
            using AWS, Kubernetes, Terraform, GitOps and CI/CD automation.
            I have hands-on experience managing enterprise EKS environments,
            implementing observability stacks, automating deployments,
            improving infrastructure reliability and mentoring engineering teams.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-20 py-24">
        <h2 className="text-5xl font-bold text-violet-400 mb-14">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="bg-[#0f172a]/70 border border-slate-800 rounded-3xl p-6 text-center backdrop-blur-md hover:border-violet-500 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 md:px-20 py-24">
        <h2 className="text-5xl font-bold text-violet-400 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 backdrop-blur-md"
          >
            <Server className="text-violet-400 mb-6" size={50} />

            <h3 className="text-3xl font-bold mb-5">
              EKS Automation Platform
            </h3>

            <p className="text-slate-300 leading-9">
              Automated Kubernetes infrastructure provisioning using Terraform,
              Helm, GitHub Actions and Kustomize.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 backdrop-blur-md"
          >
            <ShieldCheck className="text-violet-400 mb-6" size={50} />

            <h3 className="text-3xl font-bold mb-5">
              Secure Code Migration
            </h3>

            <p className="text-slate-300 leading-9">
              Architected secure cross-network repository migrations using GitHub Actions,
              SonarQube and enterprise DevSecOps practices.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 backdrop-blur-md"
          >
            <Rocket className="text-violet-400 mb-6" size={50} />

            <h3 className="text-3xl font-bold mb-5">
              Airflow on EKS
            </h3>

            <p className="text-slate-300 leading-9">
              Migrated Apache Airflow workloads from Docker to AWS EKS,
              improving resilience, scalability and deployment automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-6 md:px-20 py-24">
        <h2 className="text-5xl font-bold text-violet-400 mb-14">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-[#0f172a]/70 border border-slate-800 rounded-3xl p-6 flex items-center gap-5 backdrop-blur-md"
            >
              <Award className="text-violet-400" />
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 md:px-20 py-24">
        <h2 className="text-5xl font-bold text-violet-400 mb-14">
          Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-5">
              <Briefcase className="text-violet-400" />

              <h3 className="text-3xl font-bold">
                Associate Consultant DevOps — ZS Associates
              </h3>
            </div>

            <p className="text-slate-300 leading-9">
              Leading enterprise cloud modernization, Terraform automation,
              secure repository migrations, Kubernetes operations and DevOps
              platform engineering.
            </p>
          </div>

          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 backdrop-blur-md">
            <div className="flex items-center gap-4 mb-5">
              <Boxes className="text-violet-400" />

              <h3 className="text-3xl font-bold">
                Cloud DevOps Engineer — Cognizant
              </h3>
            </div>

            <p className="text-slate-300 leading-9">
              Managed enterprise EKS platforms, GitOps workflows,
              observability stacks and CI/CD automation for healthcare systems.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-20 py-24">
        <h2 className="text-5xl font-bold text-violet-400 mb-14 text-center">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 text-center backdrop-blur-md">
            <Mail className="mx-auto text-violet-400 mb-5" size={40} />
            <h3 className="font-bold text-2xl mb-3">Email</h3>
            <p className="text-slate-300 break-all">
              suyogkumawat21@gmail.com
            </p>
          </div>

          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 text-center backdrop-blur-md">
            <Linkedin className="mx-auto text-violet-400 mb-5" size={40} />
            <h3 className="font-bold text-2xl mb-3">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/suyogkumawat/"
              target="_blank"
              className="text-slate-300"
            >
              linkedin.com/in/suyogkumawat
            </a>
          </div>

          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 text-center backdrop-blur-md">
            <Github className="mx-auto text-violet-400 mb-5" size={40} />
            <h3 className="font-bold text-2xl mb-3">GitHub</h3>
            <a
              href="https://github.com/suyogkumawat"
              target="_blank"
              className="text-slate-300"
            >
              github.com/suyogkumawat
            </a>
          </div>

          <div className="bg-[#0f172a]/70 border border-slate-800 rounded-[35px] p-10 text-center backdrop-blur-md">
            <MapPin className="mx-auto text-violet-400 mb-5" size={40} />
            <h3 className="font-bold text-2xl mb-3">Location</h3>
            <p className="text-slate-300">Pune, India</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        © 2026 Suyog Kumawat — Cloud DevOps Engineer
      </footer>
    </div>
  );
}