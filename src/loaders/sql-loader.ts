import { Sequelize } from "sequelize";
import config from '../config/index'
import SqlModel from '../models/sql/index'

const sequelize:Sequelize = new Sequelize(config.datastore.default.database, config.datastore.default.user, config.datastore.default.password,{
    'dialect': 'mysql',
    'host': config.datastore.default.host,
    'port': Number(config.datastore.default.port)
})

const registerModels = (sequelize:Sequelize):void=>{
    global.db = SqlModel(sequelize)
}

const sql = {
    'sequelize': sequelize,
    'registerModels': registerModels
}

export default sql;