import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Submit from './pages/Submit';
import Navbar from './components/Navbar';
import Issue from './components/Issue';
import ArticlePage from './components/ArticlePage';
// import Contact from './pages/Contact';


/** Idea: keep currIssue / Articles stateful. We keep a state loadedArticle, and onClick to links we just set the state and navigate
 *  to the Article page. Article page always takes from the state loadedArticle?
 * 
 */
function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Issue/:issue" element={<Issue />} /> {/** Replace with the dynamic issue loader*/}
        <Route path='/ArticlePage/:id' element={<ArticlePage/>} />
      </Routes>
    </Router>
  );
}

export default App;