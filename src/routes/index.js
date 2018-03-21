import path from 'path';
import KoaRouter from 'koa-router';
import analyzer from './analyzer';
import serve from 'koa2-static-middleware'


const router = new KoaRouter();

router.use(analyzer.routes(), analyzer.allowedMethods());
router.get('/research/*', serve('./research', { index: 'index.html' }));


export default router;
