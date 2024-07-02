import {BallCanvas} from "../../canvas/index.js";
import {SectionWrapper} from "../../../hoc/index.js";
import {technologies} from "../../../constants/index.js";

const Tech = () => {
    return (
        <div className='sm:flex flex-row flex-wrap justify-center gap-10 hidden '>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");