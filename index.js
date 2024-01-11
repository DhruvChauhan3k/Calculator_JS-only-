var a,b;
function change1()
{
    a=document.getElementById('no1').value;
}
function change2()
{
    b=document.getElementById('no2').value;
}
function addt()
{
    var newParagraph = document.createElement('p');
    newParagraph.textContent = (a-'0') + (b-'0');

    document.getElementById('na').appendChild(newParagraph);
}
function subt()
{
    var newParagraph = document.createElement('p');
    newParagraph.textContent = (a-'0') - (b-'0');

    document.getElementById('na').appendChild(newParagraph);
}
function mult()
{
    var newParagraph = document.createElement('p');
    newParagraph.textContent = (a-'0') * (b-'0');

    document.getElementById('na').appendChild(newParagraph);
}
function divt()
{
    var newParagraph = document.createElement('p');
    newParagraph.textContent = (a-'0') / (b-'0');

    document.getElementById('na').appendChild(newParagraph);
}