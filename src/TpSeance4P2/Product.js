import React from 'react';

export default class Product extends React.Component{
    render(){
    return(
        <div className='col'>
            <div className='card shadow-sm'>
                <img className="bd-placeholder-img card-img-top" src={`pictures/${this.props.data.thumbnail}`} alt=""/>
                <p className='card-title'>{this.props.data.title}</p>
                <p className='card-text'>{this.props.data.price}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-sm btn-outline-secondary'>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

/* =====> Seance 5 : TP1 fonctionnels composants <=====
import react from 'react';
export default function Product(props) {
    return(
        <div className='col'>
            <div className='card shadow-sm'>
                <img className="bd-placeholder-img card-img-top" src={`pictures/${props.data.thumbnail}`} alt=""/>
                <p className='card-title'>{props.data.title}</p>
                <p className='card-text'>{props.data.price}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-sm btn-outline-secondary'>Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

*/