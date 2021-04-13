/*
    Paul B.
    SDEV 328 - JS3
    4/13/2021
 */
function heeHaw(number)
{
    //Turns error label visible if user enters an invalid number
    if (isNaN(number) || number <= 0)
    {
        document.getElementById("invalidNum").style.display = "inline";
    }
    //HeeHaw script from last week
    else
    {
        for (i = 1; i <= number; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                document.write("Hee Haw!<br>");
            }
            else if (i % 3 == 0)
            {
                document.write("Hee!<br>");
            }
            else if (i % 5 == 0)
            {
                document.write("Haw!<br>");
            }
            else
            {
                document.write("" + i + " <br>");
            }
        }
    }
}
//Gets button element, and when it is clicked it sends the input value to heeHaw()
let butt = document.getElementById("buttony");
butt.onclick = function(){
    let num = document.getElementById("numInp").value;
    heeHaw(num);
};
