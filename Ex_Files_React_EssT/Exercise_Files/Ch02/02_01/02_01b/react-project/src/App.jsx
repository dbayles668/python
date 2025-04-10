import './App.css'
import chef from "./images/chef.jpg";
import { useState, useReducer, useEffect } from "react";

function Header({name}) {
return (
  <header>
    <h1>{name}'s Website</h1>
  </header>
);
}

const items = ["Fred", "Sam", "Jenny"];

const peopleObjects = items.map((person, i) => ({id:i, title:person}));

function Main({people, openStatus, onStatus}) {
  return (
    <>
    <button onClick={() => onStatus(true)}> Site</button>
    <h2>Welcome to Dave's Site {openStatus ? "Open" : "Closed"}</h2>
    <img src={chef} height={200} alt="chef" />
    <ul>
{people.map((person) => <li key={person.id} style={{listStyleType: "none"}}>{person.title}</li>)}
    </ul>
    </>
  );
}
function Footer (){
  return (
    <p>Copyright {new Date().getFullYear()}</p>
  );
}

function App() {

let figure = "Dave";
const [status, dispatch] = useReducer(status => !status, true);
useEffect(() => {console.log(`site is ${status ? "open" : "closed"}`)}, [status])
return (
  <div>
  <Header name="Joe"/>
  <h1>Site is {status ? "Open" : "Closed"}</h1>
  <button onClick={dispatch}>{status ? "Close" : "Open"} Site</button>
  <Main people={peopleObjects} openStatus={status} onStatus={dispatch}/>
  <Footer />
  </div>
);
}

export default App
