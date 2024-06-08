import { Model, Sequelize  } from "sequelize";
import { ContactEnum } from "../../enums";

export default (sequelize:Sequelize, DataTypes) => {
    class Contact extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models:any) {
            // define association here
        }
    }
    Contact.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER ,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        linkedId: {
            type: DataTypes.INTEGER,
            defaultValue: null,
            allowNull: true
        },
        linkPrecedence: {
            type: DataTypes.ENUM(ContactEnum.primary, ContactEnum.secondary),
            allowNull: false,
            defaultValue: ContactEnum.primary
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null
        }
    }, {
        sequelize,
        modelName: 'contact',
        timestamps: true,
    })
    return Contact
}