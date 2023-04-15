import React, { useState } from 'react';
import Head from 'next/head';
import GuidedJournaling from '../components/GuidedJournaling';
import BreathingExercises from '../components/BreathingExercises';
import MeditationCourses from '../components/MeditationCourses';
import DailyAffirmations from '../components/DailyAffirmations';
import MovementExercises from '../components/MovementExercises';
import Inspiration from '../components/Inspiration';
import Layout from '../components/Layout';
const App = () => {
  const [selectedFeature, setSelectedFeature] = useState('gratitude');

  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case 'journaling':
        return <GuidedJournaling />;
      case 'breathing':
        return <BreathingExercises />;
      case 'meditation':
        return <MeditationCourses />;
      case 'affirmations':
        return <DailyAffirmations />;
      case 'movement':
        return <MovementExercises />;
      default:
        return <Inspiration />;
    }
  };

  return (
    <Layout>
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Wellness Gratitude App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="bg-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800">Wellness Gratitude App</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedFeature('journaling')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Journaling
          </button>
          <button
            onClick={() => setSelectedFeature('breathing')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Breathing
          </button>
          <button
            onClick={() => setSelectedFeature('meditation')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Meditation
          </button>
          <button
            onClick={() => setSelectedFeature('affirmations')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Affirmations
          </button>
          <button
            onClick={() => setSelectedFeature('movement')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Movement
          </button>
        </nav>
        {renderSelectedFeature()}
      </main>
    </div>
    </Layout>
  );
};

export default App;
