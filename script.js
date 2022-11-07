


function getString()
{
    var s1=document.getElementById('1ststring').value;
    var s2=document.getElementById('2ndstring').value;
    
    var i=s1.indexOf(s2);
    if(i!=-1)
    window.prompt("",s1.substring(++i));
    else 
    alert("The letter doesn't exist in the sentence");

}


