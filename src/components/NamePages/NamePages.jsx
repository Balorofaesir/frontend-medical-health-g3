import './NamePages.css';

const NamePages = () => {
  const url = window.location.pathname;
  const name = url.slice(1);
  return (
    <div className="NamePages">
      <p className="NamePages__url"> {name} </p>
    </div>
  );
};

export default NamePages;
