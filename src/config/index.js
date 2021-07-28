module.exports = {
  dialect: "mysql",
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: "veiculos",
  define: {
    timestamps: true,
    underscored: true,
  },
  timezone: '-03:00'
};