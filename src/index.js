import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "46px", textTransform: "uppercase" };
  return (
    <header className="header footer">
      <h1 style={style}>Fast Delivery Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menus</h2>

      {/* // If pizza is not available then show the msg using ternatry operator.*/}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Otalian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delocious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={10}
      /> */}
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   if (hour >= openHour && hour <= closeHour) alert("We're currently open");
  //   else alert("Sorry we're closed");
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're open untill {closeHour}:00. Come visit us or order online{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // React.createElement("footer", null, "We're currently open!");
}

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
