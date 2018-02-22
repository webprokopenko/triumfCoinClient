import React from 'react';
import {Link} from 'react-router-dom';


const coins = [
    {id:1, name: 'Ethereum', slug: 'eth'},
    {id:2, name: 'Bitcoin', slug: 'btc'}
];
export default class authorsIndex extends React.Component{
    render(){
        return(
            <div>
                <h1 className='display-3'>List coins</h1>
                <ul>{
                    coins.map(coin=> <li key={coin.id}><Link to={`/coin/${coin.slug}`}>{coin.name}</Link></li>)
                }</ul>
            </div>
        )
    }
}