//https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    var endDay = [];
    progresses.map((v, k)=>{
        var progresss = v;
        var speed = speeds[k];
        var day = 0;
        while(progresss < 100) {
            progresss += speed;
            day++;
        };
        endDay.push(day);
    });

    var answer = [];
    var count = 0;
    var day = 0;
    endDay.map((v, k)=>{
        if(v > day) {
            if(k > 0) answer.push(count);
            day = v;
            count = 1;
        } else count++;
        if(k == (endDay.length - 1)) answer.push(count);
    });

    return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]))