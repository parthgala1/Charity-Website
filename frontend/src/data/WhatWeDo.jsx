import Cards from "../components/Cards";
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'

function App() {
    return (
        <div className='grid grid-cols-2 gap-5 justify-center items-center' id='h1'>
            <Cards
                title="Gaushala"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
                imageUrl={image6}
            />
            <Cards
                title="Orphanage"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
                imageUrl="https://images.pexels.com/photos/1815257/pexels-photo-1815257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Cards
                title="Medical Camp"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
                imageUrl={image7}
            />
            <Cards
                title="Food Kit"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat doloribus vitae fugit enim repudiandae"
                imageUrl={image7}
            />

        </div>
    );
}

export default App;