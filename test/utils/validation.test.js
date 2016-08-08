import { test } from 'ava';
import {
	strLessThan,
	strGreaterThan
} from '../../src/utils/validation';

test('strLessThan is properly curried', t => {
	const strLessThan10 = strLessThan(10);
	t.is(strLessThan10("four"), true);
	t.is(strLessThan10("manycharacters"), false);
});

test('strGreaterThan is properly curried', t => {
	const strGreaterThan1 = strGreaterThan(1);
	t.is(strGreaterThan1("four"), true);
	t.is(strGreaterThan1(""), false);
});