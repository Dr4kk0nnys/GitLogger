// executing os commands
import { execSync } from 'child_process';

import robotjs from 'robotjs';

// robotjs.typeString('Hello World');
console.log(execSync('git push', { encoding: 'utf-8' }));