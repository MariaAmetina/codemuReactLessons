import { useState } from "react";
import Product from "./Product";

function id() {
  return new Date() * Math.floor(Math.random() * 10);
}

// const initUsers = [
//   { id: id(), name: "user1", surname: "surn1", age: 30 },
//   { id: id(), name: "user2", surname: "surn2", age: 31 },
//   { id: id(), name: "user3", surname: "surn3", age: 32 },
// ];

// function Products() {
//   const [prods, setProds] = useState(initUsers);
//   const res = prods.map((prod) => {
//     return (
//       <Product
//         key={prod.id}
//         id={prod.id}
//         name={prod.name}
//         surname={prod.surname}
//         age={prod.age}
//       />
//     );
//   });
//   return <div>{res}</div>;
// }

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//47//////////////////////////////////////////////////////////////////////////////////////

const initProds = [
  { id: id(), name: "product1", cost: 100, inCart: false, isEdit: false },
  { id: id(), name: "product2", cost: 200, inCart: false, isEdit: false },
  { id: id(), name: "product3", cost: 300, inCart: false, isEdit: false },
];

function Products() {
  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = true;
        }
        return prod;
      })
    );
  }

  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }
        return prod;
      })
    );
  }

  function toggleMode(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }
        return prod;
      })
    );
  }

  const res = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        inCart={prod.inCart}
        addToCart={addToCart}
        isEdit={prod.isEdit}
        editProd={editProd}
        toggleMode={toggleMode}
      />
    );
  });

  return <div>{res}</div>;
}

export default Products;
