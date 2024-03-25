import 'dotenv/config'; // Assurez-vous que cette ligne est au début du fichier
import neo4j from 'neo4j-driver';

// Get values from .env file
const uri = process.env.NEO4J_URI || '';
const user = process.env.NEO4J_USER || '';
const password = process.env.NEO4J_PASSWORD || '';

// Check if the necessary environment variables are set
if (!uri || !user || !password) {
  throw new Error('Missing required environment variables: NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD');
}

// Create a new Neo4j driver instance
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));

export default driver;
