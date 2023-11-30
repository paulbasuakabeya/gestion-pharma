
import { useParams } from "react-router-dom";
import ProductPrview from "../components/product-Preview/productPreview";
import ProductService from "../models/services/productService";

function SingleProduct() {
    const { id } = useParams();

    const data = ProductService.getProducts()

    const product = data.find((product) => product.id === id);
    return (
        <>
          <ProductPrview product={product} seeMore={true}></ProductPrview>
        </>
        
    );
}

export default SingleProduct;