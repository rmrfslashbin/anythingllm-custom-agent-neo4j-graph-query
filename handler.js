const neo4j = require('neo4j-driver');

module.exports.runtime = {
  handler: async function ({ query }) {
    const callerId = `${this.config.name}-v${this.config.version}`;
    try {
      this.introspect(`${callerId} called with query: ${query}`);

      const driver = neo4j.driver(
        this.runtimeArgs["NEO4J_URI"],
        neo4j.auth.basic(this.runtimeArgs["NEO4J_USER"], this.runtimeArgs["NEO4J_PASSWORD"])
      );

      const session = driver.session();
      const result = await session.run(query);

      await session.close();
      await driver.close();

      const records = result.records.map(record => {
        return record.toObject();
      });

      return JSON.stringify(records);
    } catch (e) {
      this.introspect(`${callerId} failed to execute query: ${query}. Reason: ${e.message}`);
      this.logger(`${callerId} failed to execute query: ${query}`, e.message);
      return `The Neo4j query failed to execute. Error: ${e.message}`;
    }
  }
};