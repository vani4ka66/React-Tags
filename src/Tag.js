import React from "react";
import App from "./App";

export default class Tag extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return<div className="tags">
                <div className="tag">#{this.props.tags[0]}</div>
                <div className="tag">#{this.props.tags[1]}</div>
                <div className="tag">#{this.props.tags[2]}</div>
                <div className="tag">#{this.props.tags[3]}</div>
        </div>
     
    }
}