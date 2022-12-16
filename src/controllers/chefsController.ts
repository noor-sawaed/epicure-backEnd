import { Request, Response } from "express";
import { ChefsService } from "../services/chefs.service";
export class ChefsController {
    public static async getChefs(req: Request, res: Response) {
        const service = new ChefsService();
        const chefs = await service.getChefs();
        return res.send(chefs);
    };
    public static async createChef(req: Request, res: Response) {
        const params = req.body;
        const service = new ChefsService();
        const chef = await service.createChef(params);
        return res.send(chef);
    };
};