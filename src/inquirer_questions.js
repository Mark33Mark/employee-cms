
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );


// === Main, Exit and Return to Main Menu =========================================================

const main_menu = {
    type:       "list",
    message:    "< Main Menu >",
    name:       "main_menu",
    pageSize:   30,
    choices: [
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Business Units =================  \x1b[0m\n"),
        "\tList all business units?", 
        "\tAdd a business unit?", 
        "\tDelete a business unit?", 
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Employees =======================  \x1b[0m\n"),
        "\tView all employees?",
        "\tAdd an employee?",
        "\tDelete an employee?", 
        "\tUpdate employee's position title?",
        "\tChange employee's manager?",
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Position Titles =================  \x1b[0m\n"),
        "\tView all position titles?", 
        "\tAdd a position title?", 
        new inquirer.Separator("\n\x1b[47m\x1b[30m = Reports =========================  \x1b[0m\n"),
        "\tManager's report line.", 
        "\tEmployees organised by business unit.",
        "\tBusiness unit salaries overhead.",
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
    message:    "\tChange the column sort or return to <Main Menu>?\n",
    name:       "listBusinessUnit_sortOrder",
    choices:    [ 
                "\tChange sort column to Business Unit / ID?", 
                "\tReturn to <Main Menu> ?", 
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
                                    let result = await queries.listPositionTitles();
                                    return result;
                                }
    },
    {
        type:     "list",
        message:  "\t\nEmployee's manager?\n",
        name:     "manager",
        pageSize:   20,
        choices:  async () => { 
                                let result = await queries.listManager(); 
                                return result; 
                            },
    }
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
};

/*===================================================================================================
===================================================================================================*/