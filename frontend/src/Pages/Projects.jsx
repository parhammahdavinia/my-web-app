import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import { HiExternalLink, HiCode, HiEye } from "react-icons/hi";

const Projects = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: language === "fa" ? "فروشگاه آنلاین" : "E-Commerce Store",
      description:
        language === "fa"
          ? "یک فروشگاه آنلاین کامل با سیستم مدیریت محتوا، پرداخت و مدیریت سفارشات"
          : "A complete e-commerce store with CMS, payment system, and order management",
      image: "/images/je.png",
      category: "web",
      technologies: ["React", "Django", "tailwindcss"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title:
        language === "fa" ? "اپلیکیشن مدیریت وظایف" : "Task Management App",
      description:
        language === "fa"
          ? "اپلیکیشن مدیریت وظایف با قابلیت همکاری تیمی و ردیابی پیشرفت"
          : "Task management app with team collaboration and progress tracking",
      image: "/images/4.png",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: language === "fa" ? "گالری" : "gallery ",
      description:
        language === "fa" ? "گالری برای آرت" : "gallery for showing art",
      image: "/images/lnd.png",
      category: "web",
      technologies: ["react", "Django", "tailwindcss"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: language === "fa" ? "پلتفرم کریپتو" : "crypto app",
      description:
        language === "fa"
          ? "نمایش  قیمت رمز ارز ها "
          : "crypto app  for vibe co",
      image: "/images/sar.png",
      category: "web",
      technologies: ["Next.js", "Node.js", "AWS", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 5,
      title: language === "fa" ? "منو رستوران" : "resturant menu",
      description: language === "fa" ? "منو رستوران با" : "resturant menu ",
      image: "/images/med.png",
      category: "mobile",
      technologies: ["react", "django", "tailwindcss"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: language === "fa" ? "سیستم رزرو هتل" : "Hotel Booking System",
      description:
        language === "fa"
          ? "سیستم رزرو هتل با جستجوی پیشرفته و سیستم پرداخت امن"
          : "Hotel booking system with advanced search and secure payment",
      image: "/images/ec.png",
      category: "web",
      technologies: ["React", "Express.js", "MongoDB", "PayPal"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: t("projects.categories.all") },
    { id: "web", name: t("projects.categories.web") },
    { id: "mobile", name: t("projects.categories.mobile") },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white vazir">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          >
            {t("projects.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiEye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiCode size={20} />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {t("projects.featured")}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiExternalLink size={16} />
                    {t("projects.viewLive")}
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HiCode size={16} />
                    {t("projects.viewCode")}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📁</div>
            <h3 className="text-2xl font-bold mb-2">
              {t("projects.noProjectsFound")}
            </h3>
            <p className="text-gray-400">
              {t("projects.noProjectsInCategory")}
            </p>
          </motion.div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t("projects.readyToStart")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            {t("projects.readyToStartSubtitle")}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            {t("projects.startProject")}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
