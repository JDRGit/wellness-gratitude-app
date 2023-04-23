import Link from 'next/link';

const BreathingExercises = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h2 className="font-serif text-2xl mb-4">Breathing Exercises</h2>
      <p className="text-gray-700">
        Breathing exercises are an essential part of mindfulness and relaxation. Practicing these exercises regularly can help reduce stress, improve focus, and promote overall well-being.
      </p>
      {/* Add more content related to breathing exercises */}
      <Link href="/breathing-exercises"></Link>
    </div>
  );
};

export default BreathingExercises;