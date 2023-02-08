import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Special from './components/Special';
import Product from './components/Product'
import Place from './components/Place';
import Blog from './components/Blog';
import Footer from './components/Footer';
// import Navbar from './components/Navbar,js';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import { useState} from 'react';
// import { UserContext } from './components/UserContext';


function App() {
  // const [valid, setValid] = useState(null);

  return (
    <><Header/>
    <main className="main">
      <Hero />
      <Special/>
      <Product />
      <Place />
      <Blog />
      <Footer />
      </main>
    </>




    // <>
    // <Router>
    //   <UserContext.Provider value={{valid, setValid}}>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Home/>} />
    //     <Route path='/NewItem' element={<NewItem/>} />
    //     <Route path='/SignIn' element={<SignIn/>} />
    //     <Route path='/Settings' element={<Settings/>} />
    //   </Routes>
    //   </UserContext.Provider>
    // </Router>
    // </>
  );
}

export default App;
