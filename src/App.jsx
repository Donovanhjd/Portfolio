import {BrowserRouter} from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works} from './components/sections/index.js'

const App = () => {

    return (
        <BrowserRouter>
            <div className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
                <Navbar/>
                <Hero/>
                <About/>
                <Experience/>
                <Tech/>
                <Works/>
                {/*<Feedbacks/>*/}
                <Contact/>
            </div>
        </BrowserRouter>
    )
}

export default App