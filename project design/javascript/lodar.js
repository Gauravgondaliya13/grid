var load;
function mainFunction()
{
    load=setTimeout("display()",1000);
}

function display()
{
    document.getElementById("loder").style="display:none !important";
    document.getElementById("main").style="display:block !important";
}