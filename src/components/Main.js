import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Stock from './Stock';
import Products from './Products';
import FindProduct from './product/FindProduct.js';
import DeleteProduct from './product/DeleteProduct.js';
import CreateProduct from './product/CreateProduct.js';
import UpdateProduct from './product/UpdateProduct.js';


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Products} />
            <Route path='/stock' component={Stock} />
            <Route path='/FindProduct' component={FindProduct}/>
            <Route path='/DeleteProduct' component={DeleteProduct}/>
            <Route path='/CreateProduct' component={CreateProduct}/>
            <Route path='/UpdateProduct' component={UpdateProduct}/>
        </Switch>
    </main>
)

export default Main;