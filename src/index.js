import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Forms from './app/registaration/Forms';
import Layout from './components/layout/Layout';

import './index.scss';

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Forms}/>
        </Layout>
    </BrowserRouter>,
    document.getElementById('root')
);
