import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Checkout from "../../components/checkout/checkout"
import { getAppointment } from '../../features/appointments/appointmentSlice';
import Loading from '../Loading/Loading';
import  './Payment.css';

const stripePromise = loadStripe(
  'pk_test_51MF1FLIZSTomfzNxuUMmwuqeHcBVN91SDeKA41JgafquANphGNXTItQUjBJBS29zIBruRYN1JeEIdEAG3UihDp3100eELLO47e'
);

const Payment = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const appointment = useSelector((state) => state.appointment.appointment);
  window.localStorage.setItem('price', appointment.price);
  const data = localStorage.getItem('doctor');
  console.log(data)
  // const doctor = JSON.parse(data);

  // const doctorName = doctor.find((item) => item._id === appointment.doctorId);

  useEffect(() => {
    dispatch(getAppointment(_id));
  }, [dispatch]);

  const day = appointment.date?.slice(0, -14);
  const hour = appointment.date?.slice(11, -5);

  const date = `${day} - ${hour}`;
  return (
    <div className="paymentContainer__global">
      {appointment === null ? <Loading /> : null}
      <div className="paymentContainer__local">
        <h1 className="paymentContainer__title">Appointment</h1>
        <hr className="payment__separator" />
        <p className="paymentData__element">
          Doctor: <span className="paymentData__value">{`${'Gail parrish'}`}</span>
        </p>
        <p className="paymentData__element">
          Especiality:{' '}
          <span className="paymentData__value">{appointment.speciality}</span>
        </p>
        <p className="paymentData__element">
          Date: <span className="paymentData__value">{date}</span>
        </p>
        <h3 className="paymentData__price">
          Price:{' '}
          <span className="paymentData__value--price">
            $ {appointment.price}
          </span>
        </h3>
      </div>

      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
};

export default Payment;
