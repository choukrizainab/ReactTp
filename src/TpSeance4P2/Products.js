import React from 'react';
import Product from './Product';

const produits = [ { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail : 'HP16D0195NF.jpg' }, { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail : 'HP14424U3EA.jpg' }, { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: 'NXATHEF002.jpg' }, { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH',thumbnail:'HUA6901443442959.jpg' } ];
export default class Products extends React.Component{
    render(){
    return(
        <div className='container'>
            <div className='row'>
                {produits.map((produit,index)=>{
                    return<Product key={index} data={produit}/>
                })
                }
            </div>
        </div>
    )
}
}


/* =====> Seance 5 : TP1 fonctionnels composants <=====
import react from 'react';
import Product from './Product';
const produits = [ { id: 1, title: 'PC Portable Gamer HP VICTUS', price: '7490 DH', thumbnail : 'HP16D0195NF.jpg' }, { id: 2, title: 'PC Portable Gamer HP VICTUS', price: '2190 DH', thumbnail : 'HP14424U3EA.jpg' }, { id: 3, title: 'Pc Portable Chromebook Acer', price: '3640 DH', thumbnail: 'NXATHEF002.jpg' }, { id: 4, title: 'PC Portable - HUAWEI', price: '1270 DH',thumbnail:'HUA6901443442959.jpg' } ];
export default function Products() {
    return(
        <div className='container'>
            <div className='row'>
                {produits.map((produit,index)=>{
                    return<Product key={index} data={produit}/>
                })
                }
            </div>
        </div>
    )
}

*/