
require( "console.table" );
const mysql     = require( "../config/db.config" );


const queries   = { 
    
    businessUnits_alpha: async () => {
        const connection = await mysql;
        const  [ rows, fields ] = await connection.execute( "SELECT * FROM business_unit GROUP BY name ORDER BY name ASC;" );
        return rows;
    },

    businessUnits_id: async () => {
        const connection = await mysql;
        const  [ rows, fields ] = await connection.execute( "SELECT * FROM business_unit GROUP BY name;" );
        return rows;
    },

    businessUnit_find_id: async ( businessUnit ) => {

        const connection = await mysql;
        const  [ rows, fields ] = await connection.execute( "SELECT id FROM business_unit WHERE name = (?);" [ businessUnit ]);
        return rows;
    },

    addBusinessUnit: async ( name ) => {
        const connection = await mysql;
        await connection.execute( "INSERT INTO business_unit (name) VALUES (?);", [ name ] );
        console.log( `\nI've added ${name} to your database.\n` );
    },

    deleteBusinessUnit: async ( name ) => {
        const connection = await mysql;
        await connection.execute( "DELETE FROM business_unit WHERE name = (?) LIMIT 1", [ name ]);
        console.log( `I've deleted the business unit: ${name} from your database.` );
    },

    employeePositionTitle: async ( business_unit_id) => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( "SELECT * FROM position_titles WHERE business_unit_id = (?) GROUP BY position_title", [ business_unit_id ]);
        return rows;
    },

    listEmployees: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( `SELECT employee.id, first_name, last_name, position_title, name, salary
                                                            FROM business_unit, position_titles, employee
                                                            WHERE business_unit.id = position_titles.business_unit_id
                                                            AND position_titles.id = employee.position_id
                                                            ORDER BY last_name ASC;` );
        return rows;
    },

    listEmployees_id: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( `SELECT employee.id, first_name, last_name, position_title, name, salary
                                                            FROM business_unit, position_titles, employee
                                                            WHERE business_unit.id = position_titles.business_unit_id
                                                            AND position_titles.id = employee.position_id
                                                            ORDER BY employee.id ASC;` );
        return rows;
    },

    listEmployees_position: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( `SELECT employee.id, first_name, last_name, position_title, name, salary
                                                            FROM business_unit, position_titles, employee
                                                            WHERE business_unit.id = position_titles.business_unit_id
                                                            AND position_titles.id = employee.position_id
                                                            ORDER BY position_title ASC;` );
        return rows;
    },

    listEmployees_business: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( `SELECT employee.id, first_name, last_name, position_title, name, salary
                                                            FROM business_unit, position_titles, employee
                                                            WHERE business_unit.id = position_titles.business_unit_id
                                                            AND position_titles.id = employee.position_id
                                                            ORDER BY name ASC;` );
        return rows;
    },

    listEmployees_salary: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( `SELECT employee.id, first_name, last_name, position_title, name, salary
                                                            FROM business_unit, position_titles, employee
                                                            WHERE business_unit.id = position_titles.business_unit_id
                                                            AND position_titles.id = employee.position_id
                                                            ORDER BY salary ASC;` );
        return rows;
    },

    listManager_employee: async () => {
        const connection = await mysql;
        const sql = "SELECT id, first_name, last_name FROM employee WHERE manager_id IS NULL ORDER BY last_name ASC;";
        const [ rows, fields ]  = await connection.execute( sql );
        return rows;
    },

    listManager: async ( id ) => {
        const connection = await mysql;
        const sql = "SELECT id, first_name, last_name FROM employee WHERE manager_id IS NULL AND id <> (?) ORDER BY last_name ASC;"
        const [ rows, fields ]  = await connection.execute( sql, [id]  );
        return rows;
    },

    updateEmployeesManager: async ( manager_id, employee_id ) => {
        const connection = await mysql;
        const sql = "UPDATE employee SET manager_id = (?) WHERE employee.id = (?);";
        await connection.execute(sql, [ manager_id, employee_id ]);
        if ( manager_id === null) {
            console.log(`\nEmployee with id ${employee_id} is now a manager.\n`); 
        } else {
            console.log(`\nEmployee with id ${employee_id} has had their report line (manager) updated in the database.\n`); 
        }
    },

    listSalaryPackages: async ( position ) => {
        const connection = await mysql;
        const sql = "SELECT id, salary FROM position_titles WHERE position_title = (?) ORDER BY salary ASC";
        const [ rows, fields ]  = await connection.execute( sql, [ position ] );
        return rows;
    },

    managerID: async ( first_name, last_name ) => {
        const connection = await mysql;
        const sql = "SELECT id FROM employee WHERE first_name = (?) and last_name= (?)";
        const [rows, fields] = await connection.execute( sql, [ first_name, last_name ] );
        return rows;
    },

    positionID: async ( salary, position_title ) => {
        const connection = await mysql;
        const sql = "SELECT id FROM position_titles WHERE salary=(?) and position_title = (?);";
        const [rows, fields] = await connection.execute( sql, [ salary, position_title ] );
        return rows;
    },

    addEmployee: async ( first_name, last_name, position_id, manager_id ) => {
        
        const connection = await mysql;
        const sql = "INSERT INTO employee (first_name, last_name, position_id, manager_id) VALUES (?, ?, ?, ?)";
        await connection.execute( sql, [ first_name, last_name, position_id, manager_id ] );
        if ( manager_id === null ) {
            console.log( `\n${first_name} ${last_name} has been added to the database \nas Manager (no assigned manager).` );
            } else {
            console.log( `\n${first_name} ${last_name} has been added to the database.` );
            }
    },

    updateEmployeePosition: async ( position_id, id ) =>{
        const connection = await mysql;
        const sql = "UPDATE employee SET position_id = (?) WHERE employee.id = (?);";
        await connection.execute(sql, [ position_id, id ]);
        console.log(`\nEmployee with id ${id} position title has been updated in the database.\n`);
    },
    
    findEmployeeSalary:  async ( id ) =>{
        const connection = await mysql;
        const sql = `SELECT salary, manager_id
                    FROM employee
                    INNER JOIN position_titles
                    ON employee.position_id = position_titles.id
                    WHERE employee.id=(?);`;
        const [rows, fields] = await connection.execute(sql, [ id ] );
        return rows;
    },

    getNewPositionID:   async ( position_title, salary ) =>{
        const connection = await mysql;
        const sql = `SELECT id FROM position_titles WHERE position_title = (?) AND salary = (?);`;
        const [rows, fields] = await connection.execute(sql, [ position_title, salary ] );
        return rows;
    },

    findEmployeeManager:  async ( id ) =>{
        const connection = await mysql;
        const sql = `SELECT first_name, last_name FROM employee WHERE employee.id = (?);`;
        const [rows, fields] = await connection.execute(sql, [ id ] );
        return rows;
    },

    listEmployeeForDeletion:  async ( id ) =>{
        const connection = await mysql;
        const sql = `SELECT employee.id, first_name, last_name
                        FROM employee
                        INNER JOIN business_unit
                        ON employee.position_id = business_unit.id
                        WHERE business_unit.id = (?)
                        ORDER BY employee.last_name ASC;`;
        const [rows, fields] = await connection.execute(sql, [ id ] );
        console.table("Employee List - from your filter selection", rows);
        return rows;
    },

    deleteEmployee: async ( id ) =>{
        const connection = await mysql;
        const sql = "DELETE FROM employee WHERE id = (?) LIMIT 1";
        await connection.execute(sql, [ id ] );
        console.log(`\nEmployee id ${id} has been deleted from the database.\n`);
    },

    listPositionTitles: async () => {
        const connection = await mysql;
        const [rows, fields] = await connection.execute( "SELECT id, position_title FROM position_titles GROUP BY position_title ORDER BY position_title ASC" );
        return rows;
    },

    addPositionTitle: async ( title, salary, business_unit_id ) =>  {
        
        const connection = await mysql;
        const sql = `INSERT INTO position_titles (position_title, salary, business_unit_id) VALUES (?, ?, ?);`;
        
        await connection.execute( sql, [ title, salary, business_unit_id ] );
        console.log( `\nThe position: "${title}" has been added to the database\n` );  
    },

    positionTitlesListConstruct: async () => {
        const connection = await mysql;
        const sql = `SELECT position_titles.id, position_title, salary, business_unit.name 
                    FROM position_titles
                    INNER JOIN business_unit
                    ON position_titles.business_unit_id = business_unit.id
                    GROUP BY position_title
                    ORDER BY position_title ASC;`;
        const [rows, fields] = await connection.execute( sql );
        return rows;
    },

    businessListConstruct: async ( position_title ) => {
        const connection = await mysql;
        const sql = `SELECT position_titles.id, position_title, salary, business_unit.name 
                    FROM position_titles
                    INNER JOIN business_unit
                    ON position_titles.business_unit_id = business_unit.id
                    WHERE position_title = (?)
                    GROUP BY business_unit.name
                    ORDER BY position_title ASC;`;
        const [rows, fields] = await connection.execute( sql, [ position_title ] );
        return rows;
    },

    salariesListConstruct: async ( position_title, name ) => {
        const connection = await mysql;
        const sql = `SELECT position_titles.id, position_title, salary, business_unit.name 
                    FROM position_titles
                    INNER JOIN business_unit
                    ON position_titles.business_unit_id = business_unit.id
                    WHERE position_title = (?) AND name = (?)
                    GROUP BY business_unit.name
                    ORDER BY position_title ASC;`;
        const [rows, fields] = await connection.execute( sql, [ position_title, name ] );
        return rows;
    },

    returnIDConstruct: async ( position_title, salary, name ) => {
        const connection = await mysql;
        const sql = `SELECT position_titles.id
                    FROM position_titles
                    INNER JOIN business_unit
                    ON position_titles.business_unit_id = business_unit.id
                    WHERE position_title = (?) AND salary = (?) AND name = (?)
                    GROUP BY business_unit.name
                    ORDER BY position_title ASC;`;
        const [rows, fields] = await connection.execute( sql, [ position_title, salary, name ] );
        return rows;
    },

    deletePositionTitle: async ( id ) =>  {
        
        const connection = await mysql;
        const sql = `DELETE FROM position_titles WHERE id = (?) LIMIT 1`;       
        await connection.execute( sql, [ id ] );
        console.log( `The position id: "${id}" has been deleted from the database` );  
    },

    managersEmployeeReports: async ( ) => {
        const connection = await mysql;
        const sql = `SELECT ifnull(manager_id, "Manager") as manager_id, first_name, last_name, salary
                        FROM business_unit, position_titles, employee
                        WHERE business_unit.id = position_titles.business_unit_id
                            AND position_titles.id = employee.position_id
                        ORDER BY manager_id ASC;`;
        const [rows, fields] = await connection.execute( sql );
        return rows;
    },

    managersReportSalaries: async ( ) => {
        const connection = await mysql;
        const sql = `SELECT manager_id, first_name, last_name, sum(salary)
                        FROM business_unit, position_titles, employee
                        WHERE business_unit.id = position_titles.business_unit_id
                            AND position_titles.id = employee.position_id
                        GROUP BY manager_id
                        ORDER BY last_name ASC`;
        const [rows, fields] = await connection.execute( sql );
        return rows;
    },
    salariesByBusinessUnit: async ( ) => {
        const connection = await mysql;
        const sql = `SELECT name, sum(salary)
                        FROM business_unit, position_titles, employee
                        WHERE business_unit.id = position_titles.business_unit_id
                            AND position_titles.id = employee.position_id
                        GROUP BY name
                        ORDER BY name ASC;`;
        const [rows, fields] = await connection.execute( sql );
        return rows;
    },
    tallyOfBusinessOverheads: async ( ) => {
        const connection = await mysql;
        const sql = `SELECT count(employee.id), sum(salary)
                    FROM business_unit, position_titles, employee
                    WHERE business_unit.id = position_titles.business_unit_id
                        AND position_titles.id = employee.position_id;`;
        const [rows, fields] = await connection.execute( sql );
        return rows;
    },
};

module.exports = queries;