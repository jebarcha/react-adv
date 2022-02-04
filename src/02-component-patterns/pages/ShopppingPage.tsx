import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products';

const product = products[0];

export const ShopppingPage = () => {


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard 
                key={product.id}
                product={product}
                initialValues={{
                    count: 6,
                    //maxCount: 10
                }}
            >
                {
                    ( { reset, count, increaseBy, maxCount, isMaxCountReached } ) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
                
        </div>
    )
};

