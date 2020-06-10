
const solution = (nums) => {
    let answer = []; //빈배열 생성
    for (let i = 0; i < nums.length; i++) {
        answer[i] = 0; //빈 배열에[i]"요소"를 카운트를 위해 0으로 값 지정
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                console.log(nums[i])
                answer[i] ++; //카운트를 늘리기 위함
            }
        }
    }
    return answer;
}
solution([6, 5, 4, 8])

