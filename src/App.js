import React from 'react';
import './App.css';
import Form from './components/Form'
import CV from './components/CV';

import CVSection from './components/CVAddedSection';

class App extends React.Component {
  state = {
    numOfAddedExpDivs: 0
  }

  onAddExpDiv = () => {
        this.setState({
          numOfAddedExpDivs: this.state.numOfAddedExpDivs + 1
        });
  }


  render() {
    const children = [];
    
    for (var i = 0; i < this.state.numOfAddedExpDivs; i += 1) {
      children.push(<CVSection />);
    };
    
    return (
      <>
        <Form onAddChild={this.onAddExpDiv}>
        </Form>
        <CV onAddChild={this.onAddExpDiv}>
          {children}
        </CV>
      </>
    ); 
  }
  
}

export default App;
