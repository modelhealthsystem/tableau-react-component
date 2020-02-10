import React from 'react';
import TableauReport from 'tableau-react';
import './styles.css';

export default (props) => {
    let error = {
        flag: false,
        message: ''
    }
    const anchored = (props.anchored && typeof(props.anchored) === 'boolean') ? props.anchored : false

    const getURL = (url) => {
        // URL Format Match
        const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
        
        if (url && typeof(url) === 'string' && url.trim() && url.match(regex))
            return url;
        else
            error = {
                flag: true,
                message: 'Invalid Tableau URL'
            }
        return '';
    }

    const getToken = (token) => {
        if (!token || typeof(token) !== 'string') return null
        return token;
    }

    const getFilters = (filters) => {
        if (filters && (typeof(filters) !== 'object' || Array.isArray(filters)))
            error = {
                flag: true,
                message: 'Incorrect Filter type'
            }
        else
            return Object.assign({}, filters);
    }

    const getParameters = (parameters) => {
        if (parameters && (typeof(parameters) !== 'object' || Array.isArray(parameters)))
            error = {
                flag: true,
                message: 'Incorrect Parameter type'
            }
        else
            return Object.assign({}, parameters);
    }

    const getOptions = (options) => {
        if (options && (typeof(options) !== 'object' || Array.isArray(options)))
            error = {
                flag: true,
                message: 'Incorrect Options type'
            }
        else
            return Object.assign({}, options);
    }

    const getQuery = (query) => {
        if (query && (typeof(query) !== 'object' || Array.isArray(query)))
            error = {
                flag: true,
                message: 'Incorrect Query type'
            }
        else {
            const standardisedQuery = Object.assign({}, query);
            return Object.keys(standardisedQuery).map((key, idx) => { return `${(idx === 0) ? '?' : '&'}:${key}=${standardisedQuery[key]}`}).join('')
        }
    }

    const getFilterURL = (url, filters) => {
        const filterString = Object.keys(filters).map((key, idx) => { return `${(idx === 0) ? '?' : '&'}${key}=${filters[key]}` }).join('%2C');
        return `${url}${filterString}`;
    }

    const filters = getFilters(props.filters);
    const parameters = getParameters(props.parameters);
    const options = getOptions(props.options);
    const query = getQuery(props.query);

    
    // Procedurally ordered last to make error message more informative by severity
    const token = getToken(props.token);
    const url = getURL(props.url);

    const filterURL = getFilterURL(url, filters);
    
    if (error.flag) 
        return <div className="tableau-error">{error.message}</div>
    else 
        return (
            (anchored)
            ?
                <a href={filterURL} className="tableau-anchor">
                    View on Tableau Server
                </a>
            :
                <div className="tableau-worksheet-container">
                    <TableauReport
                        url={url} 
                        token={token}
                        filters={filters}
                        parameters={parameters}
                        options={options}
                        query={query}
                    />
                </div>
        )
}