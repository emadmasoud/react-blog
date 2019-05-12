import React, { Component } from 'react';
import Classes from '../containers/App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js inside constructor]', props)
    this.state = {
      persons:[
        {id:'dsfdfgf', name:'Mohiuddins', age:'29'},
        {id:'sdfg', name:'Rashed', age:'29'},
        {id:'sdfgsd', name:'Roman', age:'26'},
        {id:'gdsfgfd', name:'Mehedi', age:'30'}
      ],
      othersValue: 'This is other value',
      showPerson: false
    }
  }
  componentWillMount(){
    console.log('[app.js inside component will mount]')
  }
  componentDidMount(){
    console.log('[app.js] inside componet did mount()')
  }
    // state = {
    //   persons:[
    //     {id:'dsfdfgf', name:'Mohiuddins', age:'29'},
    //     {id:'sdfg', name:'Rashed', age:'29'},
    //     {id:'sdfgsd', name:'Roman', age:'26'},
    //     {id:'gdsfgfd', name:'Mehedi', age:'30'}
    //   ],
    //   othersValue: 'This is other value',
    //   showPerson: false
    // }
    nameChangeHandler =(event, id)=>{
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id
      })
      const person = { 
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value
      const persons = [...this.state.persons]
      persons[personIndex] = person
      this.setState({
        persons: persons
      })
    }
    togglePersonHandler =()=>{
      const doesShow = this.state.showPerson
      this.setState({showPerson: !doesShow})
    }
    deletePersonHandler = (personIndex)=>{
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1)
      this.setState({
        persons:persons
      })
    }
  render() {
    console.log('[app.js] inside render() ')
    let persons = null
    
    if(this.state.showPerson){
      persons = (
        <div>
          <Persons
            persons={this.state.persons} 
            changed= {this.nameChangeHandler}
            clicked={this.deletePersonHandler}
          />
        </div>
      );
    }

    return (
        <div className={Classes.App}>
          <Cockpit
          appTitle={this.props.title}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
            showPerson={this.state.showPerson}

          />
          {persons}
        </div>
    );
  }
}

export default App;
