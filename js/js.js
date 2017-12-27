function Quiz ()	{
var StudyingTip = " I would recommend studying: ";

var QuizGrade = 0;

if(confirm("Would you like to start the biomolecules quiz?") == false)	{
return;
}

var Question1 = prompt("How many types of biomolecules are there?");
if (Question1 == null)	{ return;}
if (Question1 == 4)	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops that's incorrect. The correct answer was 4.");
	StudyingTip += "Biomolecules overview, ";
	}
	
var Question2 = prompt("What is the name of the simplest sugar");
if (Question2 == null)	{ return;	}
Question2 = Question2.toLowerCase();
if (Question2 == "glucose")	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else if (Question2 == "fructose"){
	alert("That is correct");
	QuizGrade += 1;
	}
	else {
	alert("Oops that's incorrect, the correct answer was either fructose or glucose.");
	StudyingTip += "Carbohydrates overview, ";
	}
	
var Question3 = prompt("What is the monomer for proteins?");
if (Question3 == null)	{ return; }
Question3 = Question3.toLowerCase();
if (Question3 == "amino acids")	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else if(Question3 == "amino acid")	{
	alert("That is correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops that's incorrect, the correct answer was amino acids.");
	StudyingTip += "Proteins overview, ";
	}
	
var Question4 = prompt("What type of carbohydrate is made up of two of the simplest sugar molecules bonded together?");
Question4 = Question4.toLowerCase();
if (Question4 == null)	{ return; }
if (Question4 == "disaccharide")	{
	alert("Good - tough question");
	QuizGrade += 1;
	}
	else if(Question4 == "disaccharides")	{
	alert("Good - tough question");
	QuizGrade += 1;
	}
	else	{
	alert("Better luck next time. The correct answer was Disaccharide (spelling counts - sorry)");
	StudyingTip += "Carbohydrate disaccharide section, "
	}
	
alert("Halfway there!");
var Question5 = prompt("true/false: Carbon has 4 valance electrons, enabling it to engage in 4 separate covalent bonds.");
if (Question5 == null)	{ return;  }
Question5 = Question5.toLowerCase();
if (Question5 == "true")	{
	alert("That's correct");
	QuizGrade += 1;
	}
	else	{
	alert("Oops the answer was true");
	StudyingTip += "4 biomolecules overview , ";
	}
	
var Question6 = prompt("true/false: Glycogen is an example of a disaccharide.");
if (Question6 == null)	{ return;  }
Question6 = Question6.toLowerCase();
if (Question6 == "false")	{
	alert("Your answer was correct.");
	QuizGrade += 1;
	}
	else	{
	alert("Oops the statement was false; glycogen is a polysaccharide.");
	StudyingTip += "Carbohydrates polymer section, ";
	}
	
var Question7 = prompt("True/false: Proteins aid in chemical signaling");
if (Question7 == null)	{  return;  }
Question7 = Question7.toLowerCase();
if (Question7 == "true")	{
	alert("Good job!");
	QuizGrade += 1;
	}
	else	{
	alert("The correct answer was true");
	StudyingTip += "Protein functions, ";
	}
	
var Question8 = prompt("True/false: Dehydration refers to the loss of two hydrogens and an oxygen in the process of making more complex carbohydrates");	
if (Question8 == null)	{  return;  }
Question8 = Question8.toLowerCase();
if (Question8 == "true")	{
	alert("Good job");
	QuizGrade += 1;
	}
	else	{
	alert("That was a tricky one.. it was true.");
	StudyingTip += "Dehydration synthesis, ";
	}

var Question9 = prompt("True/false: proteins make up the boundary called the cell membrane");
if (Question9 == null)  {  return;  }
Question9 = Question9.toLowerCase();
if (Question9 == "false")	{
	alert("Correct! Lipids make up the boundary, not proteins.");
	QuizGrade += 1;
	}
	else	{
	alert("Sorry - trick question there, lipids make up the cell membrane, not proteins.");
	StudyingTip += "Phospholipid bilayer diagram and protein functions, ";
	}

var Question10 = prompt("True/false: Polysaccharides are always made up of three monomers");
if (Question10 == null)	{	return;    }
Question10 = Question10.toLowerCase();
if (Question10 == "false")	{
	alert("Correct! Way to end strong!");
	QuizGrade += 1;
	}
	else	{
	alert("Incorrect, poly means many.");
	StudyingTip += "Poly/mono definitions.";
	}
var FinalQuizGrade = QuizGrade * 10;
alert("RESULTS: " + FinalQuizGrade + "%");	
if(QuizGrade < 10)	{
alert("Studying tips based on what was answered incorrectly, in chronological order as they appeared in the quiz:" + StudyingTip);
}
else	{
alert("Great job! You got everything right!!");
}

}