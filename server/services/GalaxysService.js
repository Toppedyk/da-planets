import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";


class GalaxysService {
  async create(body) {
    return await dbContext.Galaxys.create(body)
  }
  async getAll(query={}) {
    return await dbContext.Galaxys.find(query)
  }
  async findOne(id){
    let data = await dbContext.Galaxys.findOne({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async edit(body){
    let data = await dbContext.Galaxys.findOneAndUpdate({_id:body.id},body, {new:true})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id){
    let data = await dbContext.Galaxys.findOneAndDelete({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return "Successfully Deleted"
  }

}

export const galaxysService = new GalaxysService();