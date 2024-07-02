import {motion} from 'framer-motion';
import {styles} from '../../../styles.js';
import {services} from '../../../constants/index.js';
import {SectionWrapper} from '../../../hoc/index.js';
import {fadeIn, textVariant} from '../../../utils/motion.js';
import ServiceCard from './ServiceCard.jsx'; // Assuming ServiceCard is in the same directory

const About = () => {
    const startDate = new Date('2019-10-19');
    const currentDate = new Date();
    const experienceYears = currentDate.getFullYear() - startDate.getFullYear();

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Passionate software developer with over {experienceYears} years of experience specializing in C#, SQL,
                Git,
                AngularJS, and Vue.js. Experienced in the financial insurance industry, adept at developing in-house
                projects and currently working on cutting-edge projects involving facial recognition software. Committed
                to continuous learning and collaboration. Let's connect and drive innovation in software development!
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 relative'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} title={service.title} index={index} icons={service.icon}/>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
