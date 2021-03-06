import React from 'react';
import {SvgIcon} from '@material-ui/core';

function AddressIcon(props) {
    return (
      <SvgIcon viewBox="0 0 64 64" {...props}>
        <path d="M38.1 46H52l8 16H4l8-16h13.9"
        stroke-width="2" stroke-miterlimit="10" stroke="#ffffff" fill="none" data-name="layer2"
        stroke-linejoin="round" stroke-linecap="round"></path>
        <path stroke-width="2" stroke-miterlimit="10" stroke="#ffffff"
        fill="none" d="M32 2a18.1 18.1 0 0 0-18.1 18.1C13.9 36.4 32 52.4 32 52.4s18.1-16 18.1-32.3A18.1 18.1 0 0 0 32 2z"
        data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path>
        <ellipse stroke-width="2" stroke-miterlimit="10" stroke="#ffffff"
        fill="none" ry="6" rx="6" cy="20" cx="32" data-name="layer1" stroke-linejoin="round"
        stroke-linecap="round"></ellipse>
      </SvgIcon>
    );
}

export default AddressIcon;