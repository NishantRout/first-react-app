import React,{ Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state={
    ninjas : [
      {name:'Nishant', age:'21', belt:'black', id:1},
      {name:'Amit', age:'20', belt:'red', id:2},
      {name:'Aditya', age:'20', belt:'brown', id:3}
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>First React App</h1>
        <Ninjas ninjas = {this.state.ninjas} />
      </div>
    );
  }
}

export default App;
