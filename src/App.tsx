import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick(puppyId) {
    // some logic here
     setFeatPupId(puppyId);
  }
  const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>
            {puppy.name}
          </p>
         
        );
      })}
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
