import { ManufacturerRequest } from "../model/model";
import RepositoryManufacturer from "../repositories/repositorymanufacturer";
import Manufacturer from "../entities/manufacturer-entity";

const repository = new RepositoryManufacturer();

export default class ManufacturerServices {
  async Create({ id, name }: ManufacturerRequest) {
    let manufacturer = new Manufacturer();
    manufacturer.name = name;

    return await repository.Create(manufacturer);
  }

  async GetAll() {
    return await repository.GetAll();
  }

  async GetById(id: number) {
    return await repository.GetById(id);
  }

  async Update({ id, name }: ManufacturerRequest) {
    let manufacturer = new Manufacturer();
    manufacturer.id = id;
    manufacturer.name = name;
    return await repository.Update(id, manufacturer);
  }

  async Delete(id: number) {
    return await repository.Delete(id);
  }
}
