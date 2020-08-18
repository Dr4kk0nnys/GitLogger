// executing os commands
import { execSync } from 'child_process';
// robotjs.typeString('Hello World');
console.log(execSync('git status', { encoding: 'utf-8' }));
