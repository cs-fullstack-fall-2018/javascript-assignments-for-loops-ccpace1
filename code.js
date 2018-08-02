var number=0
var myNumberList = [12, 2112, 9000, 1999, 24];
console.log(myNumberList);
for (counter=0; counter<= myNumberList.length; counter++)
{
    if (number<myNumberList[counter])
    {
        number=myNumberList[counter]
//        console.log(number) // KEY: No need to log this number here
    }
//    else
//    {
//        console.log(number) // KEY: No need to log this number here
//    }
    
}

// KEY: Log largest number at end
console.log(number)

/*
	KEY: Really close. Well done!

	Needed some comments :-/
	Just log largest number at end, but your approach was correct
*/