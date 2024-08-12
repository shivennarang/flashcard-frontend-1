import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';

function FlashCards({ flashcards, onAdd }) {
  const [cards, setCards] = useState(flashcards);

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching flashcards:', error));
  }, [flashcards]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/flashcards/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setCards(cards.filter(card => card.id !== id));
    })
    .catch(error => console.error('Error deleting flashcard:', error));
  };

  const handleUpdate = (id, updatedQuestion, updatedAnswer) => {
    setCards(cards.map(card =>
      card.id === id
        ? { ...card, question: updatedQuestion, answer: updatedAnswer }
        : card
    ));
  };

  return (
    <div className="w-full h-96 border-b-2 border-gray-200 px-4 py-2 rounded">
      {cards.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>No flashcards available. Please add some.</p>
        </div>
      ) : (
        <Swiper
          spaceBetween={20}
          navigation
          modules={[Navigation]}
          breakpoints={{
            640: { // Mobile screen size
              slidesPerView: 1,
              slidesPerColumn: 2, // Show 2 cards in a column on mobile
              slidesPerColumnFill: 'row',
            },
            768: { // Tablet and up
              slidesPerView: 2,
              slidesPerColumn: 1, // Show 1 card per row
              slidesPerColumnFill: 'row',
            },
            1280: { // Desktop and up
              slidesPerView: 3,
              slidesPerColumn: 1,
              slidesPerColumnFill: 'row',
            }
          }}
          className="w-full h-full"
        >
          {cards.map(flashcard => (
            <SwiperSlide key={flashcard.id} className="flex flex-col items-center justify-center">
              <Card
                id={flashcard.id}
                question={flashcard.question}
                answer={flashcard.answer}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default FlashCards;
