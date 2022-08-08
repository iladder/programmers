// https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    function addHistory(data, history) {
        history.push({
            type: data[0],
            id: data[1],
            nickname: data[2]
        });
    }

    var history = [];
    var user = {};

    for(var i = 0; i < record.length; i++) {
        var v = record[i];
        var data = v.split(" ");
        if(data[0] == "Leave" || data[0] == "Change") {
            if(!(user[data[1]] && user[data[1]].type == "Enter")) continue;
        };
        
        if(data[0] == "Enter") {
            user[data[1]] = {
                type: "Enter",
                nickname: data[2]
            };
            addHistory(data, history);
        } else if(data[0] == "Leave") {
            data[2] = user[data[1]].nickname;
            user[data[1]].type = "Leave";
            addHistory(data, history);
        } else if(data[0] == "Change") {            
            user[data[1]].nickname = data[2];
        }
    };

    var answer = [];
    for(var i = 0; i < history.length; i++) {
        var row = history[i];
        var u = user[row.id];
        var message = `${u.nickname}님이 `;
        switch(row.type) {
            case 'Enter':
                message += "들어왔습니다.";
                break;
            case 'Leave':
                message += "나갔습니다.";
                break;
            default:
                continue;
        }
        answer.push(message)
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Leave uid4567","Change uid4567 Ryan"]));