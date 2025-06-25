
import { useState } from "react";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl p-4 mb-4 w-80 border animate-scale-in">
          <div className="text-sm text-gray-600 mb-2">💬 Chat with us!</div>
          <div className="text-gray-800">Hi! How can we help you with your homework today?</div>
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse hover:animate-none"
      >
        💬
      </button>
    </div>
  );
};

export default ChatBubble;
