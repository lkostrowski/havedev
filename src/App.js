import React, {Component} from 'react';
import './app.css';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'
import reducers from './reducers'
import Homepage from './screens/Homepage/Homepage';
import Blog from './screens/Blog/Blog';
import ArticleView from "./screens/ArticleView/ArticleView";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/blog" component={Blog}/>
                        <Route exact path="/blog/:slug" component={ArticleView}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;

