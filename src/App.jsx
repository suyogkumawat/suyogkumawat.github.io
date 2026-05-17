import { Github, Linkedin, Mail, Download, Server, Cloud, ShieldCheck } from "lucide-react";

export default function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-violet-400">Suyog Kumawat</h1>
        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 px-8 md:px-20 py-20 bg-gradient-to-r from-blue-950 to-violet-950">
        <div>
          <p className="text-xl text-slate-300">Hi, I'm</p>
          <h1 className="text-6xl font-bold mt-2">Suyog Kumawat</h1>
          <h2 className="text-3xl text-violet-400 mt-4">Cloud DevOps Engineer</h2>

          <p className="mt-6 text-slate-300 leading-8">
            AWS Certified DevOps Engineer with expertise in Kubernetes,
            Terraform, GitHub Actions, ArgoCD, CI/CD, monitoring,
            automation and cloud-native infrastructure.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold"
            >
              View Projects
            </a>

            <a
              href="mailto:suyogkumawat21@gmail.com"
              className="border border-violet-500 px-6 py-3 rounded-xl"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-5 mt-8">
            <a href="https://github.com/suyogkumawat" target="_blank">
              <Github />
            </a>

            <a href="https://www.linkedin.com/in/suyogkumawat/" target="_blank">
              <Linkedin />
            </a>

            <a href="mailto:suyogkumawat21@gmail.com">
              <Mail />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-slate-900 p-10 rounded-3xl border border-slate-700 shadow-2xl">
            <Cloud size={180} className="text-violet-400" />
          </div>
        </div>
      </section>

      <section id="about" className="px-8 md:px-20 py-16">
        <h2 className="text-4xl font-bold mb-8 text-violet-400">About Me</h2>

        <p className="text-slate-300 text-lg leading-9">
          I am a Cloud DevOps Engineer with 3+ years of experience working on AWS,
          Azure, Kubernetes, Terraform, Jenkins, GitHub Actions, ArgoCD,
          Airflow, Docker and observability stacks. I specialize in building
          scalable cloud infrastructure, GitOps pipelines and automation solutions.
        </p>
      </section>

      <section id="skills" className="px-8 md:px-20 py-16 bg-slate-900">
        <h2 className="text-4xl font-bold mb-10 text-violet-400">Skills</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "AWS",
            "Azure",
            "Kubernetes",
            "Docker",
            "Terraform",
            "GitHub Actions",
            "ArgoCD",
            "Prometheus",
            "Grafana",
            "Linux",
            "Python",
            "Airflow"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center hover:border-violet-500 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-8 md:px-20 py-16">
        <h2 className="text-4xl font-bold mb-10 text-violet-400">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <Server className="text-violet-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold">EKS Automation</h3>
            <p className="mt-4 text-slate-300">
              Automated Kubernetes infrastructure provisioning using Terraform,
              Helm and GitHub Actions.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <ShieldCheck className="text-violet-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold">Secure Code Migration</h3>
            <p className="mt-4 text-slate-300">
              Architected secure cross-network migrations for enterprise repositories
              using GitHub Actions and SonarQube.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700">
            <Cloud className="text-violet-400 mb-4" size={40} />
            <h3 className="text-2xl font-semibold">Airflow on EKS</h3>
            <p className="mt-4 text-slate-300">
              Migrated Apache Airflow workloads from Docker to EKS with enhanced
              scalability and observability.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-8 md:px-20 py-16 bg-slate-900">
        <h2 className="text-4xl font-bold mb-8 text-violet-400">Let's Connect</h2>

        <div className="space-y-4 text-lg">
          <p>Email: suyogkumawat21@gmail.com</p>

          <a
            className="block text-violet-400"
            href="https://github.com/suyogkumawat"
            target="_blank"
          >
            GitHub: github.com/suyogkumawat
          </a>

          <a
            className="block text-violet-400"
            href="https://www.linkedin.com/in/suyogkumawat/"
            target="_blank"
          >
            LinkedIn: linkedin.com/in/suyogkumawat
          </a>
        </div>
      </section>

      <footer className="text-center py-6 border-t border-slate-800 text-slate-400">
        © 2026 Suyog Kumawat. All rights reserved.
      </footer>
    </div>
  );
}