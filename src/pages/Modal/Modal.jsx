import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ text, button, textButton }) => (
  <aside className="loginModal__container">
    <div className="loginModal">
      <h4>{text}</h4>
      {button === null ? null : (
        <button type="button" onClick={button} className="buttonModal">
          {textButton}
        </button>
      )}
    </div>
  </aside>
);

export default Modal;

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.func,
  textButton: PropTypes.string,
};

Modal.defaultProps = {
  button: null,
  textButton: '',
};
