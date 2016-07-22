import R from 'ramda';
import { notNilOrEmpty } from 'utils/ramda-utils';
import { strLessThan, strGreaterThan, required, notRequired } from 'utils/validation';

export const fields = {
	name: {
		name: 'name',
		isValid: R.allPass([notNilOrEmpty, strGreaterThan(0), strLessThan(10)])
 	},
	desc: {
		name: 'description',
		validate: R.allPass([notNilOrEmpty, strGreaterThan(5), strLessThan(30)])
	}
};

export const transformCompleted = R.evolve({ completed: R.not });
export const validateName = R.ifElse(fields.name.isValid, notRequired, required);