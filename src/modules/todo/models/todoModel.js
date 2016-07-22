import R from 'ramda';
import { notNilOrEmpty } from 'utils/ramda-utils';
import { strLessThan, strGreaterThan, required, notRequired } from 'utils/validation';

export const transformCompleted = R.evolve({ completed: R.not });
export const validateFormField = validator => R.ifElse(validator, notRequired, required);

export const formFields = {
	name: {
		isValid: R.allPass([notNilOrEmpty, strGreaterThan(0), strLessThan(10)])
 	},
	description: {
		isValid: R.allPass([notNilOrEmpty, strGreaterThan(5), strLessThan(30)])
	}
};

export const validateFormFields = values => {
	const reducer = (acc, field) => {
		return {...acc, [field] : validateFormField(formFields[field].isValid)(values[field]) }
	};

	return R.reduce(reducer, {}, Object.keys(values));
};