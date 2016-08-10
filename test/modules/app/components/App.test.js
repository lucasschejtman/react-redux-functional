import { test } from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../../../../src/modules/app/components/App';

test('App should properly shallow render', t => {
	const wrapper = shallow(<App><div>Foo</div></App>);
	t.is(wrapper.contains(<div><div>Foo</div></div>), true);
});