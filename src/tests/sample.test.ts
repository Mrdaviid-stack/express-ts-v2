import request from 'supertest'

describe('Fetch Pages', () => {
  it('should get status code 200', async () => {
    const res = await request('http://localhost:8000')
      .get('/pages')
    expect(res.statusCode).toBe(200)
  })
})