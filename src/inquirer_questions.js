
const inquirer          = require( "inquirer" );
const queries           = require( "../helpers/sql_queries" );

// === Main, Exit and Return to Main Menu =========================================================

const main_menu = {
    type:       "list",
    message:    "< Main Menu >",
    name:       "main_menu",
    pageSize:   35,
    choices: [
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Business Units =================  \x1b[0m\n"),
        "\tCreate a business unit?", 
        "\tList all business units?", 
        "\tDelete a business unit?", 
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Employees =======================  \x1b[0m\n"),
        "\tCreate employee in database?",
        "\tList all employees?",
        "\tUpdate employee's position title?",
        "\tUpdate employee's manager?",
        "\tDelete employee from database?", 
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Position Titles =================  \x1b[0m\n"),
        "\tCreate a position title?", 
        "\tList all position titles?", 
        "\tDelete a position title?", 
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Reports =========================  \x1b[0m\n"),
        "\tManager's report lines", 
        "\tManager's salaries budget",
        "\tBusiness unit salaries budget",
        new inquirer.Separator("\n\x1b[43m\x1b[30m = Exit ============================  \x1b[0m\n"),
        "\t< Exit Employee CMS >\n"
    ],
};

const exit_application = {
    type:       "list",
    message:    "\tExit Employee CMS?\n",
    name:       "exit_application",
    choices:    [ "\tYes", "\tNo" ],
};

const return_main_menu = {
    type:       "list",
    message:    "\t\n\nReturn to <Main Menu> ?\n",
    name:       "return_main_menu",
    choices:    [ "\tYes" ],
};

// === Business Units =============================================================================

const name_businessUnit = {
    message:    "\tName of the new business unit?\n",
    name:       "name_businessUnit",
};

const delete_businessUnit = {
    type:       "list",
    message:    "\tSelect the business unit you would like to delete?",
    name:       "delete_businessUnit",
    pageSize:   20,
    choices:    async () => { 
                                let result = await queries.businessUnits_id(); 
                                return result; 
                            },
};

const listBusinessUnit_sortOrder = {
    type:       "list",
    message:    "\t\n",
    name:       "listBusinessUnit_sortOrder",
    choices:    [ 
                "\t>> Change sort column to Business Unit / ID?", 
                "\t>> Return to <Main Menu> ?", 
            ],
};

// === Employees ===================================================================================

const employeeQuestions = [
    {
        message: "\t\nNew Employee's first name?",
        name:    "firstName",
    },
    {
        message: "\t\nNew employee's last name?",
        name:    "lastName",
    },
    {
        type:       "list",
        message:    "\t\nEmployee's position title?",
        name:       "position_title",
        pageSize:   20,
        choices:    async () => {
                                    let resultArray = [];
                                    let result = await queries.listPositionTitles();                                
                                        for( i = 0; i < result.length; i++ ){
                                            resultArray[i] = result[i].position_title;
                                        }
                                    return resultArray;
                                },
    },
    {
        type:     "list",
        message:  "\t\nEmployee's manager?\n",
        name:     "manager",
        pageSize:   30,
        choices:  async () => { 
                                let resultArray = ["---------------","no manager / contractor","---------------"];
                                let result = await queries.listManager_employee(); 
                                    
                                for( i = 0; i < result.length; i++ ){
                                    resultArray[i+3] = result[i].first_name+" "+result[i].last_name;
                                }                   
                                return resultArray; 
                            },
    },
];

const employee_menu_options = {
    type:       "list",
    message:    "\t\n\nSelect a display option ?\n",
    name:       "employee_menu_options",
    page:       25,
    choices:    [ 
                    new inquirer.Separator("\n\x1b[47m\x1b[30m = Table Sort Options ======  \x1b[0m\n"),          
                    "\tLast Name (default)",
                    "\tEmployee ID",
                    "\tPosition Title",
                    "\tBusiness Unit",
                    "\tSalary",

                    new inquirer.Separator("\n\x1b[43m\x1b[30m = Exit =====================  \x1b[0m\n"),          
                    "\tReturn to <Main Menu>\n" ],
};

const employeeBusinessUnit = [
    {
        type: "list",
        message: "\t\nWhich business unit is the employee from?",
        name: "business_unit",
        choices:    async () => { 
                                let resultArray=[];
                                let result = await queries.businessUnits_id(); 

                                for( i = 0; i < result.length; i++ ){
                                    resultArray[i] = result[i].id+" "+result[i].name;
                                }                   
                                return resultArray; 
                            },
    },
];

// === Position Titles ===================================================================================


// ================================================================================================

module.exports = {
    main_menu,
    exit_application,
    return_main_menu,
    name_businessUnit,
    delete_businessUnit,
    listBusinessUnit_sortOrder,
    employeeQuestions,
    employee_menu_options,
    employeeBusinessUnit,

};

/*===================================================================================================
===================================================================================================*/