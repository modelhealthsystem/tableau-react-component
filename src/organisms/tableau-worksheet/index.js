import React from 'react';
import TableauReport from 'tableau-react';
import './styles.css';

export default (props) => {
    let error = {
        flag: false,
        message: ''
    }
    const getURL = (url) => {
        // TODO: Extended santisation
        if (url && url.trim())
            return url;
        else 
            error = {
                flag: true,
                message: 'Invalid Tableau URL'
            }
    }

    const getToken = (token) => {
        // TODO: Extended santisation
        return token;
    }

    const getFilters = (filters) => {
        // TODO: Extended santisation
        if (Array.isArray(filters)) return {};
        if (typeof(filters) !== 'object') return {};
        return Object.assign({}, filters);
    }

    const getParameters = (parameters) => {
        // TODO: Extended santisation
        if (Array.isArray(parameters)) return {};
        if (typeof(parameters) !== 'object') return {};
        return Object.assign({}, parameters);
    }

    const getOptions = (options) => {
        // TODO: Extended santisation
        if (Array.isArray(options)) return {};
        if (typeof(options) !== 'object') return {};
        return Object.assign({}, options);
    }

    const getQuery = (query) => {
        if (query && query.trim())
            // TODO: Extended santisation
            return query.trim();
        else
            return '';
    }

    const filters = getFilters(props.filters);
    const parameters = getParameters(props.parameters);
    const options = getOptions(props.options);
    const query = getQuery(props.query);

    // Procedurally ordered last to make error message more informative by severity
    const token = getToken(props.token);
    const url = getURL(props.url);

    return (
        <>
            {
                (error.flag) 
                ?
                    <div className="tableau-error">{error.message}</div>
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
            }
        </>
    )
}