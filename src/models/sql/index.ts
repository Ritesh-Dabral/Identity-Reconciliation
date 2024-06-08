import fs from 'fs'
import path from 'path'
const basename:string = path.basename(__filename);
import Sequelize from 'sequelize';

export default (sequelize)=>{
    let db: {'sequelize': any, 'Sequelize': any} = {'sequelize':{}, 'Sequelize':{}};
    // Dynamically register each models to DB
    const excludedFiles:string[] = ['index.js']
    const ff = fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && !excludedFiles.includes(file) && (file.slice(-3) === '.js');
    })
    ff.forEach(file => {
        const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        console.log(`Registered Model : "${model.name}"`)
    });

    Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    return db
};