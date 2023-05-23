import React from 'react';
import { useGetAllProductsQuery } from '../redux/features/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

export default function Shop() {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addToCart(product))
    }

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred.</p>
            ) : (
                <>
                    <h1 className='arrival-title'>New Arrivals</h1>
                    <div className="shop-container">
                        {data.products.map((product) => (
                            <div key={product.id} className="product">
                                <h2 >{product.title}</h2>
                                <img alt={product.title} src={product.thumbnail}/>
                                <h3>${product.price}</h3>
                                <p>{product.description}</p>
                                <button onClick={()=> handleAddToCart(product)}>Add to cart</button>
                            </div>                       
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
