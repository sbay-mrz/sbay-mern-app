import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class NewFolder extends React.Component {
  render() {
    return (
      <div className="newFP">
        <div className="mainOne">
          <div className="oneChild">
            <div className="firstChild">
              <h2>SBAY</h2>
            </div>
            <div className="secondChild">
              <Link to="/" className="secP">
                About Sbay
              </Link>
              <Link to="/" className="secP">
                Careers
              </Link>
              <Link to="/" className="secP">
                Press
              </Link>
              <Link to="/" className="secP">
                Customare care
              </Link>
              <Link to="/" className="secP">
                Services
              </Link>
            </div>
          </div>
          <div className="twoChild">
          <p>Get the freshiest Sbay News</p>
            <div class="input-group mb-3 ">
              <input
                type="text"
                class="form-control"
                placeholder="Your email here"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div class="input-group-append newfoo">
                <button
                  class="btn btn-outline-secondary "
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mainTwo" >
        <div className="secondchildOne">
        <div className="secOne">
            <Link to="/" className="secP">Terms & conditions</Link>
            <Link to="/" className="secP">Privacy Policy</Link>
            <Link to="/" className="secP">Terms & conditions</Link>
            
        </div>
        <div className="secTwo">
        <p>2019 Sbay,LLC.All Rights Reseerved</p>
        </div>
    </div>
    <div className="secondchildTwo">
        <span className="fooicon"><i class="fab fa-facebook-square"></i></span>
        <span className="fooicon"><i class="fab fa-twitter"></i></span>
        <span className="fooicon"><i class="fab fa-instagram"></i></span>
        <span className="fooicon"><i class="fab fa-pinterest"></i></span>
    </div>
        </div>
      </div>
      
    );
  }
}
export default NewFolder;
