import { Route, Switch } from "react-router-dom";
import Contacts from "./Contacts";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import PageNotFound from "./PageNotFound";
function Loader() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" exact component={Contacts} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default Loader;
