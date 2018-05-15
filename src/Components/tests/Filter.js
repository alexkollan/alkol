import React, { Component } from 'react';
import {Navbar, Button, Card, InputGroup, Collapse, Menu, MenuItem, MenuDivider, Tag, Intent, TagInput} from '@blueprintjs/core';
import CriteriaBox from './CriteriaBox';



const type_data = [
    {value_id: 1 , value_description: 'Accessories'},
    {value_id: 2 , value_description: 'Garment'},
    {value_id: 3 , value_description: 'Houseware'},
    {value_id: 4 , value_description: 'Shoes'}
];

const categories_data= [
    {value_id: 5 , value_description: 'T-Shirts'},
    {value_id: 6 , value_description: 'Dresses'},
    {value_id: 7 , value_description: 'Pants'},
    {value_id: 8 , value_description: 'Skirts'},
    {value_id: 9 , value_description: 'Jackets'},
    {value_id: 10 , value_description: 'Shirts'},
    {value_id: 11 , value_description: 'Jeans'},
    {value_id: 12 , value_description: 'Cardigans'}
];

const gender_data = [
    {value_id: 13 , value_description: 'Men'},
    {value_id: 14 , value_description: 'Ladies'},
    {value_id: 15 , value_description: 'Kids'},
    {value_id: 16 , value_description: 'Adults'}
];

const season_data = [
    {value_id: 17 , value_description: 'Winter'},
    {value_id: 18 , value_description: 'Summer'},
    {value_id: 19 , value_description: 'Mid Season'},
    {value_id: 20 , value_description: 'All Season'},
    {value_id: 21 , value_description: 'Mix'}
];

const quality_data = [
    {value_id: 22 , value_description: 'Cream'},
    {value_id: 23 , value_description: 'A1 Lux'},
    {value_id: 24 , value_description: 'A export'},
    {value_id: 25 , value_description: 'B export'},
    {value_id: 26 , value_description: 'Wipers'},
    {value_id: 27 , value_description: 'Standard'}
];


