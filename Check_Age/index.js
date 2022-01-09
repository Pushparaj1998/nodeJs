let age = prompt("Enter your Age : ",[]);
function checkAge(age)
{
    if(age>=18)
    {
        return true;
    }
    else
    {
        return confirm("Do you have a permission from your parents?")
    }
}
if(checkAge(age))
{
    alert("You are sucessfully enter into the page");
    
}else
{
    alert("sorry get permission and Come");
}