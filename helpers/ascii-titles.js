
/*
CONSOLE COLOR CODES
        FOREGROUND                          BACKGROUND                          GENERAL
        FgBlack     = "\x1b[30m"            BgBlack     = "\x1b[40m"            Reset       = "\x1b[0m"
        FgRed       = "\x1b[31m"            BgRed       = "\x1b[41m"            Bright      = "\x1b[1m"
        FgGreen     = "\x1b[32m"            BgGreen     = "\x1b[42m"            Dim         = "\x1b[2m" 
        FgYellow    = "\x1b[33m"            BgYellow    = "\x1b[43m"            Underscore  = "\x1b[4m"
        FgBlue      = "\x1b[34m"            BgBlue      = "\x1b[44m"            Blink       = "\x1b[5m"
        FgMagenta   = "\x1b[35m"            BgMagenta   = "\x1b[45m"            Reverse     = "\x1b[7m" 
        FgCyan      = "\x1b[36m"            BgCyan      = "\x1b[46m"            Hidden      = "\x1b[8m" 
        FgWhite     = "\x1b[37m"            BgWhite     = "\x1b[47m"
*/



// == App Banner =====================================================================================
// ASCII art generated using: https://textkool.com/en/test-ascii-art-generator
const bannerApp =

"\x1b[42m    ______                 _                                 _____ __  __   ____    \n\x1b[0m" +
"\x1b[42m   |  ____|               | |                               / ____|  \\/  |/ ____|   \n\x1b[0m" +
"\x1b[42m   | |__   _ __ ___  _ __ | | ___  _   _  ___  ___         | |    | \\  / | (___     \n\x1b[0m" +
"\x1b[42m   |  __| | '_ ` _ \\| '_ \\| |/ _ \\| | | |/ _ \\/ _ \\        | |    | |\\/| |\\___ \\    \n\x1b[0m" +
"\x1b[42m   | |____| | | | | | |_) | | (_) | |_| |  __/  __/        | |____| |  | |____) |   \n\x1b[0m" +
"\x1b[42m   |______|_| |_| |_| .__/|_|\\___/ \\__, |\\___|\\___|         \\_____|_|  |_|_____/    \n\x1b[0m" +
"\x1b[42m                    | |             __/ |                                           \n\x1b[0m" +
"\x1b[42m                    |_|            |___/                                            \n\x1b[0m" +
"\x1b[42m                                                                                    \n\x1b[0m";

// == Thanks ========================================================================================================

const bannerThanks =
"\x1b[36m\x1b[47m   _____ _                 _              \n\x1b[0m" + 
"\x1b[36m\x1b[47m   |_   _| |               | |            \n\x1b[0m" + 
"\x1b[35m\x1b[47m     | | | |__   __ _ _ __ | | _____      \n\x1b[0m" + 
"\x1b[34m\x1b[47m     | | | '_ \\ / _` | '_ \\| |/ / __|     \n\x1b[0m" +  
"\x1b[35m\x1b[47m     | | | | | | (_| | | | |   <\\__ \\     \n\x1b[0m" + 
"\x1b[36m\x1b[47m     \\_/ |_| |_|\\__,_|_| |_|_|\\_\\___/     \n\x1b[0m" + 
"\x1b[36m\x1b[47m                                          \n\x1b[0m" + 
"\x1b[36m\x1b[47m                                          \n\x1b[0m";      


// ==========================================================================================================

module.exports = {
    bannerApp,
    bannerThanks,
};