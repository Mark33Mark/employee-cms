
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
        console.log(businessUnit);
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
        const [ rows, fields ]  = await connection.execute( "SELECT * FROM employee" );
        return rows;
    },

    listManager: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( "SELECT manager_id, first_name, last_name FROM employee WHERE manager_id IS NULL ORDER BY last_name ASC" );
        return rows;
    },

    listSalaryPackages: async ( position ) => {
        const connection = await mysql;
        const sql = "SELECT salary FROM position_titles WHERE position_title = (?) ORDER BY salary ASC";
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
        console.log( `${first_name} ${last_name} has been added to the database.` );   
    },

    updateEmployee: async ( position_id, manager_id, id ) =>{
        const connection = await mysql;
        const sql = "UPDATE employee SET position_id=?, manager_id=? WHERE id = ?;";
        await connection.execute(sql, [ position_id, manager_id, id ]);
        console.log(`Employee id ${id} has been updated in the database.`);
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
        console.log(`Employee id ${id} has been deleted from the database.`);
    },

    listPositionTitles: async () => {
        const connection = await mysql;
        const [rows, fields] = await connection.execute( "SELECT id, position_title FROM position_titles GROUP BY position_title ORDER BY position_title ASC" );
        return rows;
    },

    addPositionTitle: async ( title, salary, business_unit_id ) =>  {
        
        const connection = await mysql;
        const sql = `INSERT INTO position_titles (position_title, salary, business_unit_id) VALUES (?, ?, ?)`;
        
        await connection.execute( sql, [ title, salary, business_unit_id ] );
        console.log( `The position: "${title}" has been added to the database` );  
    },

    deletePositionTitle: async ( id ) =>  {
        
        const connection = await mysql;
        const sql = `DELETE FROM position_titles WHERE id = (?) LIMIT 1`;
        
        await connection.execute( sql, [ id ] );
        console.log( `The position: "${title}" has been added to the database` );  
    },
};

module.exports = queries;