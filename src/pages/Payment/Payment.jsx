import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from '../../components/Checkout/Checkout';

const stripePromise = loadStripe(
  'pk_test_51MRzROD2Rs42xgCVa9mfXw1Bidyh7dYr5318uucWenT5Bq8vHP581TaOfJ1vhBInpwoJkoN5QlPKd3lMCzSMLhEc00YRf002oC'
);

const Payment = () => (
  <div>
    <div>
      <h1>Product List</h1>
    </div>

    <div>
      <h2>Total</h2>
      <h3>Price</h3>
    </div>

    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  </div>
);

export default Payment;
