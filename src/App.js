import MiningProcess from "./components/MiningProcess";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router";
import MiningResults from "./components/MiningResults";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.scss";
import reducer from "./reducers";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path='/process'>
          <MiningProcess />
        </Route>
        <Route exact path='/results'>
          <MiningResults />
        </Route>
        <Route exact path='/'>
          <Redirect to='/process'></Redirect>
        </Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
