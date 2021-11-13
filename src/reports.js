
const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

//=================================================================================================

managersReport = async () => {
    console.clear();
    console.log( ascii_banners.bannerApp );

    console.table(await queries.managersEmployeeReports());    

    console.table(await queries.tallyOfBusinessOverheads());  

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

businessUnitSalaries = async () => {
    console.clear();
    console.log( ascii_banners.bannerApp );

    console.table(await queries.salariesByBusinessUnit());    

    console.table(await queries.tallyOfBusinessOverheads());    

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });

};

//=================================================================================================

salariesReportByManager = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );

    console.table(await queries.managersReportSalaries());    

    console.table(await queries.tallyOfBusinessOverheads());  

    await inquirer
    .prompt( questions.return_main_menu )
    .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });

};

//=================================================================================================

module.exports = {
    managersReport,
    salariesReportByManager,
    businessUnitSalaries,
};

/*===================================================================================================
===================================================================================================*/