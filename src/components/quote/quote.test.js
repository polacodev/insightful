import supertest from 'supertest'
import server from '../../app.js'

import { getQuotes } from './quote.api.js'; // Adjust the path accordingly
import api from '../../api/api.js'; // Assuming this is the path to your api module


const request = supertest(server);

describe("Insightful App", () => {
  afterAll((done) => {
    server.close(done)
  })

  describe("Integration Tests", () => {
    it("GET /               - Success Case", async () => {
      const response = await request
        .get("/")
        .expect(200)
      expect(response.text).toBe("Welcome to Insightful App!")
    })

    it("GET /api/v1/quotes  - Success Case", async () => {
      const response = await request
        .get("/api/v1/quotes")
        .expect(200)
      expect(response._body.message).toBe("Fetched quotes successfully")
      expect(Array.isArray(response._body.quotes)).toBeTruthy()
      expect(response._body.totalItems).toEqual(25)
    })
  })

  describe("Snapshot Tests", () => {
    it("GET /api/v1/quotes  - Success Case", async () => {
      const response = await request
        .get("/api/v1/quotes")
      expect(response._body.quotes).toMatchSnapshot();
    })
  })

  describe('getQuotes Bad Request', () => {
    it('GET /quotes (message) - Unsuccess Case', async () => {
      const res = { status: jest.fn(), json: jest.fn() };
      const next = jest.fn();

      const error = new Error()
      error.message = 'Unsuccessful: GET /api/v1/quotes'
      api.get = jest.fn(() => Promise.reject(error));

      await getQuotes({}, res, next);

      expect(next).toHaveBeenCalledWith(new Error('Unsuccessful: GET /api/v1/quotes'));
    });
    it('GET /quotes (Code)    - Unsuccess Case', async () => {
      const res = { status: jest.fn(), json: jest.fn() };
      const next = jest.fn();

      const error = new Error()
      error.ErrorMessage = "GET /api/v1/quotes "
      error.statusCode = 500
      error.message = 'Unsuccessful: ' + error.statusCode + ' ' + error.ErrorMessage
      api.get = jest.fn(() => Promise.reject(error));

      await getQuotes({}, res, next);

    });
  });
})
