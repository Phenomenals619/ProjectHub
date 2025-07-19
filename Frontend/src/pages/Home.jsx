import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// 🧠 Featured project cards with real illustrations
const featuredProjects = [
  {
    title: "AI Attendance System",
    desc: "Face recognition app using Python & OpenCV.",
    img: "https://undraw.edu_dashboard_re_view.svg",
  },
  {
    title: "Online Shopping App",
    desc: "Full-stack e-commerce platform with cart, auth, and payments.",
    img: "https://undraw_Add_to_cart_re_wrdo.svg",
  },
  {
    title: "IoT Weather Logger",
    desc: "Real-time temperature logger using NodeMCU + Firebase.",
    img: "https://undraw_weather_app_re_kcb1.svg",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur border-b fixed w-full z-50 shadow-sm px-6 sm:px-10 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold text-indigo-600">
          ProjectHub
        </Link>
        <div className="space-x-3 sm:space-x-5">
          <Link to="/login" className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Login
          </Link>
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 pt-32 md:pt-40 px-6 sm:px-10 max-w-7xl mx-auto">
        <motion.img
          src="https://undraw.co/static/images/illustrations/educator_re_ju47.svg"
          alt="ProjectHub Hero"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md select-none drop-shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
            Buy & Sell <span className="text-indigo-600">Academic Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Final year projects, source code templates, and more – all in one place. Trusted by students and developers.
          </p>
          <Link
            to="/projects"
            className="inline-block bg-indigo-600 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Explore Projects
          </Link>
        </motion.div>
      </div>

      {/* Featured Projects */}
      <section className="mt-20 sm:mt-28 px-6 sm:px-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-28 h-28 object-contain mb-4"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 text-center mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 text-center">{project.desc}</p>
              <Link
                to="/projects"
                className="mt-4 text-indigo-500 font-medium hover:underline text-sm"
              >
                View Details →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 p-6 bg-white border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ProjectHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
