import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.rows.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeRow(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


const Table = (props) => {
    const { data , removeRow } = props

    return (
        <table>
            <TableHeader />
            <TableBody rows={data} removeRow={removeRow}/>
        </table>
    )
}



export default Table