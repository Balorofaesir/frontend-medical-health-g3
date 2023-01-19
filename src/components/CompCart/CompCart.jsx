/* import { useEffect, useState, useRef } from 'react'; */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiCancel } from 'react-icons/gi';
import {
  clearCart,
  setCarts,
  removeItem,
  increase,
  decrease,
  calculateTotal,
} from '../../features/danielCart/danielCartSlice';
import './compCart.css';

const CompCart = () => {
  /* const { carts } = useSelector(selectCart); */
  const { cart, total } = useSelector((state) => state.danielCart);
  const dispatch = useDispatch();
  /* const ref = useRef(null); */
  /**/
  useEffect(() => {
    dispatch(setCarts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);
  /* const [TotalPrice, setTotalPrice] = useState(); */
  /* const [updated, setUpdated] = useState(0); */
  /**/
  /* const handleChange = (e) => { */
  /*   setTotalPrice(e.target.value); */
  /* }; */
  /* const handleClick = () => { */
  /*   setUpdated(TotalPrice); */
  /*   setTotalPrice(''); */
  /*   ref.current.focus(); */
  /* }; */

  return (
    <section className="CompCart">
      <section>
        <div className="CompCart__Container">
          <div className="CompCart__Container__tittles">
            <p>remove</p>
            <p>products</p>
            <p>name</p>
            <p>price</p>
            <p>quantity</p>
          </div>
          <section>
            {cart.map((data) => (
              <section
                className="CompCart__Container__products"
                id={data.id}
                key={data.id}
              >
                <button
                  className="CompCart__Container__products__cancelbutton"
                  type="button"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  <GiCancel />
                </button>
                <div>
                  <img
                    className="CompCart__Container__products--img"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => dispatch(increase(data.id))}
                  >
                    ▲
                  </button>
                  {data.quantity === 1 ? (
                    <button
                      type="button"
                      onClick={() => dispatch(removeItem(data.id))}
                    >
                      ▼
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => dispatch(decrease(data.id))}
                    >
                      ▼
                    </button>
                  )}
                </div>
                <div>{data.title}</div>
                <div>Price: {data.price}</div>
                <div>quantity: {data.quantity}</div>
              </section>
            ))}
          </section>
        </div>
        <div>
          <div>
            <input
              className="CompCart__Container3__inputApply"
              /* onChange={handleChange} */
              type="number"
              value={total}
              /* ref={ref} */
            />
            <button
              /* onClick={handleClick} */
              className="CompCart__Container3__ApplyButton"
              type="button"
            >
              add
            </button>
          </div>
          <button
            className="CompCart__Container3__Cart__ButtonUpdateCart"
            type="button"
          >
            update cart
          </button>
        </div>
      </section>
      <section className="CompCart__Container2__Cart">
        <div className="CompCart__Container2__Cart__h1">Card totals</div>
        <div className="CompCart__Container2__Cart__Line">
          <p>subtotal</p>
          {/* <span>{updated}</span> */}
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>shipping</p>
          <span>price</span>
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>total</p>
          <span>{total.toFixed(2)}</span>
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>payable Total</p>
          <span>price</span>
        </div>
        <button className="CompCart__Container__Cart__Button" type="button">
          proceed to checkout <span />
        </button>
        <button
          type="button"
          className="CompCart__Container__Cart__Button"
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </button>
      </section>
    </section>
  );
};

export default CompCart;
