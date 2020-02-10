import React from 'react';
import TableauComponent from '../../organisms/tableau-worksheet';

export default () => {
  const state = {
    url: 'https://public.tableau.com/views/FilmGenrePopularity-1910-2018/GenreRelativePopularity',
    anchored: true,
    options: {
      hideTabs: true,
      hideToolbar: true
    },
    filters: {
      startYear: [1989, 1990, 1991, 1992, 1993]
    },
    query: {
      embed: 'no',
      comments: 'yes',
      toolbar: 'no',
      refresh: 'yes'
    }
  }
  return (
    <TableauComponent {...state}/>
  );
}