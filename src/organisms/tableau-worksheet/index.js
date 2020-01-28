import React from 'react';
import TableauReport from 'tableau-react';
import './styles.css';

export default (props) => {
    let error = {
        flag: true,
        message: 'Initial Error Message'
    }
    const getURL = (url) => {
        return (url) ? url.trim() : '';
    }

    const getToken = (token) => {
        return token;
    }

    const getFilters = (filters) => {
        if (Array.isArray(filters)) return {};
        if (typeof(filters) !== 'object') return {};
        return Object.assign({}, filters);
    }

    const getParameters = (parameters) => {
        if (Array.isArray(parameters)) return {};
        if (typeof(parameters) !== 'object') return {};
        return Object.assign({}, parameters);
    }

    const getOptions = (options) => {
        if (Array.isArray(options)) return {};
        if (typeof(options) !== 'object') return {};
        return Object.assign({}, options);
    }

    const getQuery = (query) => {
        return (query) ? query.trim() : '';
    }

    const tableauURL = getURL(props.url);
    const tableauToken = getToken(props.token);
    const tableauFilters = getFilters(props.filters);
    const tableauParameters = getParameters(props.parameters);
    const tableauOptions = getOptions(props.options);
    const tableauQuery = getQuery(props.query);

    return (
        <>
            {
                (error.flag) 
                ?
                    <div>{error.message}</div>
                :
                    <div className="tableau-worksheet-container">
                        <TableauReport 
                            url={tableauURL} 
                            token={tableauToken}
                            filters={tableauFilters}
                            parameters={tableauParameters}
                            options={tableauOptions}
                            query={tableauQuery}
                        />
                    </div>
            }
        </>
    )
}