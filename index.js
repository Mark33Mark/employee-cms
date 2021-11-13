
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
    console.log('Terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);
    
    process.stdout.columns = 150;
    process.stdout.rows = 65;

    process.stdout.on('resize', () => {console.log(process.stdout.columns, process.stdout.rows);});

    await inquirer
        .prompt( questions.main_menu )
        .then(( response ) => {
            switch ( response.main_menu ) {
                case "\tCreate a business unit?":
                    businessUnits.addBusinessUnit();
                    break;
                case "\tList all business units?":
                    businessUnits.listBusinessUnits();
                    break;
                case "\tDelete a business unit?":
                    businessUnits.deleteBusinessUnit();
                    break;
                case "\tCreate employee in database?":
                    employees.addEmployee();
                    break;
                case "\tList all employees?":
                    employees.listEmployees();
                    break;
                case "\tUpdate employee's position title?":
                    employees.updateEmployee();
                    break;
                case "\tUpdate employee's manager?":
                    employees.changeEmployeesManager();
                    break;
                case "\tDelete employee fom database?":
                    employees.deleteEmployee();
                    break;
                case "\tCreate a position title?":
                    positionTitles.addPostionTitle();
                    break;
                case "\tList all position titles?":
                    positionTitles.listPositionTitles();
                    break;
                case "\tDelete a position title?":
                    positionTitles.deletePostionTitle();
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