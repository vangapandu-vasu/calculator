const display=document.querySelector(".display");
const equal=document.querySelector(".equal");

function appendtodisplay(input)
{
    display.value+=input;
}
function clearr(){
    display.value="";
}

function clearone()
{
    display.value=display.value.substring(0,display.value.length-1);
}

equal.addEventListener("click",()=>
    {
        try{
            display.value=eval(display.value);
        }
        catch(error){
            display.value="ERROR";
        }
});