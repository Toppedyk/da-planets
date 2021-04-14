import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";


class MoonsService {
  async create(body) {
    return await dbContext.Moons.create(body)
  }
  async getAll(query={}) {
    return await dbContext.Moons.find(query)
  }
  async findOne(id){
    let data = await dbContext.Moons.findOne({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async edit(body){
    let data = await dbContext.Moons.findOneAndUpdate({_id:body.id},body, {new:true})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id){
    let data = await dbContext.Moons.findOneAndDelete({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return "Successfully Deleted"
  }

}

export const moonsService = new MoonsService();