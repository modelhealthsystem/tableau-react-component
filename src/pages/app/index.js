import React from 'react';
import TableauComponent from '../../organisms/tableau-worksheet';
import './index.css';

export default () => {
  const state = {
    url: 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms'
  }
  return (
    <TableauComponent {...state}/>
  );
}