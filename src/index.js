import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'redux-zero/react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import store from "./store";
// import './styles/App.css';
// import  './App.css';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/App.css';
const Index = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                    <Route exact path="/" component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();