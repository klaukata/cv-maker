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

  onAddDiv = (section) => {
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
      childrenExp.push(<CVSection isExp={true} num={i} key={i}/>);
    };
    for (var j = 1; j < this.state.numOfAddedEduDivs + 1; j += 1) {
      childrenEdu.push(<CVSection isExp={false} num={j} key={j}/>);
    };

    return (
      <>
        <Form onAddChild={this.onAddDiv} num={this.state.numOfAddedExpDivs} />
        <CV onAddChild={this.onAddDiv}>
          {childrenExp}
          {childrenEdu}
        </CV>
      </>
    ); 
  }
  
}

export default App;
