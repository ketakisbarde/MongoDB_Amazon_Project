import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
//have navgtn and routes to diff components
import Loc from "./components/Loc";
import findProducts from "./components/findProducts";
import Login from "./components/login";
import View from "./components/ViewProducts";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/findProducts" className="navbar-brand">
          Amazon Product Reviews
        </a>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/findProducts"} className="nav-link">
            Product Search
            </Link>
          </li>

          <li className="nav-item" >
              { user ? (
                <a href="/#" onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                  Logout {user.name}
                </a>
              ) : (            
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
              )}
          </li>

        
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/findProducts"]} component={findProducts} />
          <Route 
            path="/findProducts/:lat/:long"
            render={(props) => (
              <Loc {...props} user={user}  />
            )}
          />

          <Route 
            path="/findProducts/:text/"
            render={(props) => (
              <View {...props} user={user} />
            )}
          />
               

          <Route 
            path="/login"
            render={(props) => (
              <Login {...props} login={login} />
            )}
          />
        
        </Switch>
      </div>
    </div>
  );
}

export default App;
