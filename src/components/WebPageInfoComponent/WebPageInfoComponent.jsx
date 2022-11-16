import './style2.css';
import star from './assets/Star.jpeg';
import handStar from './assets/hand-star.jpeg';
import hospitalBed from './assets/hospital-bed.jpeg';
import lab from './assets/lab.jpeg';

const WebPageInfoComponent = () => (
  <section className="comp2FatherCont">
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={star} alt="" />
      </div>
      <h1>20 +</h1>
      <p>years of experience</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={handStar} alt="" />
      </div>
      <h1>99%</h1>
      <p>patients satisfied</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={hospitalBed} alt="" />
      </div>
      <h1> 700+ </h1>
      <p>medical beads</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={lab} alt="" />
      </div>
      <h1>50 +</h1>
      <p>laboratory experts</p>
    </div>
  </section>
);
export default WebPageInfoComponent;
