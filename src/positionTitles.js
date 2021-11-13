
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

//== C-reate ===============================================================================================

let businessID;

addPositionTitle = async () => {
    const addPositionQuestions = [
        {
            message: "\t\nName of the new Position Title?",
            name: "positionTitle",
        },
        {
            message: "\t\nSalary package for the new position?  \t\n(no commas or currency symbols)\n",
            name: "positionSalary",
            validate: inputSalary => {
                            currencyFormat = /^[0-9]+$/.test( inputSalary );
                            if ( currencyFormat ) {
                                return true;
                            } else {
                                return false;
                            }
                        }
        },
        {
            type: "list",
            message: "\t\nSelect the Business Unit\n",
            name: "businessUnitName",
            page: 25,
            choices: async () => {
                                    let resultArray = [];
                                    let result = await queries.businessUnits_alpha();                                
                                    
                                    for( i = 0; i < result.length; i++ ){
                                    resultArray[i] = result[i].id + " "+ result[i].name;
                                    }
                                    return resultArray;
                                },
        },
        ];

        await inquirer
            .prompt(addPositionQuestions)
            .then(( response ) => {
                
                title    = response.positionTitle;
                salary   = response.positionSalary;
                business = response.businessUnitName.trim();
                });
            

                businessID = business.split(" ");

    await queries.addPositionTitle(title, salary, businessID[0]);

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};


//== R-ead ===============================================================================================

listPositionTitles = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );
    
    const result = await queries.listPositionTitles();
    console.table( "\nPosition Titles in your company\n", result );
    
    await inquirer
            .prompt( questions.return_main_menu )
            .then(( response ) => {
                let return_menu = response.return_main_menu; 
                if( return_menu === "\tYes") { app_navigator(); }
            });
};

//== U-pdate ===============================================================================================

// CRUD option not required.

//== D-elete ===============================================================================================

deletePositionTitle = async () => {
    const deletePositionQuestions = [
            {
                type: "list",
                message: "Choose the Position Title to delete.",
                name: "positionTitles",
                choices: async () => {
                                        let resultArray = [];
                                        let result = await queries.positionTitlesListConstruct();                                
                                        
                                        for( i = 0; i < result.length; i++ ){
                                        resultArray[i] =result[i].position_title;
                                        }
                                        return resultArray;
                },
            },
        ];

    await inquirer
        .prompt(deletePositionQuestions)
        .then((response) => {
            position_title = response.positionTitles;
        });

        console.log(position_title);

    const deleteBusinessQuestions = [
        {
            type: "list",
            message: `Select the business unit for the Position Title: ${ position_title} to be deleted.`,
            name: "businessUnitName",
            choices: async () => {
                                    let resultArray = [];
                                    let result = await queries.businessListConstruct( position_title );                                
                                    
                                    for( i = 0; i < result.length; i++ ){
                                    resultArray[i] =result[i].name;
                                    }
                                    return resultArray;
            },
        },
    ];

    await inquirer
        .prompt(deleteBusinessQuestions)
        .then((response) => {

            business = response.businessUnitName;
        });

    const deleteSalaryQuestions = [
        {
            type: "list",
            message: `Select the salary package for the Position Title: ${ position_title } from ${ business } to be deleted.`,
            name: "salaryPackage",
            choices: async () => {
                                    let resultArray = [];
                                    let result = await queries.salariesListConstruct( position_title, business );                                
                                    
                                    for( i = 0; i < result.length; i++ ){
                                    resultArray[i] =result[i].salary;
                                    }
                                    return resultArray;
            },
        },
    ];
    
    await inquirer
        .prompt(deleteSalaryQuestions)
        .then((response) => {

            salary = response.salaryPackage;
        });
    
    let positionTitleID = await queries.returnIDConstruct( position_title, salary, business );

    console.log( position_title, business, salary );
    await queries.deletePositionTitle( positionTitleID[0].id );
    
    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

module.exports = {
    listPositionTitles,
    addPositionTitle,
    deletePositionTitle,
};

/*===================================================================================================
===================================================================================================*/