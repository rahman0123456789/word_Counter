// Word count project.....

import inquirer from "inquirer";
 

async function wordCounter(wordCount: number) {
    

    const User = await inquirer.prompt({

        type: "input",
        name: "str",
        message: "Enter string to count words: "
    });
    
    for(let i=0; i<User.str.length; i++){
    
        if(User.str.charAt(i) == " "){
    
            wordCount++;
        }
    };
    
    console.log("Word count is = " + wordCount);
}
    
wordCounter(1);

  


