import React from 'react';
import {Link} from 'react-router-dom';
//import AccountService from '../services/AccountService';

const COINS = require('../coins');


//const acs = new AccountService();
//acs.createETHAccount('test passphrase');

export default class CoinPage extends React.Component{
    render(){
        const coin = COINS[this.props.match.params.id];
        return(
            <div>
                <h2 className='display-3'>{coin.name}</h2>
                <ul className="descr">{
                    coin.description.map((descr, key)=><li key={key} className='descr'>{descr}</li>)
                }</ul>
                <Link to='/'>Go back to index</Link>
            </div>
        )
    }
}