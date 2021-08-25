import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Faq from '../components/Faq';
import GenderList from '../components/GenderList';
import Cart from '../components/Cart'
import Home from '../components/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/gender/:genero" component={GenderList} />
                <Route exact path="/itemdetail/:id" component={ItemDetailContainer} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    )
};

export default Router;