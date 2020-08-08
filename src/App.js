import React from 'react';
import Ninjas from './Ninjas';

function App() {

  const ninjas = [
    {name:'Nishant', age:'21', belt:'black', id:1},
    {name:'Amit', age:'20', belt:'red', id:2},
    {name:'Aditya', age:'20', belt:'brown', id:3}
  ];
  
  return (
    <div className="App">
      <h1>First React App</h1>
      <Ninjas ninjas = {ninjas} />
    </div>
  );
}

export default App;
