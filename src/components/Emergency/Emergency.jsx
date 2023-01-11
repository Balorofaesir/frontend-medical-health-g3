import './Emergency.css';

import imgPhon from './assets/icono-de-la-línea-directa-del-teléfono-en-círculo-128428651.jpg';

const Emergency = () => (
  <div className="cont1" id="urgency">
    <div className="cont1__section1">
      <div className="cont1__img">
        <img src={imgPhon} alt="imagenPhone" />
      </div>
      <div className="cont1_text1">
        <h1> Emergency 24 hours</h1>
        <h3>+04 8544 3322</h3>
      </div>
    </div>
    <div className="cont1__section2">
      <div className="cont1__text2">
        <div className="cont1__list1">
          <h1>Mon - Fri</h1>
          <h2>08:00-08:00</h2>
        </div>
        <hr />
        <div className="cont1__list2">
          <h1>Saturday</h1>
          <h2>09:00-06:00</h2>
        </div>
        <hr />
        <div className="cont1__list3">
          <h1>Sunday</h1>
          <h2>09:00-03:00</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Emergency;
