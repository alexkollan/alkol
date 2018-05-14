import React, { Component } from 'react';
import { Button, Card, Elevation, ButtonGroup, Intent, Popover, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import Element from './Element';
import timeline from '../../../data/timeline.json';
import MediaQuery from 'react-responsive';
import CVlayout from './CVlayout'

class CV extends Component {
    constructor(props){
      super(props);
      this.state={
        cards: ''
      }
    }

    componentWillMount() {
      // this.renderAll();
      this.displayCV();
    }

    renderAll = () => {
      let allEvents = [];
      Object.keys(timeline).map((item, key)=>{
       
       
        switch (timeline[item].characteristic[0]) {
          case 'education':
            allEvents.push(<Element color='#6B291A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
            case 'hobbies':
            allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
            case 'life':
            allEvents.push(<Element color='#0E5A8A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
            case 'work':
            allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;  
            case 'athletics':
            allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
            case 'creative':
            allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;  
            case 'it':
            allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;   
            case 'other':
            allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
            case 'school':
            allEvents.push(<Element color='#6B291A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;     
          default:
            allEvents.push(<Element key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
            break;
        }
      return true;
      })

      this.setState({
        cards: allEvents
      }) 
    }

    sort = (characteristic, menu) =>{
      let allEvents = [];
      Object.keys(timeline).map((item, key)=>{
        for (let i = 0; i < timeline[item].characteristic.length; i++) {
          if (timeline[item].characteristic[i] === characteristic) {
            switch (timeline[item].characteristic[menu]) {
              case 'education':
                allEvents.push(<Element color='#6B291A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'hobbies':
                allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'life':
                allEvents.push(<Element color='#0E5A8A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'work':
                allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;  
                case 'athletics':
                allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'creative':
                allEvents.push(<Element color='#008075' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;  
                case 'it':
                allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;   
                case 'other':
                allEvents.push(<Element color='#A66321' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'higher':
                allEvents.push(<Element color='#6B291A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
                case 'school':
                allEvents.push(<Element color='#6B291A' key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;     
              default:
                allEvents.push(<Element key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description}/>)
                break;
            }
            
          }
          
        } 
        return true;
      })
      this.setState({
        cards: allEvents
      }) 
      console.log('Sorting Cards...');
      
    } 
    displayCV = () =>{
      this.setState({
        cards: <CVlayout/>
      })
    }
    taketimeline = () =>{
      console.log(this.state.cards);
    }

    render() {
      return (
        <div>
          <h5>{this.state.mytimeline}</h5>
          <MediaQuery minWidth={768}>
            <ButtonGroup style={{marginTop: '20px'}}>
              <Button active icon="sort" rightIcon="caret-right" text="Sort by:" />
              <Button onClick={this.renderAll} icon="timeline-events" text="Timeline" />
              <Button intent={Intent.DANGER}onClick={() => this.sort('education', 0)} icon="book" text="Education" />
              <Popover content={
                <Menu intent={Intent.DANGER}>
                  <MenuItem onClick={()=> this.sort('school', 1)} intent={Intent.DANGER} text={'School'} icon='edit' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('higher', 1)} intent={Intent.DANGER} text={'Higher Education'} icon='book' />
                </Menu> 
              }>
              <Button intent={Intent.DANGER}  icon="caret-down"/>
              </Popover>
              <Button intent={Intent.PRIMARY} onClick={() => this.sort('life', 0)} icon="pulse" text="Life Events" />
              <Button intent={Intent.WARNING} onClick={() => this.sort('work', 0)}  icon="briefcase" text="Work" />
              <Popover content={
                <Menu intent={Intent.SUCCESS}>
                  <MenuItem onClick={()=> this.sort('it', 1)} intent={Intent.WARNING} text={'IT Related'} icon='code' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('other', 1)} intent={Intent.WARNING} text={'Other'} icon='office' />
                </Menu> 
              }>
              <Button intent={Intent.WARNING}  icon="caret-down"/>
              </Popover>
              
              <Button intent={Intent.SUCCESS} onClick={() => this.sort('hobbies', 0)} icon="lightbulb" text="Hobbies" />
              <Popover content={
                <Menu intent={Intent.SUCCESS}>
                  <MenuItem onClick={()=> this.sort('athletics', 1)} intent={Intent.SUCCESS} text={'Atheltics'} icon='walk' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('creative', 1)} intent={Intent.SUCCESS} text={'Creative'} icon='predictive-analysis' />
                </Menu> 
              }>
                <Button intent={Intent.SUCCESS}  icon="caret-down"/>
              </Popover>
              
              <Button onClick={this.taketimeline} text='CV'  onClick={this.displayCV}/>
            </ButtonGroup>
            <Card  className="cvCardContainer" interactive={false} elevation={Elevation.ONE}>
              {this.state.cards}
            </Card>
          </MediaQuery>


          <MediaQuery maxWidth={767}>
          <Button active fill icon="sort" style={{marginTop: '-20px', fontSize: '0.9em', borderRadius: '0px'}} rightIcon="caret-right" text="Sort by:" />
            <ButtonGroup fill style={{marginTop: '0px', borderRadius: '0px'}}>
              
              <Button onClick={this.renderAll} icon="timeline-events"/>
              <Button intent={Intent.DANGER}onClick={() => this.sort('education', 0)} icon="book" />
              <Popover content={
                <Menu intent={Intent.DANGER}>
                  <MenuItem onClick={()=> this.sort('school', 1)} intent={Intent.DANGER} text={'School'} icon='edit' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('higher', 1)} intent={Intent.DANGER} text={'Higher Education'} icon='book' />
                </Menu> }>
              <Button intent={Intent.DANGER}  icon="caret-down"/>
              </Popover>
              <Button intent={Intent.PRIMARY} onClick={() => this.sort('life', 0)} icon="pulse" />
              <Button intent={Intent.WARNING} onClick={() => this.sort('work', 0)}  icon="briefcase" />
              <Popover content={
                <Menu intent={Intent.SUCCESS}>
                  <MenuItem onClick={()=> this.sort('it', 1)} intent={Intent.WARNING} text={'IT Related'} icon='code' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('other', 1)} intent={Intent.WARNING} text={'Other'} icon='office' />
                </Menu> 
              }>
              <Button intent={Intent.WARNING}  icon="caret-down"/>
              </Popover>
              
              <Button intent={Intent.SUCCESS} onClick={() => this.sort('hobbies', 0)} icon="lightbulb" />
              <Popover content={
                <Menu intent={Intent.SUCCESS}>
                  <MenuItem onClick={()=> this.sort('athletics', 1)} intent={Intent.SUCCESS} text={'Atheltics'} icon='walk' />
                  <MenuDivider />
                  <MenuItem onClick={()=> this.sort('creative', 1)} intent={Intent.SUCCESS} text={'Creative'} icon='predictive-analysis' />
                </Menu> 
              }>
                <Button intent={Intent.SUCCESS}  icon="caret-down"/>
              </Popover>
              
              <Button onClick={this.taketimeline} icon='code' />
            </ButtonGroup>
            <Card  className="cvCardContainer" interactive={false} elevation={Elevation.ONE}>
              {this.state.cards}
            </Card>
          </MediaQuery>
        </div>
      );
    }
  }
  
  export default CV;