import React from 'react';

export const Item = (props) => {
    return (
        <tr>
          <td><a href={ 'https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+ props.id } target="_blank" rel="noopener noreferrer">{ props.id }</a></td>
          <td>{ props.country }</td>
          <td>{ props.country_population }</td>
          <td>{ props.latest.confirmed }</td>
          <td>{ props.latest.deaths }</td>
          <td>{ props.latest.recovered }</td>
        </tr>
    );
};