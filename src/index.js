import React from 'react';
import ReactDOM from 'react-dom';


//Create class component
class Name extends React.Component{

    constructor(){
        super();
        this.state = {name: 'Default'}
        this.submitName = this.submitName.bind(this);
    }


    submitName(event){
        //get value from input
        let nameInput = document.getElementById("inputText");
        this.setState({name: nameInput.value }, () => {nameInput.value =''});
        
    }

     render(){
         return (

            <div>
               <h1>Hello, {this.state.name}</h1>
               <input id="inputText" type="text"></input>
               <button onClick={this.submitName}>Submit</button>
           </div>

         )
     }

}

//Create class component
class Clock extends React.Component{

    //add state
    constructor(props){
        super(props);
        this.state = { 
            time: new Date().toLocaleTimeString()
      }
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }


    tick(){
        this.setState({time: new Date().toLocaleTimeString()})
    }
    


     render(){
         return (

            <div>
               <h1>Clock: </h1>
               <h2>It is {this.state.time}</h2>
           </div>

         )
     }

}


    ReactDOM.render(
        <div>
        <Name />
        <Clock />
        </div>,
       //<Clock time={new Date().toLocaleTimeString()}/>,
       document.getElementById('app')
   );
//}



//setInterval(tick, 1000);