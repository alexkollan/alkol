import React from 'react';
import {NavbarGroup, NavbarHeading} from '@blueprintjs/core';

const Title = (props) => {
    return(
        <NavbarGroup  align='left'>
            <NavbarHeading style={{color:'white', fontWeight:'800'}}>{props.title}</NavbarHeading>
        </NavbarGroup>
    )
}

export default Title;