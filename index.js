
require( "dotenv" ).config();

require( "console.table" );

const inquirer        = require( "inquirer" );

const questions       = require( "./src/inquirer_questions" );
const employees       = require( "./src/employees" );
const businessUnits   = require( "./src/businessUnits" );
const positionTitles  = require( "./src/positionTitles" );
const reports         = require( "./src/reports" );
const exit            = require ( "./src/exit" );

const ascii_banners   = require( "./helpers/ascii-titles" );

// ================================================================================================

app_navigator = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );
    // console.log('Your terminal size: ' + process.stdout.columns + 'x' + process.stdout.rows);
    
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
                    employees.updateEmployeePositionTitle();
                    break;
                case "\tUpdate employee's manager?":
                    employees.updateEmployeesManager();
                    break;
                case "\tDelete employee from database?":
                    employees.deleteEmployee();
                    break;
                case "\tCreate a position title?":
                    positionTitles.addPositionTitle();
                    break;
                case "\tList all position titles?":
                    positionTitles.listPositionTitles();
                    break;
                case "\tDelete a position title?":
                    positionTitles.deletePositionTitle();
                    break;
                case "\tManager's report lines":
                    reports.managersReport();
                    break;
                case "\tManager's salaries budget":
                    reports.salariesReportByManager();
                    break;
                case "\tBusiness unit salaries budget":
                    reports.businessUnitSalaries();
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