import './App.css';
import login_img from "./assets/images/login_img.png";
import Signup from "./components/Signup";
import Fade from "react-reveal/Fade";
function App() {
  return (
      <div className="container ">
          <div className="row py">
              <div className="col-md-5">
                  <Signup />
              </div>
              <Fade right cascade>
              <div className="col-md-7  my-auto">
                  <img className="img-fluid w-100 " src={login_img} alt="img"></img>
              </div>
              </Fade>
          </div>
      </div>
  );
}
export default App;
