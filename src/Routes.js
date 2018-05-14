import React, { Component } from 'react';
import Route from 'react-router-dom/Route';
import Home from './Components/Body/Home/Home';
import CV from './Components/Body/CV/CV';
import Portfolio from './Components/Body/Portfolio/Portfolio';
import Stuff from './Components/Body/Stuff/Stuff';
import Contact from './Components/Body/Contact/Contact';
import Filter from './Components/tests/Filter'


class Routes extends Component{
    render(){
        return(
            <div>
            <Route path='/' exact strict render={()=>{
                return(<Home/>)
              }}/>
              <Route path='/CV' exact strict render={()=>{
                return(<CV/>)
              }}/>
              <Route path='/Portfolio' exact strict render={()=>{
                return(<Portfolio/>)
              }}/>
              <Route path='/Stuff' exact strict render={()=>{
                return(<Stuff/>)
              }}/>
              <Route path='/Contact' exact strict render={()=>{
                return(<Contact/>)
              }}/>
              <Route path='/mou' exact strict render={()=>{
                return(<Filter/>)
              }}/>
              </div>
        )
    }
}

export default Routes;