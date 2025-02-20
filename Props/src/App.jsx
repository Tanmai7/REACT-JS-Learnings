import React from "react";
import Person from "./Person";
import Product from "./Product";

function App() {
  return (
    <div>
      <Person name="Alice" age={25} />
      <Person name="Bob" age={30} />
      <Product name="Laptop" price="$1200" />
      <Product name="Phone" price="$699" />
    </div>
  );
}

export default App;