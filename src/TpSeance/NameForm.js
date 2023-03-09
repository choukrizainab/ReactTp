
import { useState } from "react";
import './bootstrap.min.css';

const NameForm = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [testeur, setTesteur] = useState(false);

  const handleChangeNom = (event) => {
    setNom(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    if (testeur) {
      alert('Email envoyé');
    } else {
      alert('Erreur d\'envoi');
    }
  }

  const verifEmail = (event) => {
    let y = event.target.value;
    let reg = new RegExp("^[a-z]+\@[a-z]{4,6}\.(com|ma)$");
    setTesteur(reg.test(y));
    setEmail(y);
  }

  return (
    <div className="border  w-50 center rounded shadow-sm m-5 p-5">
           <div className="center text-center">
            
           <h1 className="center" >Form</h1>
           </div>
            <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="name" placeholder="Votre nom" value={nom} onChange={handleChangeNom} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Votre email" value={email} onChange={verifEmail} />
        </div>
        
          <button type="submit" className="btn btn-outline-primary" >Envoyer</button>
        
        
      </form>

      <div>Votre nom est: {nom}</div>
      <div>Votre email est: {email} {testeur ? "email valide" :"email invalide"}</div>
      
     
    </div>
  );
}

export default NameForm;


