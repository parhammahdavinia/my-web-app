import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();

  // داده‌های فارسی
  const fa = {
    name: "پرهام مهدوی نیا",
    title: "توسعه‌دهنده",
    skillsTitle: "مهارت‌ها",
    skills: [
      "زبان‌های فرانت‌اند: HTML5، CSS3، JavaScript",
      "فریم‌ورک‌ها و کتابخانه‌ها: React.js (هوکس، Context API)، React Router، Redux Toolkit",
      "استایل و طراحی: TailwindCSS، Framer Motion، AOS",
      "بک‌اند: Django (تجربه پایه در توسعه API)",
      "سیستم‌عامل: لینوکس (اوبونتو، سنت‌اواس)",
      "وب‌سرور: Nginx (پیکربندی، لود بالانسینگ، SSL)",
      "کانتینر: Docker، Docker Compose",
      "مانیتورینگ: Prometheus، Grafana (مانیتورینگ سرور، تنظیم هشدار)",
      "امنیت: Fail2Ban (محافظت Brute-force)، UFW (فایروال)، Nmap (اسکن شبکه)",
      "ابزارها: Git، GitHub، Axios، Fetch",
      "مفاهیم: طراحی ریسپانسیو، توسعه موبایل‌فرست، DevOps، اسکریپت‌نویسی Bash",
    ],
    educationTitle: "تحصیلات",
    education: [
      "دانشجوی سال آخر مهندسی کامپیوتر دانشگاه آزاد اسلامی واحد علوم و تحقیقات",
    ],
    profileTitle: "پروفایل",
    profile: `توسعه‌دهنده باانگیزه و علاقه‌مند به یادگیری، با تمرکز بر DevOps و توسعه وب. تجربه ساخت رابط کاربری با React.js، استایل‌دهی با TailwindCSS و توسعه API با Django. مسلط به مدیریت سرور با Nginx، Docker، Prometheus، Grafana، UFW و Nmap. علاقه‌مند به یادگیری مداوم در زمینه اتوماسیون، CI/CD و تکنولوژی‌های ابری.`,
    certTitle: "مدارک و دوره‌ها",
    certs: [
      "HTML, CSS, JavaScript از موسسه فنی تهران",
      "ISO/EC 20000 IT Service Management Associate",
      "ISO/IEC 27001:2022 Information Security Associate",
    ],
    projectsTitle: "پروژه‌ها",
    projects: [
      "ساخت اپلیکیشن مدیریت وظایف با React.js و Redux Toolkit و React Router.",
      "استایل‌دهی با TailwindCSS و انیمیشن با Framer Motion و AOS.",
      "توسعه API با Django و پیاده‌سازی عملیات CRUD و اتصال به فرانت‌اند با Axios.",
      "دیپلوی پروژه در Docker و Nginx با SSL.",
      "امنیت سرور با Fail2Ban و UFW و مانیتورینگ با Prometheus و Grafana.",
      "مدیریت سورس با Git و GitHub.",
    ],
  };

  // داده‌های انگلیسی
  const en = {
    name: "PARHAMMAHDAVI",
    title: "Developer",
    skillsTitle: "SKILLS",
    skills: [
      "Frontend Languages: HTML5, CSS3, JavaScript",
      "Frontend Frameworks & Libraries: React.js (Hooks, Context API), React Router, Redux Toolkit",
      "Styling & Design: TailwindCSS, Framer Motion, AOS",
      "Backend: Django (Basic experience in API development)",
      "Operating Systems: Linux (Ubuntu, CentOS)",
      "Web Servers: Nginx (Configuration, Load Balancing, SSL)",
      "Containerization: Docker, Docker Compose",
      "Monitoring: Prometheus, Grafana (Server performance monitoring, alert configuration)",
      "Security: Fail2Ban (Brute-force protection), UFW (Firewall configuration), Nmap (Network scanning)",
      "Tools: Git, GitHub (Version control, repository management), Axios, Fetch",
      "Concepts: Responsive Design, Mobile-First Development, DevOps practices, Bash scripting",
    ],
    educationTitle: "EDUCATION",
    education: [
      "Computer Engineering islamic Azad University Science and Reasearch Branch",
      "My last year in university",
    ],
    profileTitle: "PROFILE",
    profile:
      "Passionate and self-motivated developer with a strong interest in DevOps and web development. Experienced in building user interfaces with React.js, styling with TailwindCSS, and developing APIs with Django. Skilled in server management using Nginx, Docker, Prometheus, Grafana, Fail2Ban, UFW, and Nmap. Committed to continuous learning in DevOps practices, server security, and infrastructure optimization. Currently expanding knowledge in automation, CI/CD, and cloud technologies, eager to contribute to innovative DevOps and web development projects.",
    certTitle: "CERTIFICATIONS & COURSES",
    certs: [
      "HTML, CSS, JavaScript from Tehran Technical Institute",
      "ISO/EC 20000 IT Service Management Associate™",
      "ISO/IEC 27001:2022 Information Security Associate™",
    ],
    projectsTitle: "PROJECTS",
    projects: [
      "Built a task management web application using React.js, leveraging Hooks and Redux Toolkit for efficient task creation and updates, and React Router for multi-page navigation.",
      "Styled with TailwindCSS to create a responsive, mobile-first user interface, enhanced with Framer Motion for task transition animations and AOS for scroll-based effects.",
      "Developed a RESTful API with Django to handle CRUD operations (create, read, update, delete) for tasks, integrated with the frontend via Axios.",
      "Deployed the application in a Docker container, orchestrated with Docker Compose, and hosted on a Linux server (e.g., Ubuntu) using Nginx with SSL for secure hosting.",
      "Secured the server with Fail2Ban to monitor SSH and Nginx logs and block brute-force attacks, UFW to allow HTTP/HTTPS ports (80/443) while restricting others, and Nmap to scan for open ports and vulnerabilities.",
      "Monitored server metrics (e.g., CPU, RAM, disk, and API request rates) using Prometheus and visualized task and API performance through Grafana dashboards with configured alerts.",
      "Managed code versioning with Git, maintaining a clean commit history, and hosted the project on GitHub (github.com/parhammahdavinia).",
    ],
  };

  const content = language === "fa" ? fa : en;

  return (
    <div className="min-h-screen bg-gradient-to-t from-blue-500 to-black text-gray-100 py-12 px-2">
      <div className="max-w-5xl mx-auto bg-white/5 rounded-2xl shadow-xl p-8 md:p-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-blue-200 mb-2">
            {content.name}
          </h1>
          <div className="text-lg md:text-2xl text-blue-300 tracking-widest mb-2">
            {content.title}
          </div>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-blue-100 rounded-full mb-6" />
        </div>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column */}
          <div className="md:w-1/2 flex flex-col gap-8 border-b md:border-b-0 md:border-r border-blue-200/30 pb-8 md:pb-0 md:pr-8">
            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold tracking-widest text-blue-300 mb-2">
                {content.skillsTitle}
              </h2>
              <ul className="list-disc list-inside text-base space-y-1">
                {content.skills.map((item, i) => (
                  <li key={i} className="mb-1">
                    <span className="font-semibold text-blue-100">
                      {item.split(":")[0]}:
                    </span>
                    {item.split(":")[1] ? (
                      <span> {item.split(":")[1]}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
            {/* Education */}
            <div>
              <h2 className="text-xl font-bold tracking-widest text-blue-300 mb-2">
                {content.educationTitle}
              </h2>
              <ul className="list-disc list-inside text-base space-y-1">
                {content.education.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Column */}
          <div className="md:w-1/2 flex flex-col gap-8 md:pl-8">
            {/* Profile */}
            <div>
              <h2 className="text-xl font-bold tracking-widest text-blue-300 mb-2">
                {content.profileTitle}
              </h2>
              <p className="text-base leading-relaxed text-gray-200">
                {content.profile}
              </p>
            </div>
            {/* Certifications */}
            <div>
              <h2 className="text-xl font-bold tracking-widest text-blue-300 mb-2">
                {content.certTitle}
              </h2>
              <ul className="list-disc list-inside text-base space-y-1">
                {content.certs.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Projects */}
            <div>
              <h2 className="text-xl font-bold tracking-widest text-blue-300 mb-2">
                {content.projectsTitle}
              </h2>
              <ul className="list-disc list-inside text-base space-y-1">
                {content.projects.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
