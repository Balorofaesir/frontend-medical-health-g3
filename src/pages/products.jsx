import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NamesPages from '../components/NamePages/NamePages';
import { setProducts, selectProduct } from '../features/products/productSlice';
import { makeCartUser } from '../features/cart/cartSlice';
// import { selectAuth } from '../features/auth/authSlice';
import './Products.css';

const Products = () => {
  // const { profile } = useSelector(selectAuth);
  const  {products}  = useSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, [dispatch]);
  // console.log(products);
  const handleClick = (product, par2) => {
    dispatch(
      makeCartUser({
        cart: {
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: par2,
        },
      })
    );
  };

  return (
    <section>
      <NamesPages />
      <section className="Products__Container">
        {products.map((data) => (
          <section className="Products__Container--products" key={data.id}>
            <div>
              <img
                className="Products__Container--products--img"
                src={data.image}
                alt={data.description}
              />
            </div>
            <div className="Products__Container--products--name">
              <h6 className="productsContainer__title">{data.title}</h6>
            </div>
            <div>Price: $ {data.price}</div>
            <span className="Products__Container--products--minicont">
              <p>quantity</p>
              <input
                id={data.id}
                className="CompCart__Container__products__input"
                type="number"
              />
            </span>
            <button
              type="button"
              className="productsContainer__buttonAdd"
              onClick={() => {
                const x = document.getElementById(data.id).value;
                handleClick(data, x);
              }}
            >
              Add to cart
            </button>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Products;
