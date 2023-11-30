

import{ Link } from 'react-router-dom'

function ProductPrview({product, seeMore}) {
    return(
        <div>
            <img src={product.image} alt="Product image" />
            <h2>{product.image}</h2>
            {seeMore ?(
                <p>{product.description}</p>
            ) : (
                <Link to= {`/products/${product.id}`}> voir plus</Link>
                // <Link to= {'products'+ product.id}> voir plus</Link>
            )}
        </div>
    );
}
export default ProductPrview;