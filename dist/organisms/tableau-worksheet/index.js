import React from 'react';
import TableauReport from 'tableau-react';
import './styles.css';
export default (props => {
  let error = {
    flag: false,
    message: ''
  };
  const anchored = props.anchored && typeof props.anchored === 'boolean' ? props.anchored : false;

  const getURL = url => {
    // TODO: Extended santisation
    if (url && url.trim()) return url;else error = {
      flag: true,
      message: 'Invalid Tableau URL'
    };
    return '';
  };

  const getToken = token => {
    // TODO: Extended santisation
    return token;
  };

  const getFilters = filters => {
    // TODO: Extended santisation
    if (Array.isArray(filters)) return {};
    if (typeof filters !== 'object') return {};
    return Object.assign({}, filters);
  };

  const getParameters = parameters => {
    // TODO: Extended santisation
    if (Array.isArray(parameters)) return {};
    if (typeof parameters !== 'object') return {};
    return Object.assign({}, parameters);
  };

  const getOptions = options => {
    // TODO: Extended santisation
    if (Array.isArray(options)) return {};
    if (typeof options !== 'object') return {};
    return Object.assign({}, options);
  };

  const getQuery = query => {
    if (query && query.trim()) // TODO: Extended santisation
      return query.trim();else return '';
  };

  const filters = getFilters(props.filters);
  const parameters = getParameters(props.parameters);
  const options = getOptions(props.options);
  const query = getQuery(props.query); // Procedurally ordered last to make error message more informative by severity

  const token = getToken(props.token);
  const url = getURL(props.url);
  console.log(url, filters);
  const tableauComponent = React.createElement(TableauReport, {
    url: url,
    token: token,
    filters: filters,
    parameters: parameters,
    options: options,
    query: query
  });
  if (error.flag) return React.createElement("div", {
    className: "tableau-error"
  }, error.message);else return anchored ? React.createElement("a", {
    href: url,
    className: "tableau-anchor"
  }, tableauComponent) : React.createElement("div", {
    className: "tableau-worksheet-container"
  }, tableauComponent);
});