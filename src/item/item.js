import React from 'react';

export const Item = (props) => {
    return (
        <tr>
          <td className="text-left">{ (props.provinceState !== null ? props.provinceState + ' ' : '')+props.countryRegion }</td>
          <td className="text-right">{ props.confirmed }</td>
          <td className="text-right">{ props.deaths }</td>
          <td className="text-right">{ props.recovered }</td>
        </tr>
    );
};