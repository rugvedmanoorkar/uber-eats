import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../actions/userActions";
import axios from "axios";
import "./Register.css";

function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [cname, setName] = useState("");
  const [error, setError] = useState("");

  async function cusRegister(event) {
    event.preventDefault();
    try {
      const regAdmin = {
        cname,
        email,
        pwd
      };
      console.log("------", regAdmin);
      const res = await axios.post("/customer/api/register/", regAdmin);
      console.log("response", res);
      if (res.status == 200) {
        dispatch(
          register({
            email: res.data.email,
            signedIn: true
          })
        );
        history.push("/clogin");
      } else {
        console.log("error", res.data.message);
        console.log("incatch");
        setError(res.data.message);
      }
    } catch (err) {
      console.log("error", err.response.data.message);
      console.log("incatch");

      setError(err.response.data.message);
    }
  }

  const divStyle = {
    color: "red"
  };
  return (
    <div className="register_cen">
      <div className="reg">
        <img
          className="register__logo"
          src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
          alt=""
        />
        <div className="register_wc">
          <h4>Let's get started</h4>
          <div className="register__container">
            <p>What's your email, phone number and password<span>*</span></p>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              ></input>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={cname}
                required
              ></input>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              ></input>
              <button onClick={cusRegister} className="register__button">
                Next
              </button>
            </form>
            <div className="register__text">
              <p><div style={divStyle}>{error && <p> {error}</p>}</div></p>
              <p>Already use Uber?</p>
              <Link to="/login" className="register_ul">
                <p className="register__create"> &nbsp; Sign in</p>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
