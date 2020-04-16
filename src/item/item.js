import React from 'react';

export const Item = (props) => {
    return (
        <tr>
          <td>{ (props.provinceState !== null ? props.provinceState + ' ' : '')+props.countryRegion }</td>
          <td>{ props.confirmed }</td>
          <td>{ props.deaths }</td>
          <td>{ props.recovered }</td>
        </tr>
    );
};