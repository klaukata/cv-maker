import React from 'react';
import './App.css';
import Form from './components/Form'


class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   personalDetails: {
    //     name: '',
    //     position: '',
    //     phoneNumber: '',
    //     mail: '',
    //     location: '',
    //     description: ''
    //   },
    //   experience: [],
    //   education: []
    // }
    // this.insertTxt = this.insertTxt.bind(this)
  }
  // insertTxt(el) {
  //   let text = el.value;
  //   document.getElementById('ass').textContent = text; 
  // }
  render() {
    return (
      <>
        <div className='App-form'>
          <input type="text" onInput={(el) => this.insertTxt(el.target)}/>

          
          <Form />
          
        </div>
        <div className='App-cv'>
          <p id='ass'></p>
        </div>
      </>
    ); 
  }
  
}

export default App;
