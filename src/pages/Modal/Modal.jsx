import PropTypes from 'prop-types';
import './Modal.css';

const LoginModal = ({ text }) => (
  <aside className="loginModal__container">
    <div className="loginModal">
      <h4>{text}</h4>
    </div>
  </aside>
);

export default LoginModal;

LoginModal.propTypes = {
  text: PropTypes.string.isRequired,
};
