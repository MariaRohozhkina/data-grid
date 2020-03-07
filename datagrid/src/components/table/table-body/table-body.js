import React, { Fragment } from "react";
import { people } from './info';

import "./table-body.css";

const TableBody = () => {

    console.log(people);

    return (
    <div>
        <table className='body'>
        <thead>
            <tr className='heads'>
              <th>№</th>
              <th>Name</th>
              <th>Sex</th>
              <th>Job Type</th>
              <th>Score</th>
              <th>Country</th>
              <th>City</th>
              <th>Currency Symbol</th>
            </tr>
          </thead>
            <tbody>
                    {
                        people.map(person => (
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