import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import Checkout from '../../components/Checkout/checkout'


const stripePromise = loadStripe('pk_test_51MF1FLIZSTomfzNxuUMmwuqeHcBVN91SDeKA41JgafquANphGNXTItQUjBJBS29zIBruRYN1JeEIdEAG3UihDp3100eELLO47e')

const Payment = () => {
  const { total } = useSelector((state) => state.danielCart);
  console.log(total)
  const Total = localStorage.getItem('total')
  return(
    <div>
    <div>
      <h1>Product List</h1>
    </div>

    <div>
      <h2>Total</h2>
      <h3>Price${Total}</h3>
    </div>

    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  </div>
  )

}



export default Payment;
