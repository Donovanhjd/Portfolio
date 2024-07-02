import {styles} from "../../../styles.js";
import StarsCanvas from "../../canvas/Stars.jsx"

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <section className={`w-full h-screen mx-auto`}>
                <video
                    autoPlay
                    muted
                    loop
                    className="rotate-180 absolute top-[-340px] md:top-[-385px] h-full w-full object-cover"
                >
                    <source src="https://donovanhjd.github.io/Portfolio/blackhole.webm" type="video/webm"/>
                </video>

                <StarsCanvas/>

                <div
                    className={`absolute top-1/2 -translate-y-1/2 items-center ${styles.paddingX} flex flex-row gap-5`}>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#300D4D]'/>
                        <div className='w-1 sm:h-80 h-40 purple-gradient'/>
                    </div>

                    <div>
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className='pink-text-gradient'>Donovan</span>
                        </h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            A Software Engineer <br className='sm:block hidden'/>
                            With a passion for creating excellence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
