# Neo4j Graph Query Agent Skill

This custom agent skill for AnythingLLM interfaces with a Neo4j graph database, allowing you to execute Cypher queries and manage data stored in the database.

## Usage in AnythingLLM

Invoke this skill by providing Cypher queries. For example:

"@agent Find all nodes in the graph"

The agent will execute the query on the Neo4j database and return the results.

## Requirements

- AnythingLLM v1.2.2 or later
- Node.js 18+ for local testing
- Neo4j database
- Internet connection to access the Neo4j database

## Note

This skill interacts directly with your Neo4j database. Always be cautious when executing queries that modify data, and ensure proper authentication and authorization are in place.

## Installation in AnythingLLM

After creating all the files:

1. Ensure the neo4j-graph-query folder is in your AnythingLLM storage directory under plugins/agent-skills/.
2. Restart AnythingLLM or reload the page to load the new custom agent skill.

## Usage in AnythingLLM

Once installed, you can use the Neo4j Graph Query interface in your conversations with AnythingLLM. For example:

```
User: "@agent Find all nodes with the label 'Person'"
```

The agent will then use the custom skill to execute the Cypher query on your Neo4j database and provide the results.

## Examples

Here are some example queries you can try:

1. Find all nodes in the graph:
   "@agent Find all nodes in the graph"

2. Create a new node and verify:
   "@agent Create a new node with label 'Person' and name 'John Doe', then verify it exists"

3. Update a node property and verify:
   "@agent Update the 'age' property of the 'Person' node with name 'John Doe' to 30, then verify the change"

4. Create a relationship and verify:
   "@agent Create a 'KNOWS' relationship between two 'Person' nodes, then verify it exists"

5. Delete a node and its relationships:
   "@agent Delete the 'Person' node with name 'John Doe' and all its relationships"

## Conclusion

You have now set up a custom agent skill for AnythingLLM that interfaces with a Neo4j graph database. This skill allows the AI to execute Cypher queries and manage data in your Neo4j database. Remember to use this skill responsibly and always verify any data modifications before executing them.