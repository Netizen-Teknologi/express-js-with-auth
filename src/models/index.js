const dbConfig = require('../configs/db.config');
const Sequelize = require('sequelize');
const usersModel = require('./users.model');
const error_logsModel = require('./error_logs.model');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAlias: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define semua models yang ada pada aplikasi
// db.users = require('./users.model')(sequelize, Sequelize);
db.users = usersModel(sequelize, Sequelize);
db.error_logs = error_logsModel(sequelize, Sequelize);
db.vendors = require('./vendors.model')(sequelize, Sequelize);
db.vendor_products = require('./vendor_products.model')(sequelize, Sequelize);
db.products = require('./products.model')(sequelize, Sequelize);
module.exports = db;