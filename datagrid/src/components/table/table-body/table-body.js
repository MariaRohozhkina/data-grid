import React, { Fragment } from "react";

import "./table-body.css";

const TableBody = (props) => {

    return (
    <div>
        <table>
        <thead>
            <tr className='head'>
              <th className='head-order'>№</th>
              <th onClick={props.onSort.bind(null, 'name')} className='head-name'>Name
              {props.sortField === 'name' ? <small>{props.sort}</small> : <small>  ↑↓ </small>}</th>
              <th className='hun'>Activity</th>
              <th className='head-job'>Job Type</th>
              <th onClick={props.onSort.bind(null, 'number')} className='hun'>Score
              {props.sortField === 'number' ? <small>{props.sort}</small> : <small>  ↑↓ </small>}</th>
              <th className='head-country'>Country</th>
              <th className='head-city'>City</th>
              <th className='head-symbol'>Currency Symbol</th>
            </tr>
          </thead>
            <tbody>
                    {
                        props.data.map(person => (
                            <tr key={person.id}>
                                <td className='order'>{person.id}</td>
                                <td className='name'>{person.name}</td>
                                <td className='activity'>{person.activity}</td>
                                <td className='job'>{person.job}</td>
                                <td className='num'>{person.number}</td>
                                <td className='country'>{person.country}</td>
                                <td className='city'>{person.city}</td>
                                <td className='symbol'>{person.currency}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
    )
}

export default TableBody;