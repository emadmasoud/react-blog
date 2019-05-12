import React from 'react'


import classes from './Cockpit.css'

const cockpit = (props)=> {
    let btnClass = ' '
    
    if(props.showPerson){
        btnClass = classes.red
    }

    const assignedlasses = []
    if(props.persons.length <= 2){
        assignedlasses.push(classes.red)
    }
    if(props.persons.length <=1){
        assignedlasses.push(classes.bold)
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedlasses.join(' ')}>This is a React App</p>
            <button 
                className={btnClass} 
                onClick={props.clicked}>Switch name</button>
        </div>
    )
}

export default cockpit