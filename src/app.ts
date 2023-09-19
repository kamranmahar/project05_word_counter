import inquirer from "inquirer";




let execute=async()=>{


    let {para}= await inquirer.prompt([{
                name:"para",
                type:'input',
                message:"Please enter a english paragraph",
            
            },

    ]);
    let word:string[]=(<string>para).split(' ');
    let  countingCharacters=(<string>para).length;
    console.log(`Current english paragraph contain words ${word.length} and Characters ${countingCharacters} `);



    let {again} = await inquirer.prompt([{
        name:"again",
        type:'checkbox',
        message:"Do you want to Continue?" ,  
        choices:[
            "Yes","No"
        ],
        default:false,
    }]);

    if(again=="Yes")
    {
        execute();     
    }
}

execute();