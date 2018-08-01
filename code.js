var number=0
var myNumberList = [12, 2112, 9000, 1999, 24];
console.log(myNumberList);
for (counter=0; counter<= myNumberList.length; counter++)
{
    if (number<myNumberList[counter])
    {
        number=myNumberList[counter]
        console.log(number)
    }
    else
    {
        console.log(number)
    }
}