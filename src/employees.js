
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

let employeeList  = [],
    employeeNames = [];

//=================================================================================================

listEmployees = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );
    
    const result = await queries.listEmployees();
    console.table( "\nYour Employees.\n", result );
    
    await inquirer
            .prompt( questions.return_main_menu )
            .then(( response ) => {
                let return_menu = response.return_main_menu; 
                if( return_menu === "\tYes") { app_navigator(); }
            });
};

//=================================================================================================

addEmployee = async () => {

    let first_name, last_name, position_id, manager_id;

    console.clear();
    console.log( ascii_banners.bannerApp );

    await inquirer
            .prompt( questions.employeeQuestions )
            .then((response) => {
                first_name = response.firstName.trim();
                last_name = response.lastName.trim();
            });

    await queries.addEmployee( first_name, last_name, position_id, manager_id );
    
    await inquirer
            .prompt( questions.return_main_menu )
            .then(( response ) => {
                let return_menu = response.return_main_menu; 
                if( return_menu === "\tYes") { app_navigator(); }
            });

};

//=================================================================================================

updateEmployee = async () => {
    const employeeUpdateQs = [
        {
            type: `list`,
            message: `Which employee would you like to update?`,
            name: `employee`,
            choices: employeeNames,
        },
        {
            type: `list`,
            message: `Please select this employee's new role.`,
            name: `role`,
            choices: roleTitles,
        }];

    let id;
    let role_id;

    await inquirer
        .prompt( employeeUpdateQs )
        .then((response) => {
            console.log(response);
        });

    await queries.updateEmployee( id, role_id );

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

module.exports = {
    listEmployees,
    addEmployee,
    updateEmployee,
};

/*===================================================================================================
===================================================================================================*/