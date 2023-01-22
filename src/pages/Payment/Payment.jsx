import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Checkout from '../../components/Checkout/Checkout'
import { getAppointment } from '../../features/appointments/appointmentSlice';
import Loading from '../Loading/Loading';


const stripePromise = loadStripe('pk_test_51MF1FLIZSTomfzNxuUMmwuqeHcBVN91SDeKA41JgafquANphGNXTItQUjBJBS29zIBruRYN1JeEIdEAG3UihDp3100eELLO47e')


const Payment = () => {
  const { _id } = useParams();
  const dispatch = useDispatch()
  const  appointment  = useSelector(state => state.appointment.appointment);
  window.localStorage.setItem('price', appointment.price);
  const doctor = window.localStorage.getItem('doctor');




   useEffect(() => {

    dispatch(getAppointment(_id))

  }, [dispatch])



  const day = appointment.date?.slice(0, -14);
  const hour = appointment.date?.slice(11, -5);

  const date = `${day  } ${  hour}`;
  return(
    <div>
      {appointment === null ? <Loading /> : null}

    <div>
      <h1>Appointment</h1>
      <p>Doctor {doctor}</p>
      <p>Especiality {appointment.speciality}</p>
      <p>Date {date}</p>
      <h3>Price $ {appointment.price}</h3>
    </div>

    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  </div>
  )

}



export default Payment;
