function solution(participant, completion) {
    const sortedParticipant = participant.sort();
    const sortedCompletion = completion.sort();
    return sortedParticipant.find((v,i)=>v!==sortedCompletion[i]);
}
