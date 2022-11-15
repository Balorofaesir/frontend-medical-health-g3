import './Button.css';
// eslint-disable-next-line react/prop-types
const Button = ({ image, text, value }) => {
  const handleClick = (e) => {
    e.preventDefault();
    alert(value);
  };

  return (
    <div className="container">
      <a
        href="../BookAppointment/BookAppointment.jsx"
        className="btn__container"
        value={value}
        onClick={handleClick}
      >
        <img src={image} alt="button to use service" className="btn__img" />
      </a>
      <p className="btn__paragraph">{text}</p>
    </div>
  );
};

export default Button;
