import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import GuidedJournaling from "../components/GuidedJournaling";
import BreathingExercises from "../components/BreathingExercises";
import MeditationCourses from "../components/MeditationCourses";
import DailyAffirmations from "../components/DailyAffirmations";
import MovementExercises from "../components/MovementExercises";
import Inspiration from "../components/Inspiration";
import Layout from "../components/Layout";
import Link from "next/link";

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState("gratitude");

  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case "journaling":
        return <GuidedJournaling />;
      case "breathing":
        return <BreathingExercises />;
      case "meditation":
        return <MeditationCourses />;
      case "affirmations":
        return <DailyAffirmations />;
      case "movement":
        return <MovementExercises />;
      default:
        return <Inspiration />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white py-6 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Wellness Gratitude App
            </h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Navbar setSelectedFeature={setSelectedFeature} /> {/* Use Navbar here */}
          {renderSelectedFeature()}
        </main>
      </div>
    </Layout>
  );
};

export default App;
