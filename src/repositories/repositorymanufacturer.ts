import { Manufacturer, PrismaClient } from "@prisma/client";

import RepositoryInterface from "./repositoryinterface";

const prisma = new PrismaClient();

export default class RepositoryManufacturer
  implements RepositoryInterface<Manufacturer>
{
  async GetAll(): Promise<Manufacturer[]> {
    const results = await prisma.manufacturer.findMany();

    return results;
  }
  async GetById(id: number): Promise<Manufacturer | null> {
    const result = await prisma.manufacturer.findFirst({
      where: {
        id,
      },
    });

    return result;
  }
  async Create(data: Manufacturer): Promise<Manufacturer> {
    const result = await prisma.manufacturer.create({
      data,
    });

    return result;
  }
  async Update(data: Manufacturer): Promise<Manufacturer> {
    const { id } = data;
    const result = await prisma.manufacturer.update({
      where: {
        id,
      },
      data,
    });

    return result;
  }
  async Delete(id: number): Promise<Manufacturer> {
    const result = await prisma.manufacturer.delete({
      where: {
        id,
      },
    });

    return result;
  }
}
