import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    return (
        <div>
            <AutoplaySlider
                bullets={false} // Hide dots navigation
                play={true} // Auto play
                interval={3000} // Auto slide every 2 seconds
                cancelOnInteraction={false} // should stop playing on user interaction
                className='size-96 custom-slider'
            >
                <div>
                    <h2>Testimonial 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div>
                    <h2>Testimonial 2</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <h2>Testimonial 3</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Slider;
