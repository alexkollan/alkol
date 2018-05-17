import React, { Component } from 'react';
import { Card, Button } from "@blueprintjs/core";

class CVlanguageelement extends Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){

  }

  render(){
    return(
      <Card  className="languages" style={{marginBottom:'5px'}}>
        <h4 style={{color: "#E5E1DC"}}>&emsp;&nbsp;Languages</h4>
        <ul>
            {Object.keys(this.props.lang).map((lang, key)=>{
                return <li key={key} style={{/*textAlign: 'center'*/}}>{Object.keys(this.props.lang)[key]}<br />Level: {this.props.lang[lang].level}</li>
            })}
        </ul>
      </Card>
    )
  }
}
export default CVlanguageelement;