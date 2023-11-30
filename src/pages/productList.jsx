

import ProductPrview from "../components/product-Preview/productPreview.jsx";
import ProductService from "../models/services/productService.jsx";

function ProductsList(){
    const data = ProductService.getProducts();
    return (
        <>
        <ul>
            {data.map((product,index) =>(
                <li key={index}>
                    <ProductPrview product={product} seeMore={false}></ProductPrview>
                </li>
            ))

            }
        </ul>
        </>
    )
}
export default ProductsList;