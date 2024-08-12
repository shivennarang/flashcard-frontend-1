import React, { useState } from "react";

function Card({ id, question, answer, onDelete, onUpdate }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newQuestion, setNewQuestion] = useState(question);
  const [newAnswer, setNewAnswer] = useState(answer);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleUpdate = () => {
    fetch(`http://localhost:5000/flashcards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: newQuestion, answer: newAnswer }),
    })
    .then(response => response.json())
    .then(() => {
      onUpdate(id, newQuestion, newAnswer);
      setEditMode(false);
    })
    .catch(error => console.error('Error updating flashcard:', error));
  };

  return (
    <div className="w-96 h-80 perspective-1000 font-eduVIC rounded-xl">
      <div
        className={`relative w-full h-full transition-transform duration-700 rounded-xl ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-around p-4 border border-gray-300 bg-slate-300 rounded-xl ${
            isFlipped ? "hidden" : ""
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-between w-full">
            <div className="text-xl font-semibold text-black">TUF</div>
            <button onClick={() => onDelete(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 my-4 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="text-center text-black">{question}</div>
          <div className="flex justify-around w-full">
          <button
            onClick={handleFlip}
            className="text-sm border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded text-black"
          >
            SHOW ANSWER
          </button>
          <button
            onClick={() => setEditMode(true)}
            className=" text-sm border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded text-black"
          >
            UPDATE
          </button>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full flex flex-col items-center justify-around p-4 border border-gray-300 bg-white rounded-xl ${
            isFlipped ? "" : "hidden"
          }`}
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="text-black">{answer}</div>
          <button
            onClick={handleFlip}
            className="text-sm border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-2 py-1 rounded text-black"
          >
            HIDE ANSWER
          </button>
        </div>
      </div>

      {/* Edit Form */}
      {editMode && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-90 rounded-xl text-black placeholder:text-black">
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="w-4/5 h-24 p-2 border border-gray-300 rounded"
            placeholder="Edit question"
          />
          <textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            className="w-4/5 h-24 p-2 border border-gray-300 rounded mt-2"
            placeholder="Edit answer"
          />
          <button
            onClick={handleUpdate}
            className="border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-4 py-2 rounded mt-2 text-black"
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditMode(false)}
            className="border border-black hover:bg-slate-700 hover:text-white transition-colors duration-300 px-4 py-2 rounded mt-2 text-black"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
