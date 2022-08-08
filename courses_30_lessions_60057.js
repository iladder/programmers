// https://school.programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    var max = Math.floor(s.length / 2);
    var answer = s.length;
    for(var i = 1; i <= max; i++) {
        var match = "";
        var pos = 0;
        var text = "";
        var dupleCnt = 1;
        while(pos <= s.length) {
            var str = s.substring(pos, pos + i);
            pos += i;
            if(match == str) {
                dupleCnt++;
            } else {
                match = str;
                text += str;
                if(dupleCnt > 1) text += String(dupleCnt);
                dupleCnt = 1;
            }
        }
        if(text.length < answer) answer = text.length;
    }
    return answer;
}

console.log(solution("ababcdcdababcdcd"));