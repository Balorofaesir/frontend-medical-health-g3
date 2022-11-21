import WebPageInfoComponent from '../components/WebPageInfoComponent/WebPageInfoComponent';
import Emergency from '../components/Emergency/Emergency';
import BookAppointment from '../components/BookAppointment/BookAppointment';
import Article from '../components/CompArticle/Article';

const HomePage = () => (
  <section>
    <BookAppointment />
    <Emergency />
    <WebPageInfoComponent />
    <Article />
  </section>
);

export default HomePage;
