//https://school.programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
    var num = [1, 2, 4];

    var arr = [];
    var v = n;
    while(true) {
        var v2 = v / num.length;
        if(v2 > 1) {
            v2 = Math.floor(v2);
            var nv = (v % num.length) - 1;
            if(nv < 0) {
                v2 -= 1;
                nv = 2;
            };
            arr.unshift(num[nv]);
            v = v2;
        } else {
            var nv = (v % num.length) - 1;
            if(nv < 0) nv = 2;
            arr.unshift(num[nv]);
            break;
        }

    }
    var answer = arr.join('');
    return answer;
}

console.log(solution(4))