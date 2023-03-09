//=====> Seance 5 : TP1 classes composants <=====
import React from 'react';

export default class Voiture extends React.Component{
    constructor(props){
        super(props)
        this.MyVoiture={matricule:'19873X9', marque:'Toyota',chevaux:8}
    }
    render(){
        return(
            <div stype={{color:"red"}}>
                <h1>Informations Voiture :</h1>
                <h4>Matricule: {this.props.MyVoiture.matricule}</h4>
                <h5>Marque: {this.props.MyVoiture.marque}</h5>
                <h6>Chevaux : {this.props.MyVoiture.chevaux}</h6>
            </div>
        )
    }
}

/* =====> Seance 5 : fonctionnels composants <=====

import React from "react";

export default function Voiture() {
    const MyVoiture={matricule:'19873X9',
                        marque:'Toyota',
                        chevaux:8
                    }
                    return(
                        <div style={{color:"red"}}>
                            <h1>Informations Voiture :</h1>
                            <h4>Matricule: {MyVoiture.matricule}</h4>
                            <h5>Marque: {MyVoiture.marque}</h5>
                            <h6>Chevaux : {MyVoiture.chevaux}</h6>
                        </div>
                    )
    
}
*/