function ProductInfo() {
    const product = {
      name: "Laptop",
      price: "$1200",
      availability: "In stock",
    };
  
    return (
      <div>
        <h2>Product Details</h2>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Availability:</strong> {product.availability}</p>
      </div>
    );
  }
  
  export default ProductInfo;
  