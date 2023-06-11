import React, { useEffect, useState } from "react";
import M from "materialize-css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import Center from "../Center";
import axios from "axios";
import RestaurantSidebar from "../components/RestaurantSidebar";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "auto",
    margin: "0 auto"
  },
  submitButton: {
    marginTop: "1rem"
  }
}));

const Adddish = () => {
  const history = useHistory();
  const restaurant = useSelector((state) => state.restaurant);
  const [headbg, setheadbg] = useState("transparent");
  const [shadow, setshadow] = useState("none");
  const [dname, setdname] = useState();
  const [ingredients, setingredients] = useState();
  const [ddesc, setddesc] = useState();
  const [cuisine, setcuisineId] = useState();
  const [veg, setveg] = useState("Yes");
  const [nonVeg, setnonveg] = useState("Yes");
  const [vegan, setvegan] = useState("Yes");
  const [categoryId, setcategoryId] = useState();
  const [Price, setPrice] = useState(0);
  const [restaurantId, setrestaurantId] = useState();

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      setheadbg("#FFFFFF");
      setshadow("rgb(226 226 226) 0px -2px 0px inset");
    } else {
      setheadbg("transparent");
      setshadow("none");
    }
  });
  useEffect(() => {
    setrestaurantId(restaurant.restaurant.restaurantId);
  }, []);

  async function dishAdd(event) {
    event.preventDefault();

    const dishes = {
      dname,
      ingredients,
      ddesc,
      cuisine,
      veg,
      nonVeg,
      vegan,
      categoryId,
      Price,
      restaurantId
    };

    axios
      .post("/restaurant/api/adddish/", { dishes: dishes })
      .then((response) => {
        console.log("update", response);
        if (response.data.error) {
          M.toast({
            html: response.data.error,
            classes: "#c62828 red darken-3"
          });
        } else {
          console.log("update1", response);
          M.toast({
            html: "Updated dish details successfully",
            classes: "#43a047 green darken-1"
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    history.push("/rhome");
  }

  const classes = useStyles();
  const cuisines = [
    {
      value: 'Chinese',
      label: 'Chinese',
    },
    {
      value: 'Indian',
      label: 'Indian',
    },
    {
      value: 'Mediterranean',
      label: 'Mediterranean',
    },
    {
      value: 'Lebanese',
      label: 'Lebanese',
    },
    {
      value: 'Italian',
      label: 'Italian',
    },
    {
      value: 'Thai',
      label: 'Thai',
    },
    {
      value: 'Mexican',
      label: 'Mexican',
    },
    {
      value: 'Greek',
      label: 'Greek',
    },
    {
      value: 'Korean',
      label: 'Korean',
    },
  ];
  const yesNo = [
    {
      value: 'Yes',
      label: 'Yes',
    },
    {
      value: 'No',
      label: 'No',
    },
    
  ];
  const categories = [
    {
      value: 'Appetizers',
      label: 'Appetizers',
    },
    {
      value: 'Salad',
      label: 'Salad',
    },
    {
      value: 'Main Course',
      label: 'Main Course',
    },
    {
      value: 'Dessert',
      label: 'Dessert',
    },
    {
      value: 'Beverage',
      label: 'Beverage',
    },
    
  ];
  return (
    <div className="reshome">
      <div className="header__upper">
        <div
          className="header__upperheader"
          style={{ backgroundColor: headbg, boxShadow: shadow }}
        >
          <div className="header__upperheaderleft">
            <Menu />
            <RestaurantSidebar />
          </div>

          <div className="header__upperheaderright">
            <p> Sign out </p>
          </div>
        </div>
      </div>

      {/* <div className= "details_img" style={{marginTop:100, marginLeft: 20}}>
                <Showprofile style={{marginTop:150, marginLeft: 20}} />
                <Profilepic style={{marginTop:150, marginLeft: 20}}/>
                </div> */}

      <div className="row" style={{ marginTop: 120, alignContent: Center }}>
        {
          <form
            id="contactForm"
            style={{ width: "40%" }}
            name="sentMessage"
            className={classes.formContainer}
          >
            <h4
              className="font-weight-normal"
              style={{
                fontFamily: "UberMoveText-Medium,Helvetica,sans-serif"
              }}
            >
              {" "}
              Update details
            </h4>
            <br />

            {/* <div className="row">
              <div className="col-lg"> */}
                <div className="form-group">
                  <TextField
                    fullWidth
                    label="Dish Name"
                    variant="outlined"
                    value={dname}
                    onChange={(e) => setdname(e.target.value)}
                    required
                  />
                  <br></br>

                  {/* <label style={{ width: "100%" }}>
                    Dish Name
                    <input
                      required
                      type="text"
                      style={{
                        width: "100%",
                        borderRadius: 0,
                        padding: "10px",
                        border: "1px solid #e6e6e6",
                        fontSize: "16px"
                      }}
                      className="form-control"
                      onChange={(e) => setdname(e.target.value)}
                      value={dname}
                    />
                  </label> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <TextField
                    fullWidth
                    label="Ingredients"
                    variant="outlined"
                    value={ingredients}
                    onChange={(e) => setingredients(e.target.value)}
                    required
                  />
                  <br></br>
                  {/* <label style={{ width: "100%" }}>
                    Ingredients{" "}
                    <input
                      type="text"
                      style={{ width: "100%", borderRadius: 0 }}
                      className="form-control"
                      onChange={(e) => setingredients(e.target.value)}
                      value={ingredients}
                    />
                  </label> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    value={ddesc}
                    onChange={(e) => setddesc(e.target.value)}
                    required
                  />
                  <p />
                  <br></br>
                  {/* <label style={{ width: "100%" }}>
                    Description{" "}
                    <input
                      type="text"
                      style={{ width: "100%", borderRadius: 0 }}
                      className="form-control"
                      onChange={(e) => setddesc(e.target.value)}
                      value={ddesc}
                    />
                  </label> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  {/* <InputLabel htmlFor="outlined-adornment-amount">
                    Price
                  </InputLabel> */}
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    fullWidth
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Price"
                    onChange={(e) => {
                      console.log(e.target.value);
                      setPrice(e.target.value);
                    }}
                    value={Price}
                  />
                  {/* <label style={{ width: "100%" }}>
                    Price{" "}
                    <input
                      type="number"
                      style={{ width: "100%", borderRadius: 0 }}
                      className="form-control"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setPrice(e.target.value);
                      }}
                      value={Price}
                      defaultValue={0}
                    ></input>
                  </label> */}
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                  <TextField
                  full width
                    id="outlined-select-cuisine-native"
                    select
                    label="Cuisine"
                    defaultValue="Chinese"
                    fullWidth
                    SelectProps={{
                      native: true
                    }}
                    helperText="Please select the cuisine"
                    onChange={(e) => setcuisineId(e.target.value)}
                  >
                    {cuisines.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <label style={{ width: "100%" }}>
                    Cuisine <input className="form-control" />
                  </label>
                  <select
                    onChange={(e) => setcuisineId(e.target.value)}
                    value={cuisine}
                    defaultValue={"Chinese"}
                  >
                    <option value="Chinese" label="Chinese" />
                    <option value="Indian" label="Indian" />
                    <option value="Mediterrian" label="Mediterrian" />
                    <option value="Lebanese" label="Lebanese" />
                    <option value="Italian" label="Italian" />
                    <option value="Thai" label="Thai" />
                    <option value="South Indian" label="South Indian" />
                    <option value="Mexican" label="Mexican" />
                    <option value="Greek" label="Greek" />
                    <option value="Korean" label="Korean" />
                  </select> */}
                  <p className="help-block text-danger"></p>
                </div>

                <div className="form-group">
                <TextField
                  full width
                    id="outlined-select-cuisine-native"
                    select
                    label="Vegetarian"
                    defaultValue="Yes"
                    fullWidth
                    SelectProps={{
                      native: true
                    }}
                    helperText="Please select yes or no"
                    onChange={(e) => setveg(e.target.value)}
                    value={veg}
                  >
                    {yesNo.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <label style={{ width: "100%" }}>
                    Is Vegitarian
                    <input type="dropdown" className="form-control" />
                  </label>
                  <select
                    onChange={(e) => setveg(e.target.value)}
                    value={veg}
                    defaultValue={{ label: "Yes", value: "Yes" }}
                  >
                    <option value="Yes" label="Yes" />
                    <option value="No" label="No" />
                  </select> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                <TextField
                  full width
                    id="outlined-select-cuisine-native"
                    select
                    label="Non Vegetarian"
                    defaultValue="Yes"
                    fullWidth
                    
                    helperText="Please select yes or no"
                    onChange={(e) => setnonveg(e.target.value)}
                    value={nonVeg}
                  >
                    {yesNo.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <label style={{ width: "100%" }}>
                    Is Non-Vegetarian
                    <input type="dropdown" className="form-control" />
                  </label>
                  <select
                    onChange={(e) => setnonveg(e.target.value)}
                    value={nonVeg}
                    defaultValue={{ label: "Yes", value: "Yes" }}
                  >
                    <option value="Yes" label="Yes" />
                    <option value="No" label="No" />
                  </select> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                <TextField
                  full width
                    id="outlined-select-cuisine-native"
                    select
                    label="Vegan"
                    defaultValue="Yes"
                    fullWidth
                    
                    helperText="Please select yes or no"
                    onChange={(e) => setvegan(e.target.value)}
                    value={vegan}
                  >
                    {yesNo.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <label style={{ width: "100%" }}>
                    Is Vegan
                    <input type="dropdown" className="form-control" />
                  </label>
                  <select
                    onChange={(e) => setvegan(e.target.value)}
                    value={vegan}
                    defaultValue={{ label: "Yes", value: "Yes" }}
                  >
                    <option value="Yes" label="Yes" />
                    <option value="No" label="No" />
                  </select> */}
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                <TextField
                  full width
                    id="outlined-select-cuisine-native"
                    select
                    label="Category"
                    defaultValue="Yes"
                    fullWidth
                    
                    helperText="Please select yes or no"
                    onChange={(e) => setcategoryId(e.target.value)}
                    value={categoryId}
                  >
                    {categories.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <label style={{ width: "100%" }}>
                    Category <input type="dropdown" className="form-control" />
                  </label>
                  <select
                    onChange={(e) => setcategoryId(e.target.value)}
                    value={categoryId}
                    defaultValue={"Apetizer"}
                  >
                    <option value="Apetizer" label="Apetizer" />
                    <option value="Salad" label="Salad" />
                    <option value="Main course" label="Main course" />
                    <option value="Desert" label="Desert" />
                    <option value="Beverage" label="Beverage" />
                  </select> */}
                  <p className="help-block text-danger"></p>
                </div>
              {/* </div>
            </div> */}
            <a href="/rhome">
              <Button
                type="submit"
                className="update_button"
                style={{ width: "100%", borderRadius: 5 }}
                onClick={dishAdd}
              >
                Save changes
              </Button>
            </a>
            <br />
            <br />
          </form>
        }
      </div>
    </div>
  );
};

export default Adddish;
