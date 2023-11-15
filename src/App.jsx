
import './App.css';
import Navbar from './components/navbar/Navbar'
import Header from './containers/header/Header'
import Brand from './components/brand/Brand'
import WhatGPT from './containers/whatGPT3/WhatGPT'
import Features from './containers/features/Features'
import Possibility from './containers/possibility/Possibility'
import Cta from './components/cta/Cta'
import Blog from './containers/blog/Blog'
import Footer from './containers/footer/Footer'

function App() {
  return (
    <div className='App'>
    <div className='gradient__bg'>
      <Navbar/>
      <Header/>
    </div>
    <Brand/>
    <WhatGPT/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
</div>
  );
}

export default App;
