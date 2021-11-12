
require( "console.table" );
const mysql     = require( "../config/db.config" );


const queries   = { 
    
    businessUnits_alpha: async () => {
        const connection = await mysql;
        const  [ rows, fields ] = await connection.execute( "SELECT * FROM business_unit ORDER BY name ASC" );
        return rows;
    },

    businessUnits_id: async () => {
        const connection = await mysql;
        const  [ rows, fields ] = await connection.execute( "SELECT * FROM business_unit" );
        console.log(rows);
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

    listEmployees: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( "SELECT * FROM employee" );
        return rows;
    },

    listManager: async () => {
        const connection = await mysql;
        const [ rows, fields ]  = await connection.execute( "SELECT manager_id, first_name, last_name FROM employee WHERE manager_id IS NULL" );
        return rows;
    },

    addEmployee: async ( first_name, last_name, position_id, manager_id ) => {
        
        const connection = await mysql;
        const sql = `INSERT INTO employee (first_name, last_name, position_id, manager_id) VALUES (?, ?, ?, ?)`;
        
        await connection.execute( sql, [ first_name, last_name, position_id, manager_id ] );
        console.log( `${first_name} ${last_name} has been added to the database.` );   
    },

    updateEmployee: async ( id, role_id ) =>{
        const connection = await mysql;
        const sql = `UPDATE employee SET role_id=? WHERE id = ?`;
        await connection.execute(sql, [role_id, id]);
        console.log("Employee Updated!");
    },

    listPositionTitles: async () => {
        const connection = await mysql;
        const [rows, fields] = await connection.execute( "SELECT position_title from position_titles group by position_title" );
        console.log(rows);

        return rows;
    },

    addPositionTitle: async ( title, salary, business_unit_id ) =>  {
        
        const connection = await mysql;
        const sql = `INSERT INTO position_titles (position_title, salary, business_unit_id) VALUES (?, ?, ?)`;
        
        await connection.execute( sql, [ title, salary, business_unit_id ] );
        console.log( `The position: "${title}" has been added to the database` );  
    },

};

module.exports = queries;