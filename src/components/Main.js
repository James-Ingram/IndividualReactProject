import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Stock from './Stock';
import Products from './Products';
import FindProduct  from './product/FindProduct.js';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/stock' component={Stock} />
            <Route path='/FindProduct' component={FindProduct} />
        </Switch>
    </main>
)

export default Main;