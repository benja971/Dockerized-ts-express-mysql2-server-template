import sequelize from './Sequelize';
import User from './User';

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

sequelize.sync({ force: true }).then(() => {
	console.log('Database & tables created!');

	// Table created
	return User.create({
		name: 'John',
		preferredName: 'Johnny',
	});
});
