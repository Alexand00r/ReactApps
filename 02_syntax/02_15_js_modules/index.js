//import { add as sum, subtract, divideBy, PI} from "./shared_functions.js";

import './sideEffect.js';
import defaultExportObject, * as calFunc from "./shared_functions.js";


//console.log(sum(54,8), divideBy(85,5));
console.log(calFunc.add(54,8), calFunc.divideBy(85,5));

const  temp = defaultExportObject + 5;
console.log(temp);
console.log(defaultExportObject);