import { GiCancel } from 'react-icons/gi';
import './compCart.css';
import mebid from '../Header/assets/mebid-icon.jpeg';

const CompCart = () => (
  <section className="CompCart">
    <section>
      <div className="CompCart__Container">
        <div className="CompCart__Container__tittles">
          <p>remove</p>
          <p>products</p>
          <p>name</p>
          <p>price</p>
          <p>quantity</p>
          <p>sub-total</p>
        </div>
        <div className="CompCart__Container__products">
          <button
            className="CompCart__Container__products__cancelbutton"
            type="button"
          >
            <GiCancel />
          </button>
          <div>
            <img src={mebid} alt="" />
          </div>
          <p>product name</p>
          <p>price value</p>
          <span>
            <input
              className="CompCart__Container__products__input"
              type="text"
            />
          </span>
          <div>subtotal</div>
        </div>
      </div>
      <div>
        <div>
          <input
            className="CompCart__Container3__inputApply"
            type="text"
            value="Coupon code"
          />
          <button className="CompCart__Container3__ApplyButton" type="button">
            apply coupon
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
      <personalbar className="CompCart__Container2__Cart__h1">Card totals</personalbar>
      <div className="CompCart__Container2__Cart__Line">
        <p>subtotal</p>
        <span>price</span>
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

export default CompCart;
