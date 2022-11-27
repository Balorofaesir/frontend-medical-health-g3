import WebPageInfoComponent from '../components/WebPageInfoComponent/WebPageInfoComponent';
import Emergency from '../components/Emergency/Emergency';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Article from '../components/CompArticle/Article';
import OurDepartment from '../components/Ourdepartment/OurDepartment';

const HomePage = () => (
  <section>
    <BookAppointment />
    <Article />
    <Emergency />
    <WebPageInfoComponent />
    <OurDepartment />
  </section>
);

export default HomePage;
