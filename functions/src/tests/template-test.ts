const format = require("string-template");

import { ssml } from '../templates/default';

const values = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const text = format(ssml, [ "7", ...values]);

console.log(text);