
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
     </Router>
{/* 
     <Router>
        <div>
          <ul>
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
          </Switch>
        </div>
     </Router> */}
    </div>

  );
}

export default App;
