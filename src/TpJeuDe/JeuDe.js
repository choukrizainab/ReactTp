import React from 'react';

export default class JeuDe extends React.Component{
    constructor(props){
        super(props);
        this.state={face:null,compteur:0,end:false};
    }
    jouer=()=>{
        let faceVal=Math.floor(Math.random()*6+1);
        this.setState({face:faceVal,compteur:this.state.compteur+1})
        if(faceVal==this.props.cache){
            this.setState({end:true})
        }
    }
    initialiser=()=>{
        this.setState({face:null,compteur:0,end:false})
    }
    render(){
        return(
            <div>
                <h1>Jeu de De...</h1>
                <img src={this.state.face==null?"pictures/init.png":`pictures/face${this.state.face}.png`}/>
                <p>Face : {this.state.face}</p>
                <p>Nombre d'essais : {this.state.compteur}</p>
                {
                    this.state.end
                    ?<div><p>Bravo! Vous avez trouvez la face caché</p>
                    <button onClick={this.initialiser}>initialiser</button></div>
                    :<button onClick={this.jouer}>jouer</button>
                    
                }
            </div>
        );
    }
}