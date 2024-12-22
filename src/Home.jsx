import './Home.css';
const Home = () => {
  return (
   <div className="fullhome">
     <div className="con">
        <div className="text">
        <h1>The Best Way to Make Someone Happy...</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
         <button>Choose your box</button>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/91gbfULvW0L._AC_UF1000,1000_QL80_.jpg"
        alt="Sample"
        className="image"
      />
    </div>
   </div>
  );
};
export default Home;
