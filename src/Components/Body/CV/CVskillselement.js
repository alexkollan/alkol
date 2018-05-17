import React, { Component } from 'react';
import { Card, Button } from "@blueprintjs/core";

class CVskillelement extends Component{
  constructor(props){
    super(props);

  }

  componentWillMount(){
    // console.log(this.props.skills);
  }

  render(){
    return(
      <Card className="skills" style={{marginBottom:'5px'}}>
      <h4 style={{color: "#E5E1DC"}}>&emsp;&nbsp;Skills</h4>
        <ul>
            {this.props.skills.map((skill, key)=>{
                return <li key={key} style={{/*textAlign: 'center'*/}}>{this.props.skills[key]}</li>
            })}
        </ul>
      </Card>
    )
  }
}
export default CVskillelement;