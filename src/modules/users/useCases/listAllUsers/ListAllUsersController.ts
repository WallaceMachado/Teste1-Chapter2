/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id}= request.body;

    const list = this.listAllUsersUseCase.execute({user_id});
    return response.json({list});
  }
}

export { ListAllUsersController };
