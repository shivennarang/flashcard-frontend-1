import React, { useState } from "react";

function AddCard({ onClose, onAdd }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    if (question && answer) {
      fetch('http://localhost:5000/flashcards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question, answer }),
      })
      .then(response => response.json())
      .then(data => {
        onAdd(data);
        onClose();
      })
      .catch(error => console.error('Error adding flashcard:', error));
    }
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform translate-x-0 text-black placeholder:text-black">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Add New Flashcard</h2>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full h-24 p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter the question"
        />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full h-24 p-2 border border-gray-300 rounded mb-4"
          placeholder="Enter the answer"
        />
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-4 py-2 rounded text-black"
          >
            Add Card
          </button>
          <button
            onClick={onClose}
            className="border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-4 py-2 rounded text-black"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
