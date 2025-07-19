// src/pages/Home.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Import local images from src/images/
import hmsImg from "../images/hms.svg";
import carParkingImg from "../images/car-parking.svg";
import libraryImg from "../images/library.svg";
import heroImg from "../images/hero.svg";

// Define your 3 projects here
const featuredProjects = [
  {
    title: "Hospital Management System",
    desc: "A complete Java Spring Boot, Thymeleaf & MySQL solution for hospitals. Features appointment, patient record & admin dashboards.",
    img: hmsImg,
    github: "https://hms-3es8.onrender.com/",
  },
  {
    title: "Car Parking Management System",
    desc: "JSP/Servlets + Bootstrap + MySQL parking solution. Manage slots, check-ins, and generate reports with a classic web stack.",
    img: carParkingImg,
    github: "https://car-parking-management-system.onrender.com/",
  },
  {
    title: "Library Management System",
    desc: "Modern library management using MongoDB, Express, React, and Node.js. Borrow, return, and track books efficiently.",
    img: libraryImg,
    github: "https://lms-client-uo7q.onrender.com/",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur border-b fixed w-full z-50 shadow-sm px-6 sm:px-10 py-4 flex justify-between items-center">
        <span className="text-xl sm:text-2xl font-bold text-indigo-600">
          ProjectHub
        </span>
        <div className="space-x-3 sm:space-x-5">
          <Link
            to="/login"
            className="text-gray-700 hover:text-indigo-600 font-medium transition"
          >
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
          src={heroImg}
          alt="ProjectHub hero"
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
            Buy & Sell{" "}
            <span className="text-indigo-600">Academic Projects</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            Innovative projects for CS & engineering — source code, demos, and
            more. Click a project below for{" "}
            <span className="font-medium text-indigo-600">
              instant GitHub access
            </span>
            .
          </p>
          <a
            href="https://github.com/Phenomenals619"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Visit My GitHub
          </a>
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
            <motion.a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition group cursor-pointer"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              title={`Go to GitHub - ${project.title}`}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-28 h-28 object-contain mb-4 group-hover:scale-105 transition"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 text-center mb-2 group-hover:underline">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 text-center">
                {project.desc}
              </p>
              <span className="mt-4 text-indigo-500 font-medium group-hover:underline text-sm">
                View on GitHub →
              </span>
            </motion.a>
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
