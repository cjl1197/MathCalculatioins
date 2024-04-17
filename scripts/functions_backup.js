 // This function uses a for loop to calculate the factorial of a number.
 function calculateFactorial(factorialInput)
 {
     let num1 = parseInt(factorialInput);
     let num2 = num1;
     let factorial = num1;

     

     if(num1 == 0)
     {
         window.alert("The factorial of 0 is 1");
     }
     else if (num1 > 0)
     {

    document.write("<p>The factorial of " + num1 + " is: </p>");
       

     for (let i = 1; i < num1; i++)
     {
         document.write( num2 + " x ");
         num2 = num1 - i;
         factorial = factorial * i;
         
     }
     
     document.write( + num2 + " = " + factorial + "<br />");
     document.write('<br> <a href="index.html">Return to Home Page</a>');
     }
     else{
         window.alert("Please enter a positive number!!")
     }
 

 }
 
 // This function uses a while loop to calculate the sum, high, low and average of the number inputed.
 function mathCalculations()
 {
     let num = new Array();
     let sum = 0;
                
     
    
     let userNum = prompt("Please enter at least one number. When you are finished just leave the box empty and press the enter key on you keyboard.");

     if(userNum == null)
     {
         return;
     }
     
     if(userNum == "")
     {
         window.alert("You must enter at least one number!")
     }

     else if(userNum != null && userNum != "")
     {
    
         while(userNum != "")
             {
                 if(userNum == null)
                 {
                     return;
                 }

                 else if(isNaN(userNum))
                 {
                     userNum = prompt("You didn't enter a valid number. Please enter a number.");
                 }

                 else
                 {
                     num.push(parseInt(userNum));
                     userNum = prompt("Enter another number! Remember just leave it blank and hit the enter button on your keyboard to see the results.");    
                 }                  
             }

         let vectorLength = num.length;
         let high = num[0];
         let low = num[0];

        for(let i = 0; i < vectorLength; i++)
         {
             sum = sum + num[i];
             
            for(let j = 0; j < vectorLength; j++)
            {
                if (num[i] > num[j] && num[i] > high)
                {
                    high = num[i];
                }
                if (num[i] < num[j] && num[i] < low)
                {
                    low = num[i];
                }
            }
         }

         document.write("The sum of the numbers is: " + sum + "<br />" + "The highest number is: " + high + "<br />" + "The lowest number is: " + low + "<br />" + "The average of the numbers is: " + sum / vectorLength + "<br />");
         document.write('<br> <a href="index.html">Return to Home Page</a>');
     }
 }

 // This function is for manipulating the word inputed by the user.
 function stringManipulations()
 {
     let word = prompt("Please enter a word!"); // prompts for the first input and ensures a valid entry has been inputted

        if(word == null)
        {
         return;
        }

        while(word == "")
        {
            word = prompt("You must enter a word to continue!");
            if(word == null)
            {
                return;
            }
        }

     let num = prompt("Please enter a number. The number can't be larger than the number of letters in the word you enterd.");

     let numParsed = parseInt(num);

        while(num < 0)
        {
            num = prompt("You must enter a number greater than 0");
        }

        if(num == null)
        {
            return;
        }

        while(num == "")
        {
            num = prompt("You must enter a number to continue!");
            while(num < 0)
            {
                num = prompt("You must enter a number greater than 0");
            }
            if(num == null)
            {
                return;
            }
        }

     while(num > word.length)
     {
         num = prompt("You entered a number larger than the number of letters in the word. Please enter another number.");
         while(num == "")
         {
             num = prompt("You did not enter a number!!");
             while(num < 0)
            {
                num = prompt("You must enter a number greater than 0");
            }
         }
         while(num < 0)
        {
            num = prompt("You must enter a number greater than 0");
        }
         if(num == null)
         {
             return;
         }
     }

    document.write("The letter at position " + num + " is: " + word[num - 1] + "<br />");

    if(num == 1)
    {
        document.write("The word " + num + " time is: ");

        for(let i = 0; i < num; i++)
        {
            document.write(word);
        }

            document.write("<br />");
    }

    if (num > 1 || num < 1)
    {
        document.write("The word " + num + " times is: ");

        for(let i = 0; i < num; i++)
        {
        document.write(word);
        }

        document.write("<br />");
    }

        document.write("The word backwards is: ")

    for(let i = word.length - 1; i >= 0; i--)
    {
        document.write(word[i]);
    }

    document.write('<br> <br> <a href="index.html">Return to Home Page</a>');
 }
