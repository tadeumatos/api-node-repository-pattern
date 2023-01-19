import { Router } from "express";

import ManufacturerController from "../controllers/manufacturercontroller";

const routes = Router();

routes.post("/manufacturer", new ManufacturerController().Create);
routes.get("/manufacturer", new ManufacturerController().GetAll);
routes.get("/manufacturer/:id", new ManufacturerController().GetById);
routes.put("/manufacturer", new ManufacturerController().Update);
routes.delete("/manufacturer/:id", new ManufacturerController().Delete);

export { routes };
