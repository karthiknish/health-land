"use client";
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import {
  FaChartLine,
  FaCogs,
  FaBullhorn,
  FaUsers,
  FaChessKnight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home() {
  const videoPlayerRef = useRef(null);
  const [videoState, setVideoState] = useState({
    playing: false,
    played: 0,
    seeking: false,
    buffer: true,
  });

  const { playing } = videoState;

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !videoState.playing });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <DotPattern className="h-full opacity-20" />

      <motion.header
        className="container mx-auto px-4 py-8"
        variants={sectionVariants}
      >
        <motion.h3
          className="text-2xl md:text-5xl font-bold text-center mb-10 leading-snug bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text p-2"
          variants={fadeIn}
        >
          Elevate Your Business: Comprehensive Health Check for Sustainable
          Growth
        </motion.h3>
      </motion.header>

      <motion.div
        className="container mx-auto px-4 mb-16"
        variants={sectionVariants}
      >
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <ReactPlayer
            ref={videoPlayerRef}
            url="https://profici.co.uk/wp-content/uploads/2024/09/Brafiti-Business-Secrets-1.mp4"
            width="100%"
            height="auto"
            playing={playing}
            loop
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-4 cursor-pointer"
            onClick={playPauseHandler}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {playing ? (
                <motion.div
                  key="pause"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Pause size={28} color="white" />
                </motion.div>
              ) : (
                <motion.div
                  key="play"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Play size={28} color="white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4 text-center"
        variants={sectionVariants}
      >
        <motion.p className="text-2xl font-bold mb-8" variants={fadeIn}>
          Discover how our expert consultancy can revolutionize your business
          strategy and boost your performance.
        </motion.p>
      </motion.div>
      <motion.main className="max-w-6xl mx-auto" variants={sectionVariants}>
        <motion.p
          className="text-lg text-center mb-8 bg-white rounded-lg p-6"
          variants={fadeIn}
        >
          We propose an initial business consultancy health check, comprising a
          comprehensive assessment of various aspects of your business to
          evaluate its overall performance and identify areas for improvement.
          This will include the following components:
        </motion.p>

        <motion.div className="space-y-12" variants={sectionVariants}>
          <motion.section
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                className="text-2xl font-semibold text-gray-800 flex items-center"
                variants={fadeIn}
              >
                <FaChartLine className="mr-2 text-blue-500" />
                FINANCIAL ANALYSIS
              </motion.h2>
              <dotlottie-player
                src="https://lottie.host/15dd9169-04f7-4a67-b75c-60204e5061ec/WFXWpBZj9I.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={sectionVariants}
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Financial Statements Review:
                </h3>
                <p className="text-gray-600">
                  Examination of income statements, balance sheets, and cash
                  flow statements to assess profitability, liquidity, and
                  solvency.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Financial Ratios:
                </h3>
                <p className="text-gray-600">
                  Analysis of key ratios like profitability ratios (e.g., gross
                  margin, net profit margin), liquidity ratios (e.g., current
                  ratio, quick ratio), and solvency ratios (e.g., debt-to-equity
                  ratio).
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                className="text-2xl font-semibold text-gray-800 flex items-center"
                variants={fadeIn}
              >
                <FaCogs className="mr-2 text-green-500" />
                OPERATIONAL EFFICIENCY
              </motion.h2>
              <dotlottie-player
                src="https://lottie.host/928a27e1-d03b-4383-8a2d-f0d55225165b/pneUkmhXjC.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={sectionVariants}
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Process Evaluation:
                </h3>
                <p className="text-gray-600">
                  Review of business processes to identify inefficiencies and
                  areas for optimisation.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Resource Utilisation:
                </h3>
                <p className="text-gray-600">
                  Assessment of how effectively resources are being utilised.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Supply Chain and Logistics:
                </h3>
                <p className="text-gray-600">
                  Examination of supply chain processes and inventory
                  management.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                className="text-2xl font-semibold text-gray-800 flex items-center"
                variants={fadeIn}
              >
                <FaBullhorn className="mr-2 text-red-500" />
                SALES AND MARKETING ANALYSIS
              </motion.h2>
              <dotlottie-player
                src="https://lottie.host/c7ab7e4b-c9bf-4f31-afa4-b939430f845d/Oxz6T4Rp0u.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={sectionVariants}
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Market Positioning:
                </h3>
                <p className="text-gray-600">
                  Evaluation of market position and brand perception.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Sales Performance:
                </h3>
                <p className="text-gray-600">
                  Analysis of sales data, customer acquisition, and retention
                  strategies.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Marketing Strategies:
                </h3>
                <p className="text-gray-600">
                  Review of marketing channels, campaigns, and ROl on marketing
                  spend.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Digital Transformation:
                </h3>
                <p className="text-gray-600">
                  Evaluation of digital initiatives and their impact on business
                  operations.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                className="text-2xl font-semibold text-gray-800 flex items-center"
                variants={fadeIn}
              >
                <FaUsers className="mr-2 text-purple-500" />
                HUMAN RESOURCES ASSESSMENT
              </motion.h2>
              <dotlottie-player
                src="https://lottie.host/2b352910-24b4-45e0-8c8a-ad13d493d8f8/IgJHWQCCMD.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={sectionVariants}
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Staffing Levels:
                </h3>
                <p className="text-gray-600">
                  Evaluation of workforce size and structure relative to
                  business needs.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Employee Satisfaction:
                </h3>
                <p className="text-gray-600">
                  Assessment of employee morale, engagement, and retention
                  rates.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Skills and Training:
                </h3>
                <p className="text-gray-600">
                  Analysis of skills gaps and training programs.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-between mb-6">
              <motion.h2
                className="text-2xl font-semibold text-gray-800 flex items-center"
                variants={fadeIn}
              >
                <FaChessKnight className="mr-2 text-yellow-500" />
                STRATEGIC ALIGNMENT AND PLANNING
              </motion.h2>
              <dotlottie-player
                src="https://lottie.host/6ea356e7-727b-4a79-bf3d-589c490d11bf/FQoBp24tiL.json"
                background="transparent"
                speed="1"
                style={{ width: "200px", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={sectionVariants}
            >
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Business Strategy Review:
                </h3>
                <p className="text-gray-600">
                  Examination of business goals, strategies, and alignment with
                  market trends and opportunities.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-4 rounded-md"
                variants={fadeIn}
              >
                <h3 className="text-xl font-medium mb-2 text-gray-700">
                  Risk Management:
                </h3>
                <p className="text-gray-600">
                  Identification of potential risks and the effectiveness of
                  current risk management practices.
                </p>
              </motion.div>
            </motion.div>
          </motion.section>
        </motion.div>
        <motion.div
          className="container mx-auto px-4 py-8 text-center"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-xl font-semibold mb-6 text-gray-800"
            variants={fadeIn}
          >
            Ready to transform your business? Let&apos;s start the conversation
            and unlock your company&apos;s full potential!
          </motion.p>
          <motion.a
            href="https://profici.co.uk/contact/"
            className="inline-block bg-black hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </motion.main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-gray-600">
          &copy; 2024 Profici. All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
}
