////document.getElementById("btnSend").addEventListener("click", function () {
    
////    // Declare Variables for grades and grade weight
////    var AssignmentGrade = document.getElementById("AssignmentsGrade").value
////    var GroupGrade = document.getElementById("GroupGrade").value
////    var QuizzesGrade = document.getElementById("QuizzesGrade").value
////    var ExamGrade = document.getElementById("ExamGrade").value
////    var IntexGrade = document.getElementById("IntexGrade").value

// Above is the Javascript code used before jquery is implemented


$("#btnSend").click(function () {

    // Declare Variables for grades and grade weight
    var AssignmentGrade = $("#AssignmentsGrade").val()
    var GroupGrade = $("#GroupGrade").val()
    var QuizzesGrade = $("#QuizzesGrade").val()
    var ExamGrade = $("#ExamGrade").val()
    var IntexGrade = $("#IntexGrade").val()

    //Grade weights
    var AssignmentWeight = .55
    var GroupWeight = .05
    var QuizWeight = .10
    var ExamWeight = .20
    var IntexWeight = .10
    var FinalGrade = 0
    var LetterGrade = "NA"

    // Calculates Grade based off of weight
    FinalGrade = Math.round(100 *((AssignmentGrade * AssignmentWeight) + (GroupWeight * GroupGrade) + (QuizzesGrade * QuizWeight) + (ExamWeight * ExamGrade) + (IntexWeight * IntexGrade)))


    // Calculates the letter grade based off of Final Grade
    if (FinalGrade >= 93) {
        LetterGrade = "A"
    } else if (FinalGrade >= 90) {
        LetterGrade = "A-"
    } else if (FinalGrade >= 87) {
        LetterGrade = "B+"
    } else if (FinalGrade >= 83) {
        LetterGrade = "B"
    } else if (FinalGrade >= 80) {
        LetterGrade = "B-"
    } else if (FinalGrade >= 77) {
        LetterGrade = "C+"
    } else if (FinalGrade >= 73) {
        LetterGrade = "C"
    } else if (FinalGrade >= 70) {
        LetterGrade = "C-"
    } else if (FinalGrade >= 67) {
        LetterGrade = "D+"
    } else if (FinalGrade >= 63) {
        LetterGrade = "D"
    } else if (FinalGrade >= 60) {
        LetterGrade = "D-"
    } else {
        LetterGrade = "E"
    }


    // Output the final numeric and letter grade
    alert("Your final IS413 grade is: " + FinalGrade + "% \n Also known as the letter grade of: " + LetterGrade)

})