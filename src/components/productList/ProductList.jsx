import "./productlist.css";
import Product from "../product/Product";
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Abhishek</h1>
        <p className="pl-desc">
          I am a creative web designer below are some of my sample projects.
          For source code please refer my GitHub profile link is provided in the
          Contact section section.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;