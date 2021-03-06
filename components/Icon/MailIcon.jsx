import React from 'react';
import {SvgIcon} from '@material-ui/core';

function MailIcon(props) {
    return (
      <SvgIcon viewBox="0 0 64 64" {...props}>
        <path d="M54 33.6V2H10v31.6M18 12h10m-4 8h22m-28 8h28"
        stroke-width="2" stroke-miterlimit="10" stroke="#ffffff" fill="none" data-name="layer2"
        stroke-linejoin="round" stroke-linecap="round"></path>
        <path d="M42.08 41.944L62 28M2 28l19.92 13.944M2 62l20.929-21.071c3.905-3.9 14.237-3.9 18.143 0L62 62"
        stroke-width="2" stroke-miterlimit="10" stroke="#ffffff" fill="none" data-name="layer1"
        stroke-linejoin="round" stroke-linecap="round"></path>
        <path d="M54 21.063L62 28v34H2V28l8-6.937" stroke-width="2" stroke-miterlimit="10"
        stroke="#ffffff" fill="none" data-name="layer1" stroke-linejoin="round"
        stroke-linecap="round"></path>
      </SvgIcon>
    );
}

export default MailIcon;