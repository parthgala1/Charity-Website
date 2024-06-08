import React from 'react';
import Card from '../../components/Cards';
import image6 from '../../assets/images/image6.jpg';

const Gaushala = () => {
    return (
        <div className='my-24 h-full w-full flex-col flex justify-between items-center'>
            <div className='my-10 text-3xl font-[Playfair] font-bold'>GAUSHALA</div>
            <div>
                <Card
                    title="પશુ રક્ષક મંડળ ,  થાણા"
                    description=""
                    imageUrl={image6}
                />
                <Card
                    title="તુલસી ગોવર્ધન ગૌશાળા, વસઈ"
                    description=""
                    imageUrl={image6}
                />
                <Card
                    title="તુલસી ગોવર્ધન ગૌશાળા, વસઈ"
                    description=""
                    imageUrl={image6}
                />
            </div>
        </div>
    );
}

export default Gaushala;
