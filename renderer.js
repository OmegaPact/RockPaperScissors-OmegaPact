
function RunGame(Selection) {

    //select an option for computer
    var CPUSelection = GenerateCPUSelection();

    //compare outcomes
    var TheWinner = CompareSelections(Selection, CPUSelection);


    //declare winner


    alert('Selection: ' + Selection + '\tCPU: ' + CPUSelection + "\tWinner= " + TheWinner);
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