import { useEffect, useReducer } from "react";
import "./App.css";
import chef from "./images/chef.jpg";

let language = "JavaScript";
let moon = "🌙";

function Header({name, year}){
  return (
      <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
      </header>
  );
}

const items = ["fred", "joe", "sam"];

const dishObjects = items.map((dish, i) => ({id: i, title: dish}));

function Main({dishes, openStatus, onStatus}){
  return(
    <>
    <div>welcome {openStatus ?  "open" : "closed"}</div>
    <button onClick={() => onStatus(true)}>reopen</button>
    <main>
      <img src={chef} height={200} alt="chef"/>
    <ul>
      {dishes.map((dish) => (<li key={dish.id} style={{listStyleType:"none"}}>{dish.title}</li>))}
    </ul>
    </main>
    </>
  )
}


function App() {
  const[status, dispatch] = useReducer((status) => !status, true);
  useEffect(() => {console.log({status})},[status]);
  return (<div>
    <h1>site is { status ? "open" : "closed" }</h1>
    <button onClick={dispatch}>{status ? "close" : "open"}</button>
    <Header name="Dave" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects} openStatus={status} onStatus={dispatch}/>
  </div>);
}

export default App;
