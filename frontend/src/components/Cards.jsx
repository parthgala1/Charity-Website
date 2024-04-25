import React from 'react';
// import './Card.css'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'

function Card({ title, description, imageUrl }) {
  return (
    <div className="card w-96 m-5 glass">
      <figure><img src={imageUrl} alt="car!" /></figure>
      <div className="card-body">
        <h2 className="card-title font-[Poppins]">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className='flex justify-center items-center' id='h1'>
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
        title="Keep Smiling"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
        imageUrl={image7}
      />
    </div>
  );
}

export default App;
