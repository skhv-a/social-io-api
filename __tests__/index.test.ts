import request from "supertest";
import { app } from "../app";

it("/", () => {
  request(app)
    .get("/")
    .expect(200)
    .then((response) => {
      expect(response.body).toBe("hello world!");
    });
});
