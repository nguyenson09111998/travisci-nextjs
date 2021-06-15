import React from 'react';
import {SvgIcon} from '@material-ui/core';

function ClockIcon(props) {
    return (
      <SvgIcon viewBox="0 0 64 64" {...props}>
        <circle data-name="layer2"
        cx="32" cy="32" r="30" fill="none" stroke="#ffffff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"></circle>
        <path data-name="layer1" fill="none" stroke="#ffffff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width="2" d="M32 7v5m0 40v5M7 32h5m40 0h5"
        stroke-linejoin="round"></path>
        <circle data-name="layer1" cx="32" cy="33" r="2" fill="none" stroke="#ffffff"
        stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke-linejoin="round"></circle>
        <path data-name="layer1" fill="none" stroke="#ffffff" stroke-linecap="round"
        stroke-miterlimit="10" stroke-width="2" d="M30.084 32.432L21 25m27-7L33.822 32.178"
        stroke-linejoin="round"></path>
      </SvgIcon>
    );
}

export default ClockIcon;