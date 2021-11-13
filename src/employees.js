
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );


//=================================================================================================

listEmployees = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );
    
    const result = await queries.listEmployees();
    console.table( "\nYour Employees\n", result );
    
    await inquirer
            .prompt( questions.return_main_menu )
            .then(( response ) => {
                let return_menu = response.return_main_menu; 
                if( return_menu === "\tYes") { app_navigator(); }
            });
};

//=================================================================================================

let first_name_input, last_name_input, position_title_selected, manager_id_selected;
let managerName, salaryPackage, salarySelected, getID;

addEmployee = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );

    await inquirer
            .prompt( questions.employeeQuestions )
            .then((response) => {
                
                first_name_input = response.firstName.trim();
                last_name_input = response.lastName.trim();
                position_title_selected = response.position_title.trim();
                managerName = response.manager;
            });

    // Unsure if there is a better way to do this?
    getID = await getID( managerName );
    manager_id_selected = getID[0].id;

    await inquirer
        .prompt([
            {
                type:       "list",
                message:    `\t\nSelect ${ first_name_input }'s salary package for ${ position_title_selected } ?`,
                name:       "salaryPackage",
                pageSize:   30,
                choices:    async () => {
                                let resultArray = [];
                                let result = await queries.listSalaryPackages( position_title_selected );
                                for( i = 0; i < result.length; i++ ){
                                    resultArray[i] = result[i].salary;
                                    resultArray[i] = "$" + resultArray[i].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                }
                                return resultArray;
                            },
            }
        ])
        .then(( response ) => {
                salaryPackage = response;
                salarySelected = salaryPackage.salaryPackage;
                salarySelected = parseInt(salarySelected.replace("$","").replace(",",""));
            });

        let id_selected = await getPositionID( salarySelected, position_title_selected );
    
    await queries.addEmployee( first_name_input, last_name_input, id_selected, manager_id_selected );
    
    await inquirer
            .prompt( questions.return_main_menu )
            .then(( response ) => {
                let return_menu = response.return_main_menu; 
                if( return_menu === "\tYes") { app_navigator(); }
            });

};

//=================================================================================================

let businessUnitSelected, employeePostionTitleSelected, businessUnitID, employeeID;

updateEmployee = async () => {

    let confirm_selection;

    await inquirer
        .prompt(questions.employeeBusinessUnit)
        .then(( response ) => {
            businessUnitSelected = response.business_unit;
            businessUnitID = businessUnitSelected.split(" ");
        });

        await inquirer
        .prompt(questionEmployeePositionTitle)               
        .then(( response ) => {
            employeePostionTitleSelected = response.select_position_title;  
        });

        await inquirer
        .prompt(questionEmployeeSelection)
        .then(( response ) => {
                employeeID = response.delete_employee.split(" ");
                employeeID = parseInt(employeeID[0]);
                // console.log(parseInt(employeeID[0]) + "  " + typeof parseInt(employeeID[0]));
        });

        await inquirer
        .prompt( [
            {
                type:       "list",
                message:    `\t\nProceed with changing employee ID ${employeeID}'s position title?
The employee is currently allocated to the business unit: ${businessUnitID} as: ${employeePostionTitleSelected}\n`,
                name:       "confirm_selection",
                choices:    [ "\tYes","\tNo thanks, take me to the <Main Menu>" ],
            }
        ])
        .then(( response ) => {
            confirm_selection = response.confirm_selection; 
        });

        if( confirm_selection === "\tNo thanks, take me to the <Main Menu>") { return app_navigator();}

        console.log("Business Unit ID: " + businessUnitID[0] + "\nEmployee ID:  " + employeeID + "\nEmployee Position Title: " + employeePostionTitleSelected);
        
        console.log("\nSelect the new position title from the following list.");


        
        // await queries.updateEmployee( businessUnitChange, managerChange, employeeID );

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

deleteEmployee = async () => {
    
    await inquirer
        .prompt(questions.employeeBusinessUnit)
        .then(( response ) => {
            businessUnitSelected = response.business_unit;
            businessUnitID = businessUnitSelected.split(" ");
        });

        await inquirer
        .prompt(questionEmployeePositionTitle)               
        .then(( response ) => {
            employeePostionTitleSelected = response.select_position_title;  
        });

        await inquirer
        .prompt(questionEmployeeSelection)
        .then(( response ) => {
                employeeID = response.delete_employee.split(" ");
                employeeID = parseInt(employeeID[0]);
                // console.log(parseInt(employeeID[0]) + "  " + typeof parseInt(employeeID[0]));
        });

    await queries.deleteEmployee( employeeID );

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

getID = async ( managerName ) => { 
                                            
    let firstLast =  managerName.split(" ");
    let first_name = firstLast[0];
    let last_name = firstLast[1];
    
    let managerID = await queries.managerID( first_name, last_name );

    return managerID;
};

//=================================================================================================

getBusinessID = async ( businessUnit ) => {
    let unitID = await queries.businessUnit_find_id( businessUnit );
    console.log(unitID);
    return unitID;
};

//=================================================================================================

getPositionID = async ( salaryPackage, position_title_selected ) => { 
    let positionID = await queries.positionID( salaryPackage, position_title_selected );    
    return positionID[0].id;
};

//=================================================================================================

const questionEmployeePositionTitle = [
    {
    type: "list",
    message: `\nThe employee's position title?\n`,
    name: "select_position_title",
    choices:    async () => {   
                            let resultArray = [];
                    let result = await queries.employeePositionTitle( businessUnitID[0] ); 
                    
                    for( i = 0; i < result.length; i++ ){
                        resultArray[i] = result[i].position_title;
                    }  
                    return resultArray; 
                },
    },
];

//=================================================================================================

const questionEmployeeSelection = [
    {
        type: "list",
        message: `\nSelect the employee to update or remove from the database?\n`,
        name: "delete_employee",
        choices:    async () => {   
                                let resultArray = [];
                                let result = await queries.listEmployeeForDeletion( businessUnitID[0] ); 
                                
                                for( i = 0; i < result.length; i++ ){
                                    resultArray[i] = result[i].id + " " + result[i].first_name + " " + result[i].last_name;
                                }  
                                return resultArray; 
                            },
    },
];

//=================================================================================================

module.exports = {
    listEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};

/*===================================================================================================
===================================================================================================*/