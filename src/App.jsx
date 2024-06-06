import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Number from './components/Number/Number';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Listport from './components/Listport/Listport';
import Pageport from './components/Pageport/Pageport';
import Blogdetail from './components/Blogdetail/Blogdetail';
import Blogproject from './components/Blogproject/Blogproject';

function App() {
  return (
    <Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{ border: '3px solid #fff' }}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Skills />
            <Portfolio />
            <Number />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/port" element={<Listport />} />
        <Route path="/page_port" element={<Pageport />} />
        <Route path="/page_port/:blogId" element={<Blogdetail />} />
        <Route path="/page_port/project/:projectId" element={<Blogproject />} />
      </Routes>
    </Router>
  );
}

export default App;
