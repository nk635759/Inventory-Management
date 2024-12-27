import express from 'express';


const router = express.Router();

const routes = [
    // Define your routes here
    // { path: '/example', route: exampleRoute }
];

routes.forEach((cur) => {
    router.use(cur.path, cur.route);
});

export default router;
