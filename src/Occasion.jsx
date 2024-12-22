import './Occasion.css'
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
const Occasion = () => {
  return (
   <>
    <div className="fullvlog1">
    <div className="heading">
          <h1 style={{ textAlign: 'center', marginTop: '90px', textDecoration: 'underline' }}>Personalized Gifts</h1>
        </div>
        <div className="arrivalsimgtt">
        <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/personalized-04.jpg"
            type="Wallets"
            name="Black Organic Leather Personalized Wallet"
            price="$19.50"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/personalized-03.jpg"
            type="Clothing"
            name="Green 100% Cotton Personalized T-Shirt"
            price="11.00"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/personalized-02.jpg"
            type="Office &amp"
            name="Personalized Office Envelopes And Pencil Set"
            price="$12.50"
          />
          <ArrivalItem
            img="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/personalized-01.jpg"
            type="Office &amp"
            name="Personalized Office Notebook And Pen"
            price="$13.25"
          />
        </div>
    </div>
   </>
  )
}

export default Occasion