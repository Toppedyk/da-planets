import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";
import { starsService } from "../services/StarsService";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxys");
    this.router
      .get("", this.getAll)
      .get("/:id", this.findOne)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      let data = await galaxysService.getAll(req.query)
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }
    /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
     async findOne(req, res, next) {
      try {
        let data = await galaxysService.findOne({_id: req.params.id})
        return res.send(data)
      } catch (error) {
        next(error);
      }
    }
    async getStarsByGalaxyId(req,res,next){
      try {
        let data = await starsService.getAll({galaxy: req.params.id})
        res.send(data)
      } catch (error) {
        next(error)
      }
    }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      let data = await galaxysService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error);
    }
  }

      /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
       async edit(req, res, next) {
        try {
          req.body.id = req.params.id
          let data = await galaxysService.edit({_id: req.params.id})
          return res.send(data)
        } catch (error) {
          next(error);
        }
      }

          /**
   * Sends found values to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
     async delete(req, res, next) {
      try {
        let data = await galaxysService.delete(req.params.id)
        return res.send(data)
      } catch (error) {
        next(error);
      }
    }
}