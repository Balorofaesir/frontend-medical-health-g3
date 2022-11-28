import './NamePages.css';

const NamePages = () => {
  const url = window.location.pathname;
  const name = url.slice(1);

  const imageUrl = 'https://searx.org/image_proxy?url=https%3A%2F%2Fc.files.bbci.co.uk%2FF9BB%2Fproduction%2F_91513936_thinkstockphotos-518899958.jpg&h=d7341d49ebd91141435b94c233bbfaa9df2f6b806f0e97152ab8de32e814a861';

  const style = {
    background: `url(${imageUrl}) repeat 0 20% rgba(0, 0, 0, 0.4)`,
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
  };

  return (
    <div className="NamePages" style={style}>
      <p className="NamePages__url"> {name} </p>
      <p className="NamePages__path">{`Home / ${name}`}</p>
    </div>
  );
};

export default NamePages;
