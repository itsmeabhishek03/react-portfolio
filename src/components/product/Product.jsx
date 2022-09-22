import "./product.css";

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div> 
      <div className="img-overlay">
          <img className="img" src={img} alt="my works" />
          <div className="overlay">
            <a href={link} className="common-heading">Project </a>
          </div>
      </div>
    </div>
    
  );
};

export default Product;


