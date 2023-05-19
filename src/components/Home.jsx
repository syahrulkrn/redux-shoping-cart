import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productsFetch, getAllData } from '../redux/features/productSlice';

export default function Home() {
  const { items, status } = useSelector(getAllData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  console.log(items)

  return (
    <div>
      <h1>Home</h1>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && <p>Error fetching products.</p>}
      {status === 'success' && (
        <ul>
          {items.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
