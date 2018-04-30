function RunGame(Selection) {

    //select an option for computer
    var CPUSelection = GenerateCPUSelection();

    //compare outcomes
    var TheWinner = CompareSelections(Selection, CPUSelection);

    //update score
    UpdateTheScore(TheWinner);

    //display the log
    DisplayOutput(Selection,CPUSelection,TheWinner);
}

function DisplayOutput(Player, CPU, Winner)
{
    if(Winner == 'tie')
    {
        document.getElementById("ProgramLog").innerHTML +=  "<li class=\"list-group-item\">" + "You both chose " + Player.toUpperCase() + "! its a TIE!" +  "</li>";
    }
    else
    {
        document.getElementById("ProgramLog").innerHTML +=  "<li class=\"list-group-item\">" + "You chose: " +Player+ " CPU chose: " + CPU + "Winner is: " + Winner + "</li>";
    }

    document.getElementById("ProgramLog").scrollTop(160);
}

function UpdateTheScore(TheWinner)
{
    if(TheWinner == 'player')
    {
        document.getElementById("txtPlayerScore").innerHTML = parseInt(document.getElementById("txtPlayerScore").innerText)+1;

    }
    else if(TheWinner == 'cpu')
    {
        document.getElementById("txtCPUScore").innerHTML = parseInt(document.getElementById("txtCPUScore").innerText)+1;
    }
}

function CompareSelections(Player, CPU) {
    var Winner;
    //compare
    if(Player == CPU)
    {
        Winner ='tie';//tie
    }
    else if((Player == 'rock' && CPU == 'scissors') || (Player == 'paper' && CPU == 'rock') || (Player == 'scissors' && CPU == 'paper'))
    {
        Winner ='player';//player wins
    }
    else
    {
        Winner ='cpu';//CPU wins
    }
    return Winner;
}

function GenerateCPUSelection() {
    //create a random number for CPU between 0-100
    var RandSelection = Math.trunc(Math.random() * 100);

    if (RandSelection >= 0 && RandSelection <= 32) {
        RandSelection = "rock";
    }
    else if (RandSelection >= 33 && RandSelection <= 65) {
        RandSelection = "paper";
    }
    else {
        RandSelection = "scissors";
    }
    return RandSelection;
}