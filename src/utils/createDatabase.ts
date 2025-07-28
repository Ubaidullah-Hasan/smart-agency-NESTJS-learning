/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Client } from 'pg';

export async function createDatabase() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || '5432'),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: 'postgres', // প্রথমে ডিফল্ট ডেটাবেসে কানেক্ট করবো
    });

    try {
        await client.connect();

        const dbName = process.env.DB_NAME; 
        console.log('Database Name:', dbName);
        const checkDbQuery = `SELECT 1 FROM pg_database WHERE datname = '${dbName}'`;
        const result = await client.query(checkDbQuery);

        if (result.rowCount === 0) {
            await client.query(`CREATE DATABASE "${dbName}"`);
            console.log(`✅ Database "${dbName}" created successfully.`);
        } else {
            console.log(`ℹ️ Database "${dbName}" already exists.`);
        }
    } catch (error) {
        console.error('❌ Error creating database:', error);
    } finally {
        await client.end();
    }
}
