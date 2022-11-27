import './OurDepartment.css';
import { SiApacheflink } from 'react-icons/si';
import { GiPelvisBone } from 'react-icons/gi';
import { TbEyeglass } from 'react-icons/tb';

const OurDepartment = () => (
  <div className="cont6">
    <div className="cont6__title">
      <p className="OurDep">Our department</p>
      <p>Our hospital has all kinds of department services</p>
    </div>
    <div className="cont6__elements">
      <div className="cont6__orthopedics">
        <div className="icons"><GiPelvisBone /></div>
        <h1 className="h1">Orthopedics</h1>
        <p className="paragraf">curabitur alquet quam id dui posure blandit. lacinia eget
          consectetur sed.
        </p>
        <p className="read">Read More &rarr;</p>
      </div>
      <div className="cont6__cardiology">
        <div className="icons"><SiApacheflink /></div>
        <h1 className="h1">cardiology</h1>
        <p className="paragraf">curabitur alquet quam id dui posure blandit. lacinia eget
          consectetur sed.
        </p>
        <p className="read">Read More &rarr;</p>
      </div>
      <div className="cont6__ophthalmology">
        <div className="icons"><TbEyeglass /></div>
        <h1 className="h1">ophthalmology</h1>
        <p className="paragraf">curabitur alquet quam id dui posure blandit. lacinia eget
          consectetur sed.
        </p>
        <p className="read">Read More &rarr;</p>
      </div>
    </div>

    <div className="cont6__button">
      <button className="button" type="button"> All services &rarr;</button>
    </div>
  </div>
);

export default OurDepartment;
