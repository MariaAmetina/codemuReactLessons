function ProductField({ id, text, type, isEdit, editProd }) {
  return isEdit ? (
    <input value={text} onChange={(e) => editProd(id, type, e)} />
  ) : (
    <span>{text}</span>
  );
}
export default ProductField;
