import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
const navItems = [
  { name: "Home" },
  { name: "Shop Categories", dropdown: ["Electronics", "Fashion", "Home & Kitchen", "Books", "Toys", "Health & Beauty", "Sports", "Automotive"] },
  { name: "Special Offers", dropdown: ["90% off", "70% off", "60% off", "50% off", "40% off", "20% off"] },
  { name: "About Us" },
  { name: "Contact Us" },
];
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="branding">
          <h1>Vinay Sandeep</h1>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gift Shop</h2>
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-item ${item.dropdown ? "dropdown" : ""}`}
                style={{ fontSize: "26px", cursor: "pointer", position: "relative" }}
              >
                {item.name}
                {item.dropdown && (
                  <ul className="dropdown-menu">
                    {item.dropdown.map((dropdownItem, i) => (
                      <li key={i} className="dropdown-item">
                        {dropdownItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="search-bar">
          <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <FontAwesomeIcon icon={faUser} style={{border:"2px solid white",borderRadius:"100%",padding:"12px"}} />
      </div>
    </header>
  );
};
export default Header;
