import React from 'react';
import {NavbarGroup, NavbarHeading} from '@blueprintjs/core';

const Title = (props) => {
    return(
        <NavbarGroup  align='left'>
            <NavbarHeading >{props.title}</NavbarHeading>
        </NavbarGroup>
    )
}

export default Title;