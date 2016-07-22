import R from 'ramda';
import { notNilOrEmpty } from 'utils/ramda-utils';
import { strLessThan, strGreaterThan, required, notRequired } from 'utils/validation';

export const transformCompleted = R.evolve({ completed: R.not });
export const validateFormProp = validator => R.ifElse(validator, notRequired, required);

export const fields = {
	name: {
		isValid: R.allPass([notNilOrEmpty, strGreaterThan(0), strLessThan(10)])
 	},
	description: {
		isValid: R.allPass([notNilOrEmpty, strGreaterThan(5), strLessThan(30)])
	}
};

export const validateFields = values => {
	const reducer = (acc, prop) => {
		return {...acc, [prop] : validateFormProp(fields[prop].isValid)(values[prop]) }
	};

	return R.reduce(reducer, {}, Object.keys(values));
};