import { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GiCancel } from 'react-icons/gi';
import { setCarts, selectCart } from '../../features/cart/cartSlice';
import './compCart.css';

const CompCart = () => {
  const { carts } = useSelector(selectCart);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    dispatch(setCarts());
  }, [dispatch]);

  const [TotalPrice, setTotalPrice] = useState();
  const [updated, setUpdated] = useState(0);

  const handleChange = (e) => {
    setTotalPrice(e.target.value);
  };
  const handleClick = () => {
    setUpdated(TotalPrice);
    setTotalPrice('');
    ref.current.focus();
  };

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
            {carts.map((data) => (
              <section className="CompCart__Container__products" key={data.id}>
                <button
                  className="CompCart__Container__products__cancelbutton"
                  type="button"
                ><GiCancel />
                </button>
                <div>
                  <img className="CompCart__Container__products--img" src={data.image} alt="" />
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
              onChange={handleChange}
              type="number"
              value={TotalPrice}
              ref={ref}
            />
            <button
              onClick={handleClick}
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
          <span>
            {updated}
          </span>
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>shipping</p>
          <span>price</span>
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>total</p>
          <span>price</span>
        </div>
        <div className="CompCart__Container2__Cart__Line">
          <p>payable Total</p>
          <span>price</span>
        </div>
        <button className="CompCart__Container__Cart__Button" type="button">
          proceed to checkout <span />
        </button>
      </section>
    </section>
  );
};

export default CompCart;
