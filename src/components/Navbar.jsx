import React from 'react';
import AddCard from './AddCard';

function Navbar({ onAdd }) {
  return (
    <div className="flex justify-around items-center font-eduVIC p-4">
      <div className="text-2xl font-bold border border-gray-200 px-4 py-2 rounded">Take U Forward</div>
      <button
        onClick={onAdd}
        className="border border-gray-200 hover:bg-slate-700 transition-colors duration-300 px-4 py-2 rounded"
      >
        ADD CARD
      </button>
    </div>
  );
}

export default Navbar;
