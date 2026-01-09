import './ProductsSection.css';

import omni from './omni.png';
import serum from './serum.png';
import immu from './immu.png';
import urine from './urine.png';
import diabetes from './diabetes.png';
import cardiac from './cardiac.png';
import logy from './logy.png';
import toxic from './toxic.png';
import vista from './vista.png';
import infection from './infection.png';

function ProductsSection() {
  return (
    <section className="products-section">
      <div className="products-header">
        <h3>Products</h3>
        <span>See All</span>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src={omni} alt="Omni" />
          <span>Omni</span>
        </div>

        <div className="product-card">
          <img src={serum} alt="Serum Chemistry" />
          <span>Serum Chemistry</span>
        </div>

        <div className="product-card">
          <img src={immu} alt="Immunoassay" />
          <span>Immunoassay</span>
        </div>

        <div className="product-card">
          <img src={urine} alt="Urine Chemistry" />
          <span>Urine Chemistry</span>
        </div>

        <div className="product-card">
          <img src={diabetes} alt="Diabetes" />
          <span>Diabetes</span>
        </div>

        <div className="product-card">
          <img src={cardiac} alt="Cardiac" />
          <span>Cardiac</span>
        </div>

        <div className="product-card">
          <img src={logy} alt="Immunology" />
          <span>Immunology</span>
        </div>

        <div className="product-card">
          <img src={toxic} alt="Toxicology" />
          <span>Toxicology</span>
        </div>

        <div className="product-card">
          <img src={vista} alt="Vista" />
          <span>Vista</span>
        </div>

        <div className="product-card">
          <img src={infection} alt="Omni Infectious" />
          <span>Omni Infectious</span>
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
