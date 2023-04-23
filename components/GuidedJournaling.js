import React, { useState } from "react";

const GuidedJournal = () => {
  const [gratefulItems, setGratefulItems] = useState(["", "", ""]);
  const [goals, setGoals] = useState(["", "", ""]);
  const [affirmation, setAffirmation] = useState("");

  const handleInputChange = (e, index, type) => {
    const value = e.target.value;

    if (type === "grateful") {
      const newGratefulItems = [...gratefulItems];
      newGratefulItems[index] = value;
      setGratefulItems(newGratefulItems);
    } else if (type === "goals") {
      const newGoals = [...goals];
      newGoals[index] = value;
      setGoals(newGoals);
    } else if (type === "affirmation") {
      setAffirmation(value);
    }
  };

  return (
    <div className="guided-journal">
      <h1>5 Minute Journal</h1>
      <h2>Gratitude</h2>
      {gratefulItems.map((item, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Grateful item ${index + 1}`}
          value={item}
          onChange={(e) => handleInputChange(e, index, "grateful")}
        />
      ))}
      <h2>Goals for the day</h2>
      {goals.map((goal, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Goal ${index + 1}`}
          value={goal}
          onChange={(e) => handleInputChange(e, index, "goals")}
        />
      ))}
      <h2>Daily Affirmation</h2>
      <input
        type="text"
        placeholder="Affirmation"
        value={affirmation}
        onChange={(e) => handleInputChange(e, null, "affirmation")}
      />
    </div>
  );
};

export default GuidedJournal;
