import ProductField from "./ProductField";
// function Product({ id, name, surname, age }) {
//   return (
//     <p>
//       id: <span>{id} </span>
//       name: <span>{name} </span>
//       surname: <span>{surname} </span>
//       age: <span>{age} </span>
//     </p>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
//47//////////////////////////////////////////////////////////////////////////////////////

function Product({
  id,
  name,
  cost,
  inCart,
  addToCart,
  isEdit,
  editProd,
  toggleMode,
}) {
  return (
    <p>
      <ProductField
        id={id}
        text={name}
        type={"name"}
        isEdit={isEdit}
        editProd={editProd}
      />
      <br />
      <ProductField
        id={id}
        text={cost}
        type={"cost"}
        isEdit={isEdit}
        editProd={editProd}
      />
      <br />
      <span>{inCart ? "in cart" : "not in cart"}</span> <br />
      <button onClick={() => addToCart(id)}>add to cart</button>
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </p>
  );
}
export default Product;
