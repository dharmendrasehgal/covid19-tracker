import React from 'react';

export const Item = (props) => {
    return (
        <tr>
          <td><a href={ 'https://covid19.mathdro.id/api/countries/'+ props.iso2 } target="_blank" rel="noopener noreferrer">{ props.iso2 }</a></td>
          <td>{ props.countryRegion }</td>
          <td>{ props.confirmed }</td>
          <td>{ props.deaths }</td>
          <td>{ props.recovered }</td>
        </tr>
    );
};