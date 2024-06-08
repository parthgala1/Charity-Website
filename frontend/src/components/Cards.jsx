import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cards({ title, description, imageUrl }) {
  const history = useNavigate();
  const [blur, setBlur] = React.useState(false);
  const [stretch, setStretch] = React.useState(false);

  const handleSubmit = (title) => () => {
    history(`./${title}`);
  };

  const handleMouseEnter = () => {
    setBlur(true);
    setStretch(true);
  };

  const handleMouseLeave = () => {
    setBlur(false);
    setStretch(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white hover:bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 md:hover:scale-125"
    >
      <img
        className={`w-full h-auto relative ${blur ? 'transition duration-500 ease-in-out transform blur opacity-75 ' : ''}`}
        src={imageUrl}
        alt={title}
      />
      <div className="w-full h-full px-6 py-4 flex flex-col justify-center items-center absolute z-10 top-0 opacity-0 hover:opacity-100">
        <div className="font-bold text-xl mb-2 text-white font-[Playfair]">{title}</div>
        <p className="text-gray-200 text-balance text-center font-[Crimson]">{description}</p>
        <button
          onMouseEnter={() => setStretch(true)}
          onMouseLeave={() => setStretch(false)}
          onClick={handleSubmit(title)}
          className={`bg-transparent text-[#4b2817] font-bold py-2 px-4 rounded mt-2 hover:text-[#a35b37] transform transition-all duration-300 font-[Taviraj] w-auto ${stretch ? 'w-full' : ''}`}
        >
          -Know More-
        </button>
      </div>
    </div>
  );
}

export default Cards;
