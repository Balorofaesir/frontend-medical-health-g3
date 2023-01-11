import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NamesPages from '../components/NamePages/NamePages';
import { setProducts, selectProduct } from '../features/products/productSlice';
import { makeCartList } from '../features/cart/cartSlice';

const HomePage = () => {
  const { products } = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);

  const handleClick = (product, par2) => {
    dispatch(makeCartList({
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: par2,
    }));
  };

  return (
    <section>
      <NamesPages />
      <section className="Products__Container">
        {products.map((data) => (
          <section className="Products__Container--products" key={data.id}>
            <div>
              <img className="Products__Container--products--img" src={data.image} alt="" />
            </div>
            <div>{data.title}</div>
            <div>Price: {data.price}</div>
            <span className="Products__Container--products--minicont">
              <p>quantity</p>
              <input
                id={data.id}
                className="CompCart__Container__products__input"
                type="number"
              />
            </span>
            <button type="button" onClick={() => { const x = document.getElementById(data.id).value; handleClick(data, x); }}>Add to cart</button>
          </section>
        ))}
      </section>
    </section>
  );
};

export default HomePage;
