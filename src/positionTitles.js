
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

//=================================================================================================

listPositionTitles = async () => {
    await queries.listPositionTitles();
};

//=================================================================================================

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

//=================================================================================================

module.exports = {
    listPositionTitles,
    addPositionTitle,
};

/*===================================================================================================
===================================================================================================*/