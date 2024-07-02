import React from 'react';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../utils/motion.js';

// Tilt options moved outside the component to avoid re-creation on each render.
const tiltOptions = {
    max: 45,
    scale: 1,
    speed: 450,
};

const ServiceCard = React.memo(({index, title, icons}) => (
    <Tilt className='xs:w-[250px] w-full' options={tiltOptions}>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                className='bg-tertiary rounded-[20px] py-3 px-6 min-h-[300px] flex flex-col justify-center items-center'
            >
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    {icons.map((icon, iconIndex) => (
                        <img
                            key={iconIndex}
                            src={icon}
                            alt={`${title} icon ${iconIndex}`}
                            className='w-12 h-12 object-contain mx-1 my-1'
                        />
                    ))}
                </div>
                <div className='flex flex-row flex-wrap justify-center items-center'>
                    <h3 className='text-white text-[20px] font-bold text-center mt-2 w-full'>
                        {title}
                    </h3>
                </div>
            </div>
        </motion.div>
    </Tilt>
));

export default ServiceCard;
