// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';

// // import CartList from './components/CartList'
// import CheckoutForm from '../components/checkout/checkout'

// import { useAppContext } from "../services/index"

// const stripePromise = loadStripe('pk_test_51MRzROD2Rs42xgCVa9mfXw1Bidyh7dYr5318uucWenT5Bq8vHP581TaOfJ1vhBInpwoJkoN5QlPKd3lMCzSMLhEc00YRf002oC')

// const Payment = () => {
//   const { state } = useAppContext();
//   return(
//     <div>

//       <div className="container">
//         <div>
//           <h1>Product List</h1>
//           {/* <CartList /> */}
//         </div>

//         <div>
//           <h2>Total</h2>
//           <h3>Price: ${state.total}</h3>
//         </div>
//         <br />
//         <br />

//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//     </div>
//   )
// }

// export default Payment
