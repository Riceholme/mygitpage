import * as React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mygitpage/home" element={<Home/>}/>
        <Route path="/mygitpage/about" element={<About/>}/>
        <Route path="/mygitpage/privacy" element={<Privacy/>}/>
      </Routes>
    </div>
  );
}

function Home(){
  return(
    <>
    <nav>
      <ul className="my-list">
        <li>Home</li>
        <li><Link to="/mygitpage/about">About</Link></li>
        <li><Link to="/mygitpage/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Here you get start getting to know me</h2>
      <p>I really like en go whiskey and juicy hamburgers</p>
    </main>
    <section></section>
    <footer></footer>
    </>
  );
}
function About(){
  return(
    <>
    <nav>
      <ul className="my-list">
      <li><Link to="/mygitpage/home">Home</Link></li>
        <li>About</li>
        <li><Link to="/mygitpage/privacy">Privacy</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Here you get start getting to know me</h2>
      <p>I really like en go whiskey and juicy hamburgers</p>
    </main>
    <section></section>
    <footer></footer>
    </>
  );
}
function Privacy(){
  return(
    <>
    <nav>
      <ul className="my-list">
      <li><Link to="/mygitpage/home">Home</Link></li>
        <li><Link to="/mygitpage/about">About</Link></li>
        <li>Privacy</li>
      </ul>
    </nav>
    <main>
      <h2>Here you get start getting to know me</h2>
      <p>I really like en go whiskey and juicy hamburgers</p>
    </main>
    <section></section>
    <footer></footer>
    </>
  );
}

export default App;
