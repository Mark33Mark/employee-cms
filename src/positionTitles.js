
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

//== C-reate ===============================================================================================

addPositionTitle = async () => {
    const roleQs = [
        {
            type: `input`,
            message: `What would you like to call the new role?`,
            name: `roleTitle`,
        },
        {
            type: `input`,
            message: `Please enter the salary of this role (without commas or dollar signs).`,
            name: `roleSalary`,
        },
        {
            type: `list`,
            message: `Please select the associated department for this role.`,
            name: `deptName`,
            choices: namesDept,
        }];

    let title;
    let salary;
    let department_id;

    await inquirer
        .prompt(roleQs)
        .then((response) => {
            title = response.roleTitle;
            salary = response.roleSalary;
            for (let i = 0; i < listDept.length; i++) {
                if (response.deptName === listDept[i].name) {
                    department_id = listDept[i].id;
                }
            }
        });
    await queries.addRole(title, salary, department_id);
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
    ;
};

//== U-pdate ===============================================================================================

// CRUD option not required.

//== D-elete ===============================================================================================

deletePositionTitle = async () => {
    const roleQs = [
        {
            type: `input`,
            message: `What would you like to call the new role?`,
            name: `roleTitle`,
        },
        {
            type: `input`,
            message: `Please enter the salary of this role (without commas or dollar signs).`,
            name: `roleSalary`,
        },
        {
            type: `list`,
            message: `Please select the associated department for this role.`,
            name: `deptName`,
            choices: namesDept,
        }];

    let title;
    let salary;
    let department_id;

    await inquirer
        .prompt(roleQs)
        .then((response) => {
            title = response.roleTitle;
            salary = response.roleSalary;
            for (let i = 0; i < listDept.length; i++) {
                if (response.deptName === listDept[i].name) {
                    department_id = listDept[i].id;
                }
            }
        });
    await queries.addRole(title, salary, department_id);
};

//=================================================================================================

module.exports = {
    listPositionTitles,
    addPositionTitle,
};

/*===================================================================================================
===================================================================================================*/