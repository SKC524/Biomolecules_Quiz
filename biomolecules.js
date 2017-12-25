var QuizGrade = 0;
alert("Note: Always answer with a capital letter where applicable");
var Question1 = prompt("How many types of biomolecules are there?");
if (Question1 == 4)	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops that's incorrect. The correct answer was 4.");
	}
	
var Question2 = prompt("What is the name of the simplest sugar")
if (Question2 == "Glucose")	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else if (Question2 == "fructose"){
	alert("That is correct");
	QuizGrade += 1;
	}
	else {
	alert("Did you start with a lowercase letter?");
	alert("Oops that's incorrect, the correct answer was either fructose or glucose.");
	}
	
var Question3 = prompt("What is the monomer for proteins [plural word]");
if (Question3 == "Amino acids")	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops that's incorrect, the correct answer was amino acids.");
	}
	
var Question4 = prompt("What type of carbohydrate is made up of two of the simplest sugar molecules bonded together?[will not accept plural version]");
if (Question4 == "Disaccharide")	{
	alert("Good - tough question");
	QuizGrade += 1;
	}
	else	{
	alert("Better luck next time. The correct answer was Disaccharide (spelling counts - sorry)");
	}
	
alert("Halfway there!");
var Question5 = prompt("true/false: Carbon has 4 valance electrons, enabling it to engage in 4 separate covalent bonds.");
if (Question5 == "True")	{
	alert("That's correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops the answer was true");
	}
	
var Question6 = prompt("true/false: Glycogen is an example of a disaccharide.");
if (Question6 == "False")	{
	alert("Your answer was correct.");
	QuizGrade += 1;
	}
	else	{
	alert("Oops the statement was false; glycogen is a polysaccharide.");
	}
	
var Question7 = prompt("True/false: Proteins aid in chemical signaling");
if (Question7 == "True")	{
	alert("Good job!");
	QuizGrade += 1;
	}
	else	{
	alert("The correct answer was true");
	}
	
var Question8 = prompt("True/false: Dehydration refers to the loss of two hydrogens and an oxygen in the process of making more complex carbohydrates");	
if (Question8 == "True")	{
	alert("Good job");
	QuizGrade += 1;
	}
	else	{
	alert("That was a tricky one.. it was true.");
	}

var Question9 = prompt("True/false: proteins make up the boundary called the cell membrane");
if (Question9 == "False")	{
	alert("Correct! Lipids make up the boundary, not proteins.");
	QuizGrade += 1;
	}
	else	{
	alert("Sorry - trick question there, lipids make up the cell membrane.");
	}

var Question10 = prompt("True/false: Polysaccharides are always made up of three monomers");
if (Question10 == "False")	{
	alert("Correct! Way to end strong!");
	QuizGrade += 1;
	}
	else	{
	alert("Incorrect, poly means many.");
	}
var FinalQuizGrade = QuizGrade*10;
alert("RESULTS: " + FinalQuizGrade + "%");	