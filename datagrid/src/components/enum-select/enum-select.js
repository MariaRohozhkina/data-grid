import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import "./enum-select.css";

const options = [
  { value: 'white', label: 'White color' },
  { value: 'black', label: 'Black color' },
  { value: 'yellow', label: 'Yellow color' }
]

const EnumSelect = (props) => {
    return (
    <Fragment>
        <div>
            <p>Choose color</p>
        </div>
        <Select isMulti options={options} onChange={props.selectValue}/>
    </Fragment>
    )
}

export default EnumSelect;