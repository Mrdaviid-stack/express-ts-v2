import { Router, Request, Response } from 'express'

const router = Router()
export const PagesRoute = Router().use('/pages', router)

router.get('/', (request: Request, response: Response) => {
  try {
    response.status(200).send('pages') 
  } catch (error) {

  }
})
