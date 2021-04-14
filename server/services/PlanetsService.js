import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";


class PlanetsService {
  async create(body) {
    return await dbContext.Planets.create(body)
  }
  async getAll(query={}) {
    return await dbContext.Planets.find(query)
  }
  async findOne(id){
    let data = await dbContext.Planets.findOne({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async edit(body){
    let data = await dbContext.Planets.findOneAndUpdate({_id:body.id},body, {new:true})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id){
    let data = await dbContext.Planets.findOneAndDelete({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return "Successfully Deleted"
  }

}

export const planetsService = new PlanetsService();