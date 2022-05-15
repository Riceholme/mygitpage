import * as React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import "./App.css";
// import Portfolio from "./components/portfolio";
import {useState, useEffect} from "react";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/mygitpage" element={<Home/>}/>
        <Route path="/mygitpage/home" element={<Home/>}/>
        <Route path="/mygitpage/about" element={<About/>}/>
        <Route path="/mygitpage/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

function Home(){
  return(
    <div>
    <nav>
    <h2>HOME</h2>
      <ul className="my-list">
        <li>Home</li>
        <li><Link to="/mygitpage/about">About</Link></li>
        <li><Link to="/mygitpage/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Hej, välkommen!</h2>
      <p>Jag heter Erik.</p>
    </main>
    <section></section>
    <footer></footer>
    </div>
  );
}
function About(){
  return(
    <div>
    <nav>
    <h2>ABOUT</h2>
      <ul className="my-list">
      <li><Link to="/mygitpage/home">Home</Link></li>
        <li>About</li>
        <li><Link to="/mygitpage/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
    <main>
      <h2>Här kan du läsa mera om mig</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur earum obcaecati magnam quaerat alias assumenda itaque non quasi, neque laborum beatae tenetur et impedit nostrum placeat eius. Ducimus.</p>
    </main>
    <section></section>
    <footer></footer>
    </div>
  );
}
function Portfolio(){

  const [name, setName] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/Riceholme/repos') //Api fetch
        .then(res => res.json())
        .then(data => {
            setName((prevname) =>[
                ...prevname,
                {
                    name: data[0].name,
                    description: data[0].description,
                    html_url: data[0].html_url
                },
                {
                    name: data[1].name,
                    description: data[1].description,
                    html_url: data[1].html_url
                },
                {
                    name: data[2].name,
                    description: data[2].description,
                    html_url: data[2].html_url
                },
            ]);
        });
    },[]);

  return(
    <div>
    <nav>
    <h2>PORTFOLIO</h2>
      <ul className="my-list">
      <li><Link to="/mygitpage/home">Home</Link></li>
        <li><Link to="/mygitpage/about">About</Link></li>
        <li>Portfolio</li>
      </ul>
    </nav>
    <main>
      <h2>Här är länkar till mina githubrepo via react</h2>
      {name.map((names) =>(
            <>
            <h3>
                {names.name}
            </h3>
            <p>{names.description}</p>
            <p><a href={names.html_url}>{names.html_url}</a></p>
            </>
        ))}
    </main>
    <section></section>
    <footer></footer>
    </div>
  );
}

export default App;
