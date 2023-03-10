// import logo from './logo.svg';
import { getDatabase, ref, set} from 'firebase/database'
import './App.css';
import {app} from "./firebase"

function App() {
  const db = getDatabase(app);
  const handleClick = ()=>{

    set(ref(db, "musharraf/panwar"), {
      name: "musharraf",
      sname: "panwar",
      age: 21
    })
    alert("data successful inter")
  }

  return (
    <div className="App">
      <p>this is para</p>
      <button onClick={handleClick} >Click to insert</button>
    </div>
  );
}

export default App;