const availableGroups = [
    {group_id: 38, group_description: 'GARMENT AWC', filterable_data: [{attribute_id: 15, attribute_values: [2]}]},
    
    {group_id: 2, group_description: 'DRESS AWC' , filterable_data: [{attribute_id: 15, attribute_values: [2]}, {attribute_id: 3, attribute_values: [17]},
    {attribute_id: 5, attribute_values: [6]}, {attribute_id: 27, attribute_values: [22]}, {attribute_id: 1, attribute_values: [16]}] },
     
    {group_id: 3, group_description: 'SHOES LSS' , filterable_data: [{attribute_id: 15, attribute_values: [4]}]},
    
    {group_id: 1, group_description: "Anoraks - Body Warmer - Jeans Jackets - Light Zipper Anoraks - Raincoats AWO",
        filterable_data: [
            { attribute_id: 15, attribute_values: [175]},
            {attribute_id: 5, attribute_values: [541]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [373]}]},
    {group_id: 1351, group_description: "Shirts L/S MW(FR)",
        filterable_data: [
            {attribute_id: 15, attribute_values: [175]},
            {attribute_id: 5,  attribute_values: [445]},
            {attribute_id: 1, attribute_values: [3]},
            {attribute_id: 3, attribute_values: [15]},
            {attribute_id: 27, attribute_values: [531]}]},
    {group_id: 1575,group_description: "Sweatshirts - T-Shirts - Fleece AWRC",
        filterable_data: [
            {attribute_id: 15, attribute_values: [175]},
            {attribute_id: 5,attribute_values: [559]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 577, group_description: "Dresses - Skirts - Carnival - Christmas - Asian LWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [555]},
            {attribute_id: 1,attribute_values: [1]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27, attribute_values: [ 461]}]},
    {group_id: 579,group_description: "Pants AWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [289]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 1563,group_description: "Shirts - Blouses S/S & L/S AMRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [301]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [387]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 2575,group_description: "Sweatshirts - T-Shirts - Fleece AWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [559]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 1577,group_description: "Dresses - Skirts - Carnival - Christmas - Asian LWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [555]},
            {attribute_id: 1, attribute_values: [1]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 1579,group_description: "Pants AWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [289]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 1583,group_description: "Shirts - Blouses S/S & L/S AMRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5, attribute_values: [301]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [387]},
            {attribute_id: 27,attribute_values: [461]}]},
    {group_id: 1585,
        group_description: "Bathrobes - Robes - Capri - Shorts -  Nightwear - Sport Pants - Leggings AWRC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [553]},
            {attribute_id: 1,attribute_values: [383]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [461]
            }
        ]
    },{group_id: 2211,group_description: "Leather Jackets imitation MWC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [489]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2212,
        group_description: "Light zipper anorak L(M)C",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [281]},
            {attribute_id: 1,attribute_values: [1]},
            {attribute_id: 3,attribute_values: [509]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2213,group_description: "Light zipper anorak M(M)C",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175 ]},
            {attribute_id: 5,attribute_values: [281]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3,attribute_values: [509]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2214,group_description: "Pants cotton LSC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            { attribute_id: 5,attribute_values: [437]},
            {attribute_id: 1,attribute_values: [1]},
            {attribute_id: 3,attribute_values: [17]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2215,group_description: "Pants cotton LWC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [437]},
            {attribute_id: 1,attribute_values: [1]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2216,group_description: "Pants cotton MSC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [437]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3,attribute_values: [17]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2217,group_description: "Pants cotton MWC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [437]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2218, group_description: "Pants tegral LSC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [529]},
            {attribute_id: 1,attribute_values: [1]},
            {attribute_id: 3,attribute_values: [17]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2219,group_description: "Pants tegral LWC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5, attribute_values: [529]},
            {attribute_id: 1,attribute_values: [ 1]},
            {attribute_id: 3,attribute_values: [15]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2220,group_description: "Pants tegral MSC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [529]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3,attribute_values: [17]},
            {attribute_id: 27,attribute_values: [217]}]},
    {group_id: 2221,group_description: "Pants tegral MWC",
        filterable_data: [
            {attribute_id: 15,attribute_values: [175]},
            {attribute_id: 5,attribute_values: [ 529]},
            {attribute_id: 1,attribute_values: [3]},
            {attribute_id: 3, attribute_values: [15]},
            {attribute_id: 27,attribute_values: [217]}]}
];




class Filter extends Component{
  constructor(props){
    super(props);
    this.state={
      isOpen: false,
      tagNames: [],
      tagIds: [],
      allTags: [],
      filteredResults: []
    }
  }
  componentWillMount(){
    let obj = {a: 1, b:2, c:3, d:4, e:5};
    let arr = ['i','ii','iii','iv','v'];

    for(let i in obj){
      // console.log(obj[i]);
    }

  }  
  updateTags = (tags) =>{
    console.log("updating!");
    // console.log(tags);
    
    this.setState({
      allTags: [...this.state.allTags, tags[tags.length -1]]
    },()=>{
      console.log(`State UPDATED to: `,this.state.allTags);
    })
  }
  removeTags = (tag) =>{
    // console.log(tag);
    for(let item in this.state.allTags){
      let index = this.state.allTags[item].indexOf(tag);
      if(index > -1){
        this.setState((prevState)=>{
          prevState.allTags.splice(item, 1);
          // prevState.tagNames.splice(this.state.tagNames.indexOf(tagName), 1);
          return{
            allTags: [...prevState.allTags]
            // tagNames: [...prevState.tagNames]
          }
        },()=>console.log(`New master state: `,this.state.allTags))
        // this.props.removeTags(this.state.tags[item])
      }
    }
  }

  render(){
    return(
      <div style={{display:'flex'}}>
        <div>
          <CriteriaBox takeTags={this.updateTags} removeTags={this.removeTags} name="Types" items={type_data}/>
          <CriteriaBox takeTags={this.updateTags} removeTags={this.removeTags} name="Category" items={categories_data}/>
          <CriteriaBox takeTags={this.updateTags} removeTags={this.removeTags} name="Gender" items={gender_data}/>
          <CriteriaBox takeTags={this.updateTags} removeTags={this.removeTags} name="Season" items={season_data}/>
          <CriteriaBox takeTags={this.updateTags} removeTags={this.removeTags} name="Quality" items={quality_data}/>
          </div>
        <div style={{marginLeft:'100px'}}>
          All selected filters: {this.state.allTags.map((item,key)=>{
                                  return <h5 key={key}>{this.state.allTags[key][1]}</h5>
                                })}
        </div>
      </div>
    )
  }
}

export default Filter;