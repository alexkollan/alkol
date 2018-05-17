import React, { Component } from 'react';
import {Navbar, Button, Card, InputGroup, Collapse, Menu, MenuItem, MenuDivider, Tag, Intent, TagInput} from '@blueprintjs/core';
import CriteriaBox from './CriteriaBox';



const type_data = [
  {value_id: 175, value_description: 'Garment'},
  {value_id: 191 , value_description: 'Nail Polish'},
  {value_id: 193, value_description: 'Cologne'},
  {value_id: 195, value_description: 'Gift Bags'},
  {value_id: 347, value_description: 'Accessories'},
  {value_id: 349 , value_description: 'Lim-Lom'},
  {value_id: 351, value_description: 'Toys'},
  {value_id: 353, value_description: 'Garbage'},
  {value_id: 355, value_description: 'Recycling'},
  {value_id: 369, value_description: 'Grading Mistakes'},
  {value_id: 373, value_description: 'Original'},
  {value_id: 387, value_description: 'Mix'},
  {value_id: 409, value_description: 'Wipers'},
  {value_id: 435, value_description: 'Jewelry'},
  {value_id: 493, value_description: 'Household Rummage'},
  {value_id: 375, value_description: 'Shoes'}
];

const categories_data= [
    {value_id: 21 , value_description: 'T-Shirts'},
    {value_id: 249 , value_description: 'Dresses'},
    {value_id: 289 , value_description: 'Pants'},
    {value_id: 313 , value_description: 'Skirts'},
    {value_id: 267 , value_description: 'Jackets'},
    {value_id: 467 , value_description: 'Shirts'},
    {value_id: 97 , value_description: 'Jeans'},
    {value_id: 33 , value_description: 'Cardigan'}
];

const gender_data = [
    {value_id: 3 , value_description: 'Man'},
    {value_id: 1 , value_description: 'Woman'},
    {value_id: 223 , value_description: 'Children'},
    {value_id: 383 , value_description: 'Adult'},
    {value_id: 387 , value_description: 'Mix'}
];

const season_data = [
    {value_id: 15 , value_description: 'Winter'},
    {value_id: 17 , value_description: 'Summer'},
    {value_id: 509 , value_description: 'Mid Season'},
    {value_id: 19 , value_description: 'All Season'},
    {value_id: 387 , value_description: 'Mix'}
];

const quality_data = [
    {value_id: 217 , value_description: 'Cream'},
    {value_id: 357 , value_description: 'A1 Lux'},
    {value_id: 341 , value_description: 'A export'},
    {value_id: 343 , value_description: 'B export'},
    {value_id: 26 , value_description: 'Wipers'},
    {value_id: 219 , value_description: 'Standard'},
    {value_id: 461 , value_description: 'Rejected Suggested Cream'},
    {value_id: 373 , value_description: 'Original'}
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
      typeTags: [],
      categoryTags:[],
      genderTags: [],
      seasonTags: [],
      qualityTags: [],
      filteredResults: []
    }
  }
  componentWillMount(){
    this.setState({
      filteredResults: availableGroups
    },()=>{console.log(this.state.filteredResults);
    })

  }  
  updateTags = (tags, criteria) =>{
    // console.log("updating!");
    // console.log(tags, criteria);

    switch (criteria) {
      case 15:
        this.setState({
          typeTags: [...this.state.typeTags, tags[tags.length -1]]
        },()=>{
          console.log(`New types State : `,this.state.typeTags);
        })
      break;
      case 5:
        this.setState({
          categoryTags: [...this.state.categoryTags, tags[tags.length -1]]
        },()=>{
          console.log(`New category State : `,this.state.categoryTags);
        })
      break;
      case 1:
        this.setState({
          genderTags: [...this.state.genderTags, tags[tags.length -1]]
        },()=>{
          console.log(`New gender State : `,this.state.genderTags);
        })
      break;
      case 3:
        this.setState({
          seasonTags: [...this.state.seasonTags, tags[tags.length -1]]
        },()=>{
          console.log(`New season State : `,this.state.seasonTags);
        })
      break;
      case 27:
        this.setState({
          qualityTags: [...this.state.qualityTags, tags[tags.length -1]]
        },()=>{
          console.log(`New quality State : `,this.state.qualityTags);
        })
      break;
    
      default:
        break;
    }

    // console.log(tags);
    
    // this.setState({
    //   allTags: [...this.state.allTags, tags[tags.length -1]]
    // },()=>{
    //   console.log(`State UPDATED to: `,this.state.allTags);
    // })
  }
  removeTags = (tags, criteria) =>{
    switch (criteria) {
      case 15:
        this.setState({
          typeTags: [...tags]
        },()=>{
          console.log(`New types State : `,this.state.typeTags);
        })
      break;
      case 5:
        this.setState({
          categoryTags: [...tags]
        },()=>{
          console.log(`New category State : `,this.state.categoryTags);
        })
      break;
      case 1:
        this.setState({
          genderTags: [...tags]
        },()=>{
          console.log(`New gender State : `,this.state.genderTags);
        })
      break;
      case 3:
        this.setState({
          seasonTags: [...tags]
        },()=>{
          console.log(`New season State : `,this.state.seasonTags);
        })
      break;
      case 27:
        this.setState({
          qualityTags: [...tags]
        },()=>{
          console.log(`New quality State : `,this.state.qualityTags);
        })
      break;
    
      default:
        break;
    }
  }

  filterData = () => {
    // let result = availableGroups.filter((item)=>{
    //   return 
    // })
    for(let item in availableGroups){
      console.log(availableGroups[item].filterable_data);
      for(let data in availableGroups[item].filterable_data){
        console.log(availableGroups[item].filterable_data[data]);
      }
    }
    console.log();
    
  }

  render(){
    return(
      <div style={{display:'flex'}}>
        <div>
          <CriteriaBox critId={15} takeTags={this.updateTags} removeTags={this.removeTags} name="Types" items={type_data}/>
          <CriteriaBox critId={5} takeTags={this.updateTags} removeTags={this.removeTags} name="Category" items={categories_data}/>
          <CriteriaBox critId={1} takeTags={this.updateTags} removeTags={this.removeTags} name="Gender" items={gender_data}/>
          <CriteriaBox critId={3} takeTags={this.updateTags} removeTags={this.removeTags} name="Season" items={season_data}/>
          <CriteriaBox critId={27} takeTags={this.updateTags} removeTags={this.removeTags} name="Quality" items={quality_data}/>
          </div>
        <div style={{marginLeft:'100px'}}>
          <Button onClick={this.filterData} intent="success" text="Filter that shiet"/>
        </div>
      </div>
    )
  }
}

export default Filter;