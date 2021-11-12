
const inquirer      = require( "inquirer" );
const questions     = require( "./inquirer_questions" );
const ascii_banners = require( "../helpers/ascii-titles" );

// ================================================================================================

exitApp = async () => {
    console.clear();
    await inquirer
        .prompt( questions.exit_application )
        .then((response) => {

            if ( response.exit_application === "\tNo" ) {
                app_navigator();
            }
            else {
                console.clear();
                console.log( ascii_banners.bannerThanks );
                console.info( "\nThanks for using Employee CMS.\n" );
                // Node normally exits with a 0 status code when no 
                // more async operations are pending.
                process.exit(0);
            }
        });
};

// ================================================================================================

module.exports = {
    exitApp,
};

/*
===================================================================================================
===================================================================================================
*/