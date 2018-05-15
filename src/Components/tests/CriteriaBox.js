import React, { Component } from 'react';
import {Navbar, Button, Card, InputGroup, Collapse, Menu, MenuItem, MenuDivider, Tag, Intent, TagInput} from '@blueprintjs/core';


class CriteriaBox extends Component{
    constructor(props){
      super(props);
      this.state={
        isOpen: false,
        tags: [],
        tagNames: []
      }
    }
    componentWillMount(){

      this.props.items.map((obj, key)=>{
        // console.log(obj.value_description);
        // console.log(obj.value_id);      
      })
    }

    handleClick = () =>{
      this.setState(prevState => {
        return {isOpen: !prevState.isOpen}
      })
    }
    selectItem = (id, description) =>{
      this.setState({
        tags: [...this.state.tags, [id,description]],
        tagNames: [...this.state.tagNames, description]

      },()=>this.props.takeTags(this.state.tags))
    }
    
    removeTag = (tagName) =>{
      for(let item in this.state.tags){
        let index = this.state.tags[item].indexOf(tagName);
        if(index > -1){
          this.setState((prevState)=>{
            prevState.tags.splice(item, 1);
            prevState.tagNames.splice(this.state.tagNames.indexOf(tagName), 1);
            return{
              tags: [...prevState.tags],
              tagNames: [...prevState.tagNames]
            }
          })
          this.props.removeTags(tagName)
        }
      }
    }

    render(){
      return(
        <div>
          <Card style={{width: '500px'}}>

            <h5>{this.props.name}</h5>
            <TagInput onRemove={this.removeTag}  values={this.state.tagNames} rightElement={<Button onClick={this.handleClick} minimal text="See" rightIcon={this.state.isOpen ? "chevron-up" :"chevron-down"}/>}/>
            <Collapse isOpen={this.state.isOpen}>
              <Menu>
                {this.props.items.map((item, key)=>{
                  // console.log(obj.value_description);
                  // console.log(obj.value_id);
                  return <MenuItem key={key} onClick={()=>this.selectItem(this.props.items[key].value_id, this.props.items[key].value_description)} text={this.props.items[key].value_description}/>;
                })}
              </Menu>
            </Collapse>
            
          </Card>

        </div>
      )
    }
  }
  
  export default CriteriaBox;