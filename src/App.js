import React from 'react';
import './App.css';
import Form from './components/Form'
import CV from './components/CV';
import CVSection from './components/CVAddedSection';

class App extends React.Component {
  state = {
    numOfAddedExpDivs: 0,
    numOfAddedEduDivs: 0
  }

  onAddExpDiv = (section) => {
    if (section === 'workExperience') {
      this.setState({
        numOfAddedExpDivs: this.state.numOfAddedExpDivs + 1
      });
    } else if (section === 'education') {
      this.setState({
        numOfAddedEduDivs: this.state.numOfAddedEduDivs + 1
      });
    }
        
  }


  render() {
    const childrenExp = [];
    const childrenEdu = [];

    for (var i = 1; i < this.state.numOfAddedExpDivs + 1; i += 1) {
      childrenExp.push(<CVSection num={i} key={i}/>);
    };
    for (var i = 1; i < this.state.numOfAddedEduDivs + 1; i += 1) {
      childrenEdu.push(<CVSection num={i} key={i}/>);
    };

    return (
      <>
        <Form onAddChild={this.onAddExpDiv} num={this.state.numOfAddedExpDivs} />
        <CV onAddChild={this.onAddExpDiv}>
          {childrenExp}
          {childrenEdu}
        </CV>
      </>
    ); 
  }
  
}

export default App;
