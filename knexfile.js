// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // db driver
    useNullAsDefault: true, // needed for sqlite
    connection: {
      // could be an obj or string
      filename: './data/schemes.db3',
    },
    useNullAsDefault: true, // Only for SQLite
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  }, 
};
