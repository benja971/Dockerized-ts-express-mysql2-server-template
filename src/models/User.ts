import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import {
	HasManyGetAssociationsMixin,
	HasManyAddAssociationMixin,
	HasManyHasAssociationMixin,
	Association,
	HasManyCountAssociationsMixin,
	HasManyCreateAssociationMixin,
} from 'sequelize';
import { sequelize } from './';

class User extends Model {
	public id!: number; // Note that the `null assertion` `!` is required in strict mode.
	public name!: string;
	public preferredName!: string | null; // for nullable fields

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;

	// Since TS cannot determine model association at compile time
	// we have to declare them here purely virtually
	// these will not exist until `Model.init` was called.
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: new DataTypes.STRING(128),
			allowNull: false,
		},
		preferredName: {
			type: new DataTypes.STRING(128),
			allowNull: true,
		},
	},
	{
		sequelize,
		tableName: 'users',
	},
);
