import AddCard from "./components/AddCard";
import FlashCards from "./components/Cards"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import { useState } from "react";

function App() {
  const [showAddCard, setShowAddCard] = useState(false);
  const [flashcards, setFlashcards] = useState([]);

  const handleOpenAddCard = () => setShowAddCard(true);
  const handleCloseAddCard = () => setShowAddCard(false);

  const handleAddCard = (newCard) => {
    setFlashcards(prevFlashcards => [...prevFlashcards, newCard]);
    setShowAddCard(false); // Close the add card dialog
  };

  return (
    <div className="flex flex-col gap-5">
      <Navbar onAdd={handleOpenAddCard}/>
      <HeroSection/>
      <FlashCards flashcards={flashcards} onAdd={handleAddCard}/>
      {showAddCard && (
        <AddCard onClose={handleCloseAddCard} onAdd={handleAddCard} />
      )}
    </div>
  )
}

export default App
