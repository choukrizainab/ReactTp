//=====> Seance 5 : TP1 classes composants <=====
import React from "react";
export default class Header extends React.Component{
    constructor(props){
        super(props)
        this.titre="Merci de nous visiter"
    }
    render(){
        return(
            <div>
                <h1>{this.titre}</h1>
            </div>
        )
    }
}

/* =====> Seance 5 : TP1 fonctionnels composants <=====
import React from 'react'

export default function Header() {
    const Titre="Merci de nous visiter";
    return(
        <div>
            <h1>{Titre}</h1>
        </div>
    )
    
}
*/