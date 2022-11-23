import './DoctorProfile.css';
import image from './assets/portrait-beautiful-mature-woman-doctor-260nw-1680655153.webp';

const DoctorAndres = () => (
  <div className="cont5">
    <div className="cont5__image">
      <img className="image" src={image} alt="doct" />
    </div>
    <h1 className="doctor1">Dr. Andres</h1>
    <div className="cont5__section1">
      <h1>Qualifications</h1>
      <p className="p1">Master of scince</p>
      <p className="p1">University of medical scince</p>
    </div>
    <div className="cont5__section2">
      <h1>Menmberships</h1>
      <p className="p2">Eupopean society of cardiology</p>
      <p className="p2">British cardiovascular society</p>
      <p className="p2">Fellow royal society of medicine</p>
    </div>
    <div className="cont5__section3">
      <h1>Introduction</h1>
      <p>Dr. perry barkle dicrosa received his doctorate in
        medical doctorry from hospital usa in 2003.
        following his professional qualification he
        practiced maxillofacial surgery at hospital and the royal hospital.
        Dr. bigham gained mem ership of the college of surgeons
        of usa in 2007. He has over 10 years of experience working general
        dental practitiones on both surrey an central.
      </p>
      <ul>
        <li>Member of the royal college of surgeons of USA</li>
        <li>Member of the general dental council USA</li>
      </ul>
    </div>
    <div className="cont5__section4">
      <h1>Skills</h1>
      <ul className="lists2">
        <li className="list2">Safety and fall prevention</li>
        <li>Dental implants</li>
        <li className="list2">Dental demi text</li>
        <li>Filling content</li>
        <li className="list2">Root canal demi text</li>
        <li>Orthodontics prob</li>
      </ul>
    </div>
  </div>
);

export default DoctorAndres;
