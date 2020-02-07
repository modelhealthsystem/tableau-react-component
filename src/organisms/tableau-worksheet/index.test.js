import React from 'react';
import TableauReport from './index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const testData = { url: 'https://public.tableau.com/views/FilmGenrePopularity-1910-2018/GenreRelativePopularity' }

describe('The Tableau Report', () => {
	it('Should Render a Tableau Report', () => {
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...testData} />, { attachTo: reportTestElement });

        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Render a Filtered Report Based On Filter Props', () => {
        const filters = { startYear: [1989, 1990, 1991, 1992, 1993] };
        const td = Object.assign({filters}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('filters')).toStrictEqual(filters);
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Handle An Empty Filter Props Object', () => {
        const filters = {};
        const td = Object.assign({filters}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('filters')).toStrictEqual({});
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Render a Message When Incorrect Filters Are Passed', () => {
        const filters = "filters";
        const td = Object.assign({filters}, testData);

        const wrapper = mount(<TableauReport {...td} />);

        expect(wrapper.prop('filters')).toStrictEqual("filters");
		expect(wrapper.html()).toBe('<div class="tableau-error">Incorrect Filter type</div>');
	})

	it('Should Handle An Empty Parameters Object', () => {
        const parameters = {};
        const td = Object.assign({parameters}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('parameters')).toStrictEqual({});
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Render a Message When Incorrect Parameters Are Passed', () => {
        const parameters = "parameters";
        const td = Object.assign({parameters}, testData);

        const wrapper = mount(<TableauReport {...td} />);

        expect(wrapper.prop('parameters')).toStrictEqual("parameters");
		expect(wrapper.html()).toBe('<div class="tableau-error">Incorrect Parameter type</div>');
	})

	it('Should Handle An Empty Options Object', () => {
        const options = {};
        const td = Object.assign({options}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('options')).toStrictEqual({});
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Render a Message When Incorrect Options Are Passed', () => {
        const options = "options";
        const td = Object.assign({options}, testData);

        const wrapper = mount(<TableauReport {...td} />);

        expect(wrapper.prop('options')).toStrictEqual("options");
		expect(wrapper.html()).toBe('<div class="tableau-error">Incorrect Options type</div>');
	})

	it('Should Handle An Empty Query Object', () => {
        const query = {};
        const td = Object.assign({query}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('query')).toStrictEqual({});
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})

	it('Should Render a Message When An Incorrect Query Object Is Passed', () => {
        const query = "query";
        const td = Object.assign({query}, testData);

        const wrapper = mount(<TableauReport {...td} />);

        expect(wrapper.prop('query')).toStrictEqual("query");
		expect(wrapper.html()).toBe('<div class="tableau-error">Incorrect Query type</div>');
	})

	it('Should Render An Anchor Element Containing the Tableau Report', () => {
        const anchored = true;
        const td = Object.assign({anchored}, testData);
        
		const body = document.body;
		body.insertAdjacentHTML('afterbegin', '<div id="report-test"></div>');
		const reportTestElement = document.getElementById('report-test');

        const wrapper = mount(<TableauReport {...td} />, { attachTo: reportTestElement });

        expect(wrapper.prop('anchored')).toStrictEqual(true);
        expect(wrapper.html().toString().search('tableau-anchor')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search('iframe')).toBeGreaterThan(0);
        expect(wrapper.html().toString().search(`src="${testData.url}`)).toBeGreaterThan(0);
		wrapper.detach();
		body.removeChild(reportTestElement);
	})
})