import React from "react"
import Masonry from "react-responsive-masonry"
import image1 from "../../assets/images/image1.jpg"
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image5 from "../../assets/images/image5.jpg"
import image6 from "../../assets/images/image6.jpg"
import image7 from "../../assets/images/image7.jpg"
import image8 from "../../assets/images/image8.jpg"
import image9 from "../../assets/images/image9.jpg"

const images = [
    image1,
    image2,
    image7,
    image4,
    image5,
    image9,
    image6,
    image3,
    image8,
]

const Thane = () => {
    return (
        <div className=" mt-20 w-full flex flex-col justify-center items-center">
            <div className="w-10/12 text-center text-5xl font-serif m-5">Thane</div>
            <div className="flex justify-center items-center h-full w-10/12 mx-10 mb-10">
                <Masonry columnsCount={3} gutter="10px" >
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            className="rounded-lg w-full block"
                        />
                    ))}
                </Masonry>
            </div>
        </div>
    )
}

export default Thane