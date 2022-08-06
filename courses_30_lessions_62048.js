//https://school.programmers.co.kr/learn/courses/30/lessons/62048

function solution(w, h) {
    var num = [];
    if(w < h) num.push(w, h);
    else num.push(h, w);
    var n = 1;
    for(var i = num[0]; i >= 1; i--) {
        if((num[0] % i) == 0) {
            if((num[1] % i) == 0) {
                n = i;
                break;
            };
        };
    };
    var num2 = [num[0] / n, num[1] / n];
    var noBox = noBox = num2[0] + num2[1] - 1;
    var loopCnt = num[0] / num2[0];
    var tNoBox = noBox * loopCnt;    
    var answer = (num[0] * num[1]) - tNoBox;
    return answer;
}

console.log(solution(8, 12))
console.log(solution(5, 5))