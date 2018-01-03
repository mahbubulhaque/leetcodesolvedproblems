/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 var stack = [];
 
 function isPaird(open, close) {
    if (open == '(' && close == ')') {
        return true;
    } else if (open == '{' && close == '}') {
        return true; 
    } else if (open == '[' && close == ']') {
        return true;
    } else {
        return false;
    }
 }
 
 function isBalanced() {
    for (i=0;i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }

        if (s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if (!isPaird(stack.pop(), s[i])) {
                return false;
            }
        }
    }

    return !stack.length;
 }
 
 if (s.length > 1) {
    return isBalanced(); 
 } else {
    return false;
 }
};
