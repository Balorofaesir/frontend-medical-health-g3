import { useNavigate } from 'react-router-dom';
import './Articles.css';
import image from './assets/portrait-beautiful-mature-woman-doctor-260nw-1680655153.webp';

const Article = () => {
  const navigate = useNavigate();

  return (
    <div className="cont">
      <div className="cont__text">
        <h1> Who we are</h1>
        <h2> We provide the highest leve of care</h2>
        <p>
          Nulla porttitoe accumsan tincidunt. Curabitur aliquet Curabitur
          aliquet quam id dui posure blandit vivamus magna justo laciani eget
          consectetur convallis at tellus proin eget torotr.
        </p>
      </div>

      <div className="cont__imgText">
        <img className="image" src={image} alt="doct" />
        <p>
          Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet
          ligula. Lorem ipsum dolor sit amet consectetur adipising elit. Vivamus
          magna juso lacini aget consectetur sed convallis at tellus.
        </p>
      </div>
      <div className="cont__button">
        <button type="button" onClick={() => navigate('#about')}>
          About us
        </button>
      </div>
    </div>
  );
};

export default Article;
