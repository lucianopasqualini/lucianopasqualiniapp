import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Faq from '../components/Faq';
import GenreList from '../components/GenreList';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/:genero" component={GenreList} />
                <Route exact path="/itemdetail/:id" component={ItemDetailContainer} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;