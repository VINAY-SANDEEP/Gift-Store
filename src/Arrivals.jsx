import './Arrivals.css';

const ArrivalItem = (props) => {
  return (
    <div className="arrivalsimg1">
      <img src={props.img} alt="" />
      <h3>{props.type}</h3>
      <h2>{props.name}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

const Arrivals = () => {
  return (
    <>
      <div className="fullvlog">
        <div className="heading">
          <h1 style={{ textAlign: 'center', marginTop: '90px', textDecoration: 'underline' }}>New Arrivals</h1>
        </div>
        <div className="arrivalsimg">
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-05.jpg"
            type="Wallets"
            name="Black Panther Wallet"
            price="$400"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-04.jpg"
            type="Wallets"
            name="Tyler Brown Leather Wallet"
            price="105.50"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/wallet-03.jpg"
            type="Wallets"
            name="Light Brown Real Leather Credit Card"
            price="$45.50"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/08/toy-05.jpg"
            type="Toys"
            name="Adventure Power Dinosaur Toy"
            price="$21.75"
          />
        </div>
      </div>
    </>
  );
};

export default Arrivals;
