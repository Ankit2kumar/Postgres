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
			`SELECT * FROM blogs WHERE blog_id=${req.params.id}`
		);
		res
			.status(dbResponse ? 200 : 404)
			.send(dbResponse ? dbResponse : { error: 'student not found' });
	} catch (error) {
		res.status(500).send({ error });
	}
});

blogsRoute.put('/:id', async (req, res, next) => {
	try {
		const {
			category,
			title,
			cover,
			read_time_value,
			read_time_unit,
			author,
			content,
		} = req.body;
		const dbResponse = await query(
			`UPDATE  blogs SET category='${category}',title='${title}', cover='${cover}', read_time_value=${read_time_value}, read_time_unit=${read_time_unit},author=${author},content=${content} WHERE blog_id=${req.params.id} RETURNING *`
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});

blogsRoute.post('/', async (req, res, next) => {
	try {
		const {
			category,
			title,
			cover,
			read_time_value,
			read_time_unit,
			author,
			content,
		} = req.body;
		const dbResponse = await query(
			`INSERT INTO blogs (category,
                title,
                cover,
                read_time_value,
                read_time_unit,
                author,
                content,) VALUES('${category}',title='${title}', cover='${cover}', read_time_value=${read_time_value}, read_time_unit=${read_time_unit},author=${author},content=${content} ) RETURNING *`
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
});

blogsRoute.delete('/', async (req, res, next) => {
	try {
		const dbResponse = await query(
			`DELETE FROM blogs WHERE blog_id=${req.params.id}`
		);
		res.send(dbResponse);
	} catch (error) {
		res.status(500).send({ error });
	}
});
export default blogsRoute;
