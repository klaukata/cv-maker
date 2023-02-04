import React from 'react';
import './App.css';
import Form from './components/Form'
import CV from './components/CV';

class App extends React.Component {
  render() {
    return (
      <>
        <div className='App-form'>
          <Form />
        </div>
        <CV />
      </>
    ); 
  }
  
}

export default App;
