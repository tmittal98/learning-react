import React from 'react'

class Service extends React.Component{

    constructor(){
        super();
        console.warn("service constructor")
        //here it will not execute 
        //as constructor is loaded even before component is loaded 
        console.warn(this.props)
    }

    componentDidMount(){
        console.warn(this.props.name)
    }

    componentDidUpdate(){
        console.warn("service did update");
    }
    render(){
        return(
            <div className="service">
                <h1>Service Component</h1>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Service
