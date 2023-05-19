import React from 'react';
import { useGetAllProductsQuery } from '../redux/features/productsApi';

export default function About() {
    const { data, error, isLoading } = useGetAllProductsQuery();

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
                            <div className="product">
                                <h2 key={product.id}>{product.title}</h2>
                                <img alt={product.title} src={product.thumbnail}/>
                                <h3>${product.price}</h3>
                                <p>{product.description}</p>
                                <button>Add to cart</button>
                            </div>
                            
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
