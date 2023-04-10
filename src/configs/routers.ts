import express, { Router, RouterOptions } from 'express';

import { PagesRoute } from '../api/pages/routes/PagesRoute'; 

const routes: any = [
  PagesRoute,
]

export const router = Router()
for (const route of routes)
  router.use('/', route)
