import React from 'react'

class About extends React.Component{

    //Life Cycle Methods

    //it is called first
    constructor(){
        super();
        this.state= {
          name:'tushar',
          age:26  
        }
        console.warn("constructor");
    }

    //it is called when component is build
    componentDidMount(){
        console.warn("did mount");
    }
    componentDidUpdate(){
        console.warn("did update");
    }

    render(){
        console.warn("render");
        return(
            <div>
                <h1>About Us Component</h1>
                <h2>{this.state.name}</h2>
                <h2>{this.state.age}</h2>
                <button onClick={ () => {
                    this.setState({name:'Tushar Mittal'})
                }}>
                    Update State 
                </button>
            </div>
        )
    }
}

export default About