import React from "react";

import "./search-string.css";
import { checkPropTypes } from 'prop-types';

const SearchString = (props) => {
     return (
         <div className='input-container' onChange={props.onDataSearch}>
             <input type="search" />
         </div>
     )
}

export default SearchString;