import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const API_URL = process.env.REACT_APP_API_URL;

const Checkout = () => {
  const elements = useElements();
  const stripe = useStripe();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (error) {
      throw new Error(error);
    }
    const amount = window.localStorage.getItem('price')
    const token = 'pk_test_51MF1FLIZSTomfzNxuUMmwuqeHcBVN91SDeKA41JgafquANphGNXTItQUjBJBS29zIBruRYN1JeEIdEAG3UihDp3100eELLO47e'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(amount * 100),
      }),
    };
    const response = await fetch(
      'http://localhost:8080/api/payment',
      options
    );
    const data = await response.json();
    console.log(`hola ${data}`);
    return data;

    // elements.getElement(CardElement).clear();
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Pay</button>
    </form>
  );
};
export default Checkout;







