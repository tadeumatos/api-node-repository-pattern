import { Request, Response } from "express";

import ManufacturerServices from "../services/manufacturerservices";

const service = new ManufacturerServices();

export default class ManufacturerController {
  async Create(request: Request, response: Response) {
    const { id, name } = request.body;

    const manufacturer = await service.Create({ id, name });

    return response.status(201).send(manufacturer);
  }

  async GetAll(request: Request, response: Response) {
    const manufacturers = await service.GetAll();

    return response.status(200).send(manufacturers);
  }

  async GetById(request: Request, response: Response) {
    const id = request.params["id"];

    const manufacturer = await service.GetById(parseInt(id));

    return response.status(200).send(manufacturer);
  }

  async Update(request: Request, response: Response) {
    const { id, name } = request.body;

    const manufacturer = await service.Update({ id: parseInt(id), name });

    return response.status(200).send(manufacturer);
  }

  async Delete(request: Request, response: Response) {
    const id = request.params["id"];

    const manufacturer = await service.Delete(parseInt(id));

    return response.status(200).send(manufacturer);
  }
}
