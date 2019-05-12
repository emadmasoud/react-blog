import React, {Component} from 'react'

import Classes from './Person.css'

class Person extends Component {
    render(){

        return (
            <div className={Classes.person}> 
                <p onClick={this.props.click}
                    
                >Hellow i am {this.props.name} and i am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </div>
        ) 
    }
}
    

export default Person
