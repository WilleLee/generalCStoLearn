var args = process.argv;
console.log(args[2]);

// [
// '/Users/wille/.nvm/versions/node/v17.8.0/bin/node', // node.js runtime이 어디에 위치하나
// '/Users/wille/Documents/GitHub/generalCStoLearn/생활코딩/nodejs/실습/conditionals.js' // 파일의 경로
// ] 세 번째 = 입력값

if(args[2] === '1'){
    console.log('C1');
}else{
    console.log('C2');
}