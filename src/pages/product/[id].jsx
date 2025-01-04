import { useRouter } from 'next/router';
import { useState } from 'react';

const ProductPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);



    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </>
    );
};

export default ProductPage;