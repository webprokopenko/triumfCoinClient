import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CWDialog from './CWdialog';
import OWDialog from './OWdialog';

const COINS = require('../coins');

export default class CoinPage extends Component{
    render(){
        const coin = COINS[this.props.match.params.id];
        return(
            <div>
                <h2 className='display-3'>{coin.name}</h2>
                <CWDialog wallet={coin.shortName}/>
                <OWDialog wallet={coin.shortName}/>
                <ul className="descr">{
                    coin.description.map((descr, key)=><li key={key} className='descr'>{descr}</li>)
                }</ul>
                <Link to='/'>Go back to index</Link>
            </div>
        )
    }
}