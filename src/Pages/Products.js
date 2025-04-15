import React from "react";

function Products() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Our Products</h1>
      <p>Explore our exclusive range of products below:</p>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>Product 1</li>
        <li style={{ marginBottom: "10px" }}>Product 2</li>
        <li style={{ marginBottom: "10px" }}>Product 3</li>
      </ul>
    </div>
  );
}

export default Products;