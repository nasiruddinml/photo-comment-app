import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider} from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";

const render = () => {
  fancyLog();
  return ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={App}/>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
};
function fancyLog() {
  console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
  console.log(store.getState());
}
render()
store.subscribe(render);
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
