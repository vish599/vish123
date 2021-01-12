import logo from './logo.svg';
import './App.css';
import Home from './Container/Home';
import Header from './Components/Header';
import Hero from './Components/Hero';

import Post from './Container/Post/post';
import Layout from './Components/Layout';
import Recant from './Components/Recant';
import Homo from './Components/Homo/homo';

function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
      <Home />
     <Post />
     <Layout />
     <Layout />
     <Layout />
     <Layout />
     <Recant />
     <Homo />
     <Home />
     
    </div>
  );
}

export default App;
