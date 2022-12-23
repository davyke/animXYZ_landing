import "./product.css"
import product from "../../assets/product.jpg"
const Product = ()=>{
    return(
        <div className="product-container" id="stick" data-scroll-section>
            <div className="image-wrapper" data-scroll
            data-scroll-speed="1"
            data-scroll-sticky 
            data-scroll-target="#stick">
                <img src={product} alt="developers" />
            </div>
            <div className="content">
                <h1>Let's create an open world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quia harum sapiente iure delectus, nemo neque eius reprehenderit molestiae ex! Ipsam soluta </p>
            </div>

        </div>
    )
}
export default Product