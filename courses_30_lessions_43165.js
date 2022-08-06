//https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    const length = numbers.length;
    const arr = Array.from(Array(numbers.length + 1), () => new Array());
    arr[0] = [0];
    for(i = 0; i < length; i++) {
        arr[i].map(v=>{
            arr[i + 1].push(v + ` + ${numbers[i]}`);
            arr[i + 1].push(v + ` - ${numbers[i]}`);
        });
    }
    var result = arr.pop().filter((v)=>eval(v)==target);
    var answer = result.length;
    return answer;
}

console.log(solution([4,1,2,1], 4))