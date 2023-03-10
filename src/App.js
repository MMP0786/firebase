// import logo from './logo.svg';
import React from 'react'
// import { getDatabase, ref, set} from 'firebase/database'
import {createUserWithEmailAndPassword, 
  getAuth, GoogleAuthProvider,
   onAuthStateChanged, 
   signInWithEmailAndPassword,
    signInWithPopup} from "firebase/auth"
import './App.css';
import {app} from "./firebase"
import Database from './Database';

function App() {
  const [name, setName] = React.useState(null)
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider()

const handleClick = ()=>{
  createUserWithEmailAndPassword(auth, "abcs@gmail.com", 12345677)
  .then(res => console.log(res))
}

const handleClick1 = ()=>{
  signInWithEmailAndPassword(auth, "abcs@gmail.com", 12345677)
  .then(res => console.log(res))
}

const handleClick2 = ()=>{
  onAuthStateChanged(auth, (user)=>{
    if(user){
      setName(user)

    }else{
      setName(null)
    }
    console.log(user)
  })
}

  return (
    <div className="App">
      <p>this is para</p>
      <button onClick={handleClick} >Click to insert</button>
      <p>login</p>
      <button onClick={handleClick1} >Click to login</button>
      <p>login</p>
      <button onClick={handleClick2} >Click to login</button>
      <p>{name}</p>
      <Database/>
    </div>
  );
}

export default App;
