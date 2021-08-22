import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Faq from '../components/Faq';
import GenderList from '../components/GenderList';
import Cart from '../components/Cart'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/gender/:genero" component={GenderList} />
                <Route exact path="/itemdetail/:id" component={ItemDetailContainer} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;