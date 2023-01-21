import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ text }) => (
  <aside className="loginModal__container">
    <div className="loginModal">
      <h4>{text}</h4>
    </div>
  </aside>
);

export default Modal;

Modal.propTypes = {
  text: PropTypes.string.isRequired,
};
