import React from 'react';
// import './Card.css'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import { useNavigate } from 'react-router-dom';

function Card({ title, description, imageUrl }) {

  const history = useNavigate();

  const handleSubmit = (title) => () => {
    // console.log(title);
    history(`/${title}`);
  }

  return (
    <div className="card w-96 m-5 glass">
      <figure><img src={imageUrl} alt="car!" /></figure>
      <div className="card-body">
        <h2 className="card-title font-[Poppins]">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button onClick={handleSubmit(title)} className="btn border-inherit bg-transparent text-gray-900 font-[Poppins] text-lg hover:bg-gray-300 hover:border-inherit shadow">- Know More -</button>
        </div>
      </div>
    </div >
  );
}

function App() {
  return (
    <div className='grid grid-cols-3 gap-5 justify-center items-center' id='h1'>
      <Card
        title="Gaushala"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl={image6}
      />
      <Card
        title="Orphanage"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Card
        title="Medical Camp"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl={image7}
      />
      <Card
        title="Food Kit"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl={image7}
      />
      <Card
        title="Bird Feeding"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      />
      <Card
        title="Keediyaro"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl={image6}
      />
    </div>
  );
}

export default App;
