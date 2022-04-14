import React, { useState, useEffect } from "react";
import ProductDataService from "../services/product";
import { Link } from "react-router-dom";
import product from "../services/product";

//have navgtn and routes to diff components
const ProductsList = props => {
const [products, setProducts] = useState([]); //initial empty array
const [searchName, setSearchName ] = useState(""); //initially empty str
const [searchZip, setSearchZip ] = useState("");
const [searchCategory, setSearchCategory] = useState("");
const [categories, setCategories] = useState(["All Categories"]);
//these are empty arrays to track available prods and categories. we have search criteria too!


useEffect(() => {
  retrieveProducts();
  retrieveCategories();
}, []);

const onChangeSearchName = e => {
  const searchName = e.target.value;
  setSearchName(searchName);
};

const onChangeSearchZip = e => {
  const searchZip = e.target.value;
  setSearchZip(searchZip);
};

const onChangeSearchCategory = e => {
  const searchCategory= e.target.value;
  setSearchCategory(searchCategory);
  
};

const retrieveProducts = () => {
  ProductDataService.getAll()
    .then(response => {
      console.log(response.data);
      setProducts(response.data.products);
      
    })
    .catch(e => {
      console.log(e);
    });
};

const retrieveCategories = () => {
  ProductDataService.getCategories()
    .then(response => {
      console.log(response.data);
      setSearchCategory(["All Categories"].concat(response.data));
      
    })
    .catch(e => {
      console.log(e);
    });
};

const refreshList = () => {
  retrieveProducts();
};

const find = (query, by) => {
  ProductDataService.find(query, by)
    .then(response => {
      console.log(response.data);
      setProducts(response.data.products);
    })
    .catch(e => {
      console.log(e);
    });
};

const findByName = () => {
  find(searchName, "name")
};

const findByZip = () => {
  find(searchZip, "zipcode")
};

const findByCategory = () => {
  if (searchCategory == "All Categories") {
    refreshList();
  } else {
    find(searchCategory, "category")
  }
};
/*
const findProducts = props => {
  return (
    <div className="App">
      Find Products module! 
    </div>
  );
}
*/


return (
  <div>
    <div className="row pb-1">
      <div className="input-group col-lg-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name"
          value={searchName}
          onChange={onChangeSearchName}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByName}
          >
            Search
          </button>
        </div>
      </div>
      <div className="input-group col-lg-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by zip"
          value={searchZip}
          onChange={onChangeSearchZip}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByZip}
          >
            Search
          </button>
        </div>
      </div>
      <div className="input-group col-lg-4">

        <select onChange={onChangeSearchCategory}>
           {categories.map(category => {
             return (
               <option value={category}> {category.substr(0, 20)} </option>
             )
           })}
        </select>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={findByCategory}
          >
            Search
          </button>
        </div>

      </div>
    </div>
    <div className="row">
      {products.map((product) => {
        //const address = `${product.address.building} ${restaurant.address.street}, ${restaurant.address.zipcode}`;
        return (
          <div className="col-lg-4 pb-1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  <strong>Category: </strong>{product.category}<br/>
                  <strong>Rating: </strong>{product.rating}
                </p>
                <div className="row">
                {/* <Link to={"/restaurants/"+restaurant._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                  View Reviews
                </Link> */}
                {/* <a target="_blank" href={"https://www.google.com/maps/place/" + address} className="btn btn-primary col-lg-5 mx-1 mb-1">View Map</a> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}


    </div>
  </div>
);
};
export default ProductsList;
