import WebPageInfoComponent from '../components/WebPageInfoComponent/WebPageInfoComponent';
import Emergency from '../components/Emergency/Emergency';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Article from '../components/CompArticle/Article';
import OurDepartment from '../components/Ourdepartment/OurDepartment';
import Button from '../components/Buttons/Button';
import './Home.css';

const HomePage = () => (
  <section>
    <div className="book">
      <Button />
      <BookAppointment />
    </div>
    <div className="book2">
      <Article />
      <Emergency />
    </div>
    <WebPageInfoComponent />
    <OurDepartment />
  </section>
);

export default HomePage;
