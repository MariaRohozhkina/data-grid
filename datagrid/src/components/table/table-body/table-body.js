import React, { Fragment } from "react";

import "./table-body.css";

const TableBody = (props) => {

    return (
    <div>
        <table className='body'>
        <thead>
            <tr className='heads'>
              <th>№</th>
              <th onClick={props.onSort.bind(null, 'name')}>Name
              {props.sortField === 'name' ? <small>{props.sort}</small> : <small>  ↑↓ </small>}</th>
              <th>Sex</th>
              <th>Job Type</th>
              <th onClick={props.onSort.bind(null, 'number')}>Score
              {props.sortField === 'number' ? <small>{props.sort}</small> : <small>  ↑↓ </small>}</th>
              <th>Country</th>
              <th>City</th>
              <th>Currency Symbol</th>
            </tr>
          </thead>
            <tbody>
                    {
                        props.data.map(person => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                                <td className='sex'>{person.sex}</td>
                                <td className='job'>{person.job}</td>
                                <td className='num'>{person.number}</td>
                                <td>{person.country}</td>
                                <td>{person.city}</td>
                                <td>{person.currency}</td>
                            </tr>
                        ))
                    }
            </tbody>
        </table>
    </div>
    )
}

export default TableBody;