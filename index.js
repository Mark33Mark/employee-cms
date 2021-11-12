
require( "dotenv" ).config();

require( "console.table" );

const inquirer        = require( "inquirer" );

const questions       = require( "./src/inquirer_questions" );
const employees       = require( "./src/employees" );
const businessUnits   = require( "./src/businessUnits" );
const positionTitles  = require( "./src/positionTitles" );
const exit            = require ( "./src/exit" );

const ascii_banners   = require( "./helpers/ascii-titles" );

// ================================================================================================

app_navigator = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );

    await inquirer
        .prompt( questions.main_menu )
        .then(( response ) => {
            switch ( response.main_menu ) {
                case "\tList all business units?":
                    businessUnits.listBusinessUnits();
                    break;
                case "\tAdd a business unit?":
                    businessUnits.addBusinessUnit();
                    break;
                case "\tDelete a business unit?":
                    businessUnits.deleteBusinessUnit();
                    break;
                case "\tView all employees?":
                    employees.listEmployees();
                    break;
                case "\tAdd an employee?":
                    employees.addEmployee();
                    break;
                case "\tDelete an employee?":
                    employees.deleteEmployee();
                    break;
                case "\tUpdate employee's position title?":
                    employees.updateEmployee();
                    break;
                case "\tChange employee's manager?":
                    employees.changeEmployeesManager();
                    break;
                case "\tView all position titles?":
                    positionTitles.listPositionTitles();
                    break;
                case "\tAdd a position title?":
                    positionTitles.addPostionTitle();
                    break;
                case "\tManager's report line.":
                    reports.addPostionTitle();
                    break;
                case "\tEmployees organised by business unit.":
                    reports.addPostionTitle();
                    break;
                case "\tBusiness unit salaries overhead.":
                    reports.addPostionTitle();
                    break;
                case "\t< Exit Employee CMS >\n":
                    exit.exitApp();
                    break;
                default:
                    console.log("You've not selected one of the options, please try again.");
                    exit.exitApp();
                    break;
            }
        });
};

// ================================================================================================

app_navigator();

/*
===================================================================================================
===================================================================================================
*/