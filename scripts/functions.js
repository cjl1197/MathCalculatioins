 const clearData = () =>  window.location.href = "index.html";

 // Clears data from only the Fractorial form
 const  clearDataFactorial = () => document.getelementbyid('factorialcalculated').innerhtml = "";

// Clears data from only the Math Calculations form
 const clearDataMath = () =>  document.getElementById('completedCalculations').innerHTML = "";

// Clears data from only the String Manipulation for
 const  clearDataString = () =>  document.getElementById('stringManipulated').innerHTML = "";
 
 // This function uses a for loop to calculate the factorial of a number.
 const calculateFactorial = (factorialInput) => {

     let num1 = parseInt(factorialInput);
     let num2 = num1;
     let factorial = num1;     

     if(num1 == 0)
     {
        document.getElementById('factorialCalculated').innerHTML += "<br>" + "The factorial of 0 is 1 <br /><br />";
     }

     else if (num1 > 0)
     {
       document.getElementById('factorialCalculated').innerHTML += "<br><br>" + "The factorial of " + num1 + " is: " + "<br />";

        for (let i = 1; i < num1; i++)
        {
            document.getElementById('factorialCalculated').innerHTML += num2 + " x ";
            num2 = num1 - i;
            factorial = factorial * i;
         
        }
     
        document.getElementById('factorialCalculated').innerHTML += + num2 + " = " + factorial + "<br /><br /><br />"
     
     }

     else
     {
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

         document.getElementById('completedCalculations').innerHTML += "<br>" + "The sum of the numbers is: " + sum + "<br />" + "The highest number is: " + high + "<br />" + "The lowest number is: " + low + "<br />" + "The average of the numbers is: " + sum / vectorLength + "<br /><br />";
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

        while(num <= 0)
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
            while(num <= 0)
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
             while(num <= 0)
            {
                num = prompt("You must enter a number greater than 0");
            }
         }
         while(num <= 0)
        {
            num = prompt("You must enter a number greater than 0");
        }
         if(num == null)
         {
             return;
         }
     }

     document.getElementById('stringManipulated').innerHTML += "<br>" + "The letter at position " + num + " is: " + word[num - 1] + "<br />";

    if(num == 1)
    {
        document.getElementById('stringManipulated').innerHTML += "The word " + num + " time is: ";

        for(let i = 0; i < num; i++)
        {
            document.getElementById('stringManipulated').innerHTML +=  word;
        }
    }

    if (num > 1 || num < 1)
    {
        document.getElementById('stringManipulated').innerHTML += "The word " + num + " times is: ";

        for(let i = 0; i < num; i++)
        {
            document.getElementById('stringManipulated').innerHTML += word;
        }
    }

    document.getElementById('stringManipulated').innerHTML += "<br>" + "The word backwards is: ";

    for(let i = word.length - 1; i >= 0; i--)
    {
        document.getElementById('stringManipulated').innerHTML += word[i];
    }

    document.getElementById('stringManipulated').innerHTML += "<br><br>";
 }
