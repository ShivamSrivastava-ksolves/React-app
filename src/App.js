import React from 'react';
import './App.css';
import Header from './components/Header'



const name = <span>Hello this is with jsx</span>

// new class component

class App extends React.Component{

render(){
  return <Header/>
  
}

}

// function App() {
//   return (
//     <div className="App">
//     <h1>Hello welcome to my keeps app, {name}</h1>
   

//     </div>
//   );
// }

export default App;
