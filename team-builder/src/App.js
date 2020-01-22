import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css'
import Form from './Components/Form';
import data from './Components/data';
import members from './Components/MembersList';



function App() {

  const [members, setMembers] = useState(data)

 const addMember = member => {
  setMembers([...members, member])
 }

  return(
    <div>
      <Form addMember={addMember}/>
     <members member={members}/>
    </div>
  );
}



//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
