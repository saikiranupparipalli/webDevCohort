function Items({ product, brand = "Apple" }) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.inStock}</p>
      <div>{product.price}</div>
      <p>brand: {brand}</p>
    </article>
  );
}

export default Items