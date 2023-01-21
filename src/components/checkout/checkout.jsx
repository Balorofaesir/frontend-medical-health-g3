import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { useSelector } from 'react-redux';

const Checkout = () => {
const elements = useElements();
const stripe = useStripe();
const { total } = useSelector((state) => state.danielCart);
console.log(total)





  const handleSubmit = async (event) => {
    event.preventDefault()

    const API_URL = process.env.REACT_APP_API_URL;
    const { error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    console.log(paymentMethod)

    if (error) {
      throw new Error(error);

    }
    // const Total = localStorage.getItem('total')
    // cons
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Math.floor(200 * 100) // total.toFixed(2)
      })
    }
    const response = await fetch(`${API_URL}/api/payments`, options)
    const data = await response.json()
    console.log(`hola ${data}` )
    return data;

    // elements.getElement(CardElement).clear();
  }

  return (
    <form onSubmit={handleSubmit}>
    <CardElement />
    <button type="submit">Pay</button>
  </form>
  )

};

export default Checkout;
