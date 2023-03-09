/*=====> Manipuler un formulaire avec fonction <=====
import { useState } from "react";

export default function Form(){
    const [nom,setNom]=useState("");
    const [pass,setPass]=useState("");
    const [dateN,setDateN]=useState("");
    const [ville,setVille]=useState("");
    const [genre,setGenre]=useState("");
    const [loisirs,setLoisirs]=useState([]);

    function HandleSubmit(e){
        e.preventDefault();
        alert(`${nom}, ${pass}, ${dateN}, ${ville}, ${genre}, ${loisirs.join(',')}`);
    }

    function Verification(e) {
        if(!loisirs.includes(e.target.value)){
            setLoisirs([...loisirs,e.target.value]);
        }
        else{
            setLoisirs([...loisirs.filter((item)=>item!==e.target.value)]);
        }   
    }
return(
    <form onSubmit={(e)=>HandleSubmit(e)}>
        <label>Nom : </label>
        <input type='text' name='nom' onChange={(e)=>setNom(e.target.value)} /><br/>
        <label>Mot de passe : </label>
        <input type='password' name='pass' onChange={(e)=>setPass(e.target.value)}/><br/>
        <label>Date de naissance : </label>
        <input type='date' name='dateN' onChange={(e)=>setDateN(e.target.value)} /><br/>
        <label>ville : </label>
        <select name='ville' onChange={(e)=>setVille(e.target.value)}>
        <option>Choisir une ville</option>
        <option value='Oujda'>Oujda</option>
        <option value='Berkane'>Berkane</option>
        <option value='BeniD'>Beni drar</option>
        <option value='Nador'>Nador</option>
        </select><br/>
        <label>Genre : </label>
        <input type="radio" name='genre' value='Homme' onChange={(e)=>setGenre(e.target.value)} />
        <span>Homme</span>
        <input type="radio" name='genre' value='Femme' onChange={(e)=>setGenre(e.target.value)}/>
        <span>Femme</span><br/>
        <label>Loisirs :</label>
        <input type='checkbox' name='loisirs' value='sport' onChange={(e)=>Verification(e)} />
        <span> Sport</span>
        <input style={{marginLeft:'1em'}} type='checkbox' name='loisirs' value='lecture' onChange={(e)=>Verification(e)}/>
        <span> lecture</span>
        <input  style={{marginLeft:'1em'}}  type='checkbox' name='loisirs' value='Musique' onChange={(e)=>Verification(e)}/>
        <span> Musique</span><br/>
        <input type='submit' value="s'inscrire" />

    </form>
);
}

*/