import './ShopCat.css'
const ShopCat = () => {
  return (
  <>
    <div className="grindop">
    <div className="heading">
     <h1 style={{ textAlign: 'center', marginTop: '90px', textDecoration: 'underline' }}>Shop by Categories</h1>
     </div>
     <div className="placeimg">
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/toys-01.jpg" />
    <h3 style={{ borderBottom: "4px solid green", backgroundColor: "green" ,color:"black"}}>Toys</h3>
  </div>
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/accessories.jpg" />
    <h3 style={{ borderBottom: "4px solid yellow", backgroundColor: "yellow" ,color:"black"}}>Accessories</h3>
  </div>
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/clothing.jpg" />
    <h3 style={{ borderBottom: "4px solid black", backgroundColor: "skin",color:"black" }}>Clothing</h3>
  </div>
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/handbags.jpg" />
    <h3 style={{ borderBottom: "4px solid black", backgroundColor: "greenyellow" ,color:"black"}}>Handbags</h3>
  </div>
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/wallets.jpg" />
    <h3 style={{ borderBottom: "4px solid brown", backgroundColor: "brown" ,color:"black"}}>Wallets</h3>
  </div>
  <div>
    <img src="https://websitedemos.net/gift-shop-04/wp-content/uploads/sites/919/2021/07/office.jpg" />
    <h3 style={{ borderBottom: "4px solid blue", backgroundColor: "blue",color:"black" }}>Office & Stationary</h3>
  </div>
</div>

    </div>
  </>
  )
}

export default ShopCat