const inquirer      = require( "inquirer" );
const queries       = require( "../helpers/sql_queries" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

//=================================================================================================

listBusinessUnits = async () => {
    
    console.clear();
    console.log( ascii_banners.bannerApp );

    const result = await queries.businessUnits_alpha();
    console.table( "\nYour Business Units (sorted by name).\n", result );

    await inquirer
        .prompt( questions.listBusinessUnit_sortOrder )
        .then(( response ) => {
            let return_menu = response.listBusinessUnit_sortOrder;
            if( return_menu === "\t>> Change sort column to Business Unit / ID?"){ listBusinessUnits_id(); }    
            if( return_menu === "\t>> Return to <Main Menu> ?") { app_navigator(); }
        });
};

//=================================================================================================

listBusinessUnits_id = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );

    const result = await queries.businessUnits_id();
    console.table( "\nYour Business Units (sorted by id).\n", result );

    await inquirer
        .prompt( questions.listBusinessUnit_sortOrder )
        .then(( response ) => {
            let return_menu = response.listBusinessUnit_sortOrder;
            if( return_menu === "\t>> Change sort column to Business Unit / ID?"){ listBusinessUnits(); }    
            if( return_menu === "\t>> Return to <Main Menu> ?") { app_navigator(); }
        });

};

//=================================================================================================

addBusinessUnit = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );

    let businessUnit;

    await inquirer
        .prompt( questions.name_businessUnit )
        .then(( response ) => businessUnit = response.name_businessUnit);

    await queries.addBusinessUnit( businessUnit );

    await inquirer
        .prompt( questions.return_main_menu )
        .then(( response ) => {
        let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

deleteBusinessUnit = async () => {

    console.clear();
    console.log( ascii_banners.bannerApp );
    
    let businessUnit;

    await inquirer
        .prompt( questions.delete_businessUnit )
        .then(( response ) => businessUnit = response.delete_businessUnit );

    await queries.deleteBusinessUnit( businessUnit );

    await inquirer
        .prompt( questions.return_main_menu )
        .then(( response ) => {
            let return_menu = response.return_main_menu; 
        if( return_menu === "\tYes") { app_navigator(); }
    });
};

//=================================================================================================

module.exports = {
    listBusinessUnits,
    addBusinessUnit,
    deleteBusinessUnit,
};

/*===================================================================================================
===================================================================================================*/