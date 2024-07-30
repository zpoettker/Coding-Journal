//Calculate class average


function getAverage(scores) {
  let sum = 0
  for(let i = 0; i < scores.length; i++){
 sum = sum + scores[i];
  }
  return sum/scores.length;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


//get Grades



function getGrade(score) {
  if(score == 100){
    return "A++";
  }
  else if(score >= 90 && score <= 99){
    return "A";
  }
  else if(score >= 80 && score <= 89){
    return "B";
  }
  else if(score >= 70 && score <= 79){
    return "C";
  }
  else if(score >= 60 && score <= 69){
    return "D";
  }
   else if(score >= 0 && score <= 59){
     return "F";
   }
  else{
    return "This is not a valid grade";
  }

}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//passing score

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


//student message 

function studentMsg(totalScores, studentScore) {
  if(getGrade(studentScore) !== "F"){
    let pass = "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
 return pass;
  }
  else {
    let fail = "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course."
 return fail;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));

