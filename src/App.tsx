import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Submit from './pages/Submit';
import Navbar from './components/Navbar';
import React, { useState, type ReactElement } from 'react';
// import Contact from './pages/Contact';


/** Idea: keep currIssue / Pieces stateful. We keep a state loadedPiece, and onClick to links we just set the state and navigate
 *  to the Piece page. Piece page always takes from the state loadedPiece?
 * 
 */
function App() {
  interface pagecontent {
    title:string,
    author:string,
    content: ReactElement

  }

  const [pageContent, setPageContent] = useState<pagecontent>({
    title:'none',
    author:'none',
    content:<></>
  })
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/CurrentIssue" element={<Submit content={setPageContent} />} /> {/** Replace with the dynamic issue loader*/}
      </Routes>
    </Router>
  );
}

export default App;