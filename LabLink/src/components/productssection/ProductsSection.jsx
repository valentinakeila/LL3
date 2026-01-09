import './ProductsSection.css';

function ProductsSection() {
  return (
    <section className="products-section">

      {/* Header */}
      <div className="products-header">
        <h3>Products</h3>

        <input
          type="text"
          placeholder="Search by product name"
          className="products-search"
        />
      </div>

      {/* Cards */}
      <div className="products-grid">
        <div className="product-card">Omni</div>
        <div className="product-card">Serum Chemistry</div>
        <div className="product-card">Immunoassay</div>
        <div className="product-card">Urine Chemistry</div>
        <div className="product-card">Diabetes</div>
        <div className="product-card">Cardiac</div>
        <div className="product-card">Immunology</div>
        <div className="product-card">Toxicology</div>
        <div className="product-card">Vista</div>
        <div className="product-card">Omni Infectious</div>
      </div>
    </section>
  );
}

export default ProductsSection;
