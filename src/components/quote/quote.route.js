import express from 'express'
import * as quote from './quote.api.js'

const router = express.Router();

// GET /quotes
router.get('/quotes', quote.getQuotes);

export default router
