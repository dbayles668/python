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

function Main({dishes}){
  return(
    <>
    <div>welcome</div>
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
  return (<div>
    <Header name="Dave" year={new Date().getFullYear()}/>
    <Main dishes={dishObjects} />
  </div>);
}

export default App;
