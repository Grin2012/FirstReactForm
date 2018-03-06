import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import {newStore} from './stores/store';

import Layout from './components/layout/Layout';
import Registration from './app/registration/Registration';
import News from './app/news/News';

import './index.scss';

const store = newStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Route exact path='/' component={Registration}/>
                <Route exact path='/news' component={News}/>
            </Layout>
        </BrowserRouter>,
    </Provider>,
    document.getElementById('root')
);