// run with node es6-reduce.js

const missingNo = l => l.concat().sort((a,b)=>a-b).reduce((m,v,i) => v===m ? m+1 : m ,1);

console.log(missingNo([4,6,7,8,1,2,2,2,4,-1,-2,8,3])); // 5
console.log(missingNo([4,6,7,8,1,2,2,2,4,-1,-2,8])); // 3
