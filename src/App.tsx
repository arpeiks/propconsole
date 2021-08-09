import Home from "pages/home";
import Login from "pages/login";
import Domain from "pages/domain";
import Register from "pages/register";
import ResetPassword from "pages/password-reset";
import { Route, Switch } from "react-router-dom";
import ForgotPassword from "pages/forgot-password";

const App = () => {
  return (
    <Switch>
      <Route exact path="/forgot-password">
        <ForgotPassword />
      </Route>
      <Route exact path="/reset-password">
        <ResetPassword />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/domain">
        <Domain />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
