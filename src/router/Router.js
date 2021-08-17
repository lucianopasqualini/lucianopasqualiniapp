import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Productos from '../components/Productos';
import Faq from '../components/Faq';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/productos" component={Productos} />
                <Route path="/faq" component={Faq} />
                <Route path="/itemdetail/:id" component={ItemDetailContainer} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;