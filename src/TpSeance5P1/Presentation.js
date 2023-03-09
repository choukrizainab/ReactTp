//=====> Seance 5 : TP1 classes composants <=====
import React from "react";
export default class Presentation extends React.Component{
    constructor(props){
        super(props)
        this.nom='Choukri'
        this.prenom='Zainab'
    }
    render(){
        return(
            <div>
                <h2> Bonsoir {this.nom} {this.prenom}</h2>
            </div>
        )
    }
}

/* =====> Seance 5 : TP1 fonctionnels composants <=====

import React from "react";
export default function Presentation(props) {
    const nom="Choukri"
    const prenom="Zainab"
    return(
        <div>
            <h2>Bonsoir melle {nom} {prenom}</h2>
        </div>
    )
    
}
*/