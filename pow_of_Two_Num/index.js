let val1 = prompt("Enter the 1st Value :",[]);
const val2 = prompt("Enter the 2nd Value :",[]);

function pow(val1,val2)
{
    
    let  val3 = val1**val2;
    return val3;
}
alert(`The Power of ${val1} and ${val2} is `+pow(val1,val2));