/* eslint-disable global-require */

import './style2.css';

const WebPageInfoComponent = () => (
  <section className="comp2FatherCont">
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={require('./assets/Star.jpeg')} alt="" />
      </div>
      <h1>20 +</h1>
      <p>years of experience</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={require('./assets/hand-star.jpeg')} alt="" />
      </div>
      <h1>99%</h1>
      <p>patients satisfied</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={require('./assets/hospital-bed.jpeg')} alt="" />
      </div>
      <h1> 700+ </h1>
      <p>medical beads</p>
    </div>
    <div className="comp2Cont">
      <div className="imgCont">
        <img src={require('./assets/lab.jpeg')} alt="" />
      </div>
      <h1>50 +</h1>
      <p>laboratory experts</p>
    </div>
  </section>
);
export default WebPageInfoComponent;
