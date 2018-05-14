import React, { Component } from 'react';
import { Card, Button } from "@blueprintjs/core";
// import MediaQuery from 'react-responsive';
import timeline from '../../../data/timeline.json';
import CVmainelement from './CVmainelement'; 
import data from '../../../data/data.json';
import CVskillelement from './CVskillselement';
import CVlanguageelement from './CVlanguageelement';


let jobItems = [];
let eduItems = [];
let pubItems = [];
let skills = data.skills;
let language = data.languages;
let awardItems = data.awards;

class RightPanel extends Component{
  constructor(props){
    super(props);
    this.state={
      show: false,
      jobs: jobItems
    }
  }
  componentWillMount(){
    console.log(awardItems);

    Object.keys(timeline).map((item, key)=>{
      
        let tag = timeline[item].characteristic;
        if(tag[2] ==="cv"){
          if (tag[3] === "job") {
            if (tag[1] === "it") {
              jobItems.push(timeline[item]);
            }
          }
        else if(tag[3] === "publications"){
          pubItems.push(timeline[item]);
        }else if(tag[3] === "edu"){
          eduItems.push(timeline[item]);
        }
    }})
  // console.log(jobItems);
  }

  showDesc = () => {
    return true;
  }

  render(){
      return(
          <div className="rightPanel">
            <div className="rightPanelTopContainer">
                
                <CVlanguageelement  lang={language}/>
                
                <CVskillelement skills={skills}/>


            </div>
          
            <div className="work">
              {jobItems.map((item, key)=>{
                return(
                  <CVmainelement key={key} year={jobItems[key].year} title={jobItems[key].title} description={jobItems[key].long_description}/>
                )
              })}
            </div>
            <div className="publications">
              {pubItems.map((item, key)=>{

                return <CVmainelement key={key} year={pubItems[key].year} title={pubItems[key].title} description={pubItems[key].description}/>
              })}
            </div>
            <div className="education">
              {eduItems.map((item, key)=>{

                return <CVmainelement key={key} year={eduItems[key].year} title={eduItems[key].title} description={eduItems[key].description}/>
              })}
            </div>
            <div className="awards">
            {Object.keys(awardItems).map((item, key)=>{
                console.log(item);
                return <CVmainelement key={key} year={awardItems[item].year} title={awardItems[item].title} description={awardItems[item].description}/>
              })}
            </div>
          </div>
      )
  }
}

export default RightPanel;