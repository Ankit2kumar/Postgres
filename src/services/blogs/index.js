import express, { query } from 'express';

const blogsRoute = express.Router();

blogsRoute.get('/', async (req, res, next) => {
	try {
		const dbResponse = await query(
			'SELECT * FROM blogs ORDER BY created_at DESC'
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});
blogsRoute.get('/:id', async (req, res, next) => {
	try {
		const dbResponse = await query(
			'SELECT * FROM blogs ORDER BY created_at DESC'
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});

blogsRoute.put('/:id', async (req, res, next) => {
	try {
		const dbResponse = await query(
			'SELECT * FROM blogs ORDER BY created_at DESC'
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});

blogsRoute.post('/', async (req, res, next) => {
	try {
		const dbResponse = await query(
			'SELECT * FROM blogs ORDER BY created_at DESC'
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});

blogsRoute.delete('/', async (req, res, next) => {
	try {
		const dbResponse = await query(
			'SELECT * FROM blogs ORDER BY created_at DESC'
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});
export default blogsRoute;
