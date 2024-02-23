import { BrowserRouter } from "react-router-dom";

import { About, Experience, Feedbacks, Hero, Navbar, Tech, Certifications, Contact, Bootcamp } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=''>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certifications />
        <Tech />
        <Bootcamp />
        {/* <Calendar /> */}
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
