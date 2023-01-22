import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

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
    console.log("🚀 ~ file: Checkout.jsx:7 ~ Checkout ~ amount", amount)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(2000 * 100),
      }),
    };
    const response = await fetch(
      'https://top-25-grupo-3.onrender.com/api/payment',
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
