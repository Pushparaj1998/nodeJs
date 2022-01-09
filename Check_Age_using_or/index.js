let age = prompt("Enter your Age :");
function checkAge(age)
{
    return (age>=18) || confirm ("Do you Have a parents permission");
}
if(checkAge(age))
{
    alert("welcome");
}
else
{
    alert("Get permission Please")
}