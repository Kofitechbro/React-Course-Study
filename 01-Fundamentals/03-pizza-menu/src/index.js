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

// ===== APP =====

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// ===== HEADER =====

function Header() {
  /*
    const styles = {
        color: "red",
        fontSize: "48px",
        textTransform: "uppercase",
        };
        return <h1 style={styles}>Fast React Pizza Co.</h1>;
        */

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// ===== MAIN MENU CONTENT =====

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italain cusine & creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul
            className="pizzas
          ">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still workin on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        photoName="pizzas/spinaci.jpg"
        name="Pizza Spinaci"
        ingredients="Tomato, mozaella, spinach, and ricotta cheese"
        price={10.99}
        />
        <Pizza
        photoName="pizzas/funghi.jpg"
        name="Funghi"
        ingredients="Tomatoes, mushrooms"
        price={20.49}
        /> */}
    </main>
  );
}

// ===== PIZZA CONTENT =====

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut && "sold-out"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>$pizzaObj.price</span>
        )} */}

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// ===== FOOTER =====

function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);

  //   if (hour >= openHours && hour <= closeHours) {
  //     alert(`We're currently open`);
  //   } else {
  //     alert(`Sorry we're closed`);
  //   }

  // if (!openHours) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00
        </p>
      )}
    </footer>
  );

  //   return React.createElement("footer", null,`We'r e currently open`);
}

function Order({ closeHours, openHours }) {
  return (
    <div className="order">
      <p>
        We're open form {openHours}:00 to {closeHours}:00. Come visit us or
        order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
