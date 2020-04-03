# NHS Tableau Component

### Installation
___
Once imported use the following to add the module to your code:

#### ES6

    import TableauComponent from 'nhs-tableau-component';

#### < ES6

    var TableauComponent = require('nhs-tableau-component');

### Packaging
___
For Linux/OSX environments

    npm run package

For Windows environments

    npm run package_win

### Parameters
___
The component takes the following parameters:
| Parameter | Required? | Description |
| --------- | --------- | ----------- |
| url | mandatory | String value of the Tableau worksheet URL to be displayed |
| token | optional | String value of the authorisation token for private Tableau worksheets. Can be null for public worksheets. |
| anchored | optional | Boolean property that toggles the view between an in-line chart and a button link to the chart in Tableau passing any filter criteria |
| filters | optional | Object containing the filter key and its value as an array of filter criteria. E.g. `startYear: [2001, 2002, 2003, 2004, 2005]` |
| parameters | optional | Object containing the parameter key and its value manipulate the worksheet. E.g. `colour: 'green'` |
| options | optional | Object containing Tableau viz controls from https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm  |
| query | optional | Object accepting key value pairs that are appended to the URL query string. E.g. `refresh: 'yes'`  |