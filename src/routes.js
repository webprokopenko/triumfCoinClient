import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import CoinsIndex from './components/coinsIndex';
import CoinPage from './components/coinPage';


export default class routes extends React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={CoinsIndex} />
                    <Route path="/coin/:id" component={CoinPage}/>
                </div>
            </HashRouter>
        )
    }
}
