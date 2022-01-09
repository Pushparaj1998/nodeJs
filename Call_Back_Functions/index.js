function ask(question,yes,no)
{
    if(confirm(question))
        yes();
    else
        no();
}
ask(
    "Do you agree",
    function() {alert('You Agree');},

    function() {alert("you Canceled the Execution");}
);