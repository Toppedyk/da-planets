import { BadRequest } from "../utils/Errors";
import { dbContext } from "../db/DbContext";


class StarsService {
  async create(body) {
    return await dbContext.Stars.create(body)
  }
  async getAll(query={}) {
    return await dbContext.Stars.find(query).populate('galaxy')
  }
  async findOne(id){
    let data = await dbContext.Stars.findOne({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async edit(body){
    let data = await dbContext.Stars.findOneAndUpdate({_id:body.id},body, {new:true})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return data
  }
  async delete(id){
    let data = await dbContext.Stars.findOneAndDelete({_id:id})
    if(!data){
      throw new BadRequest("Invalid ID")
    }
    return "Successfully Deleted"
  }

}

export const starsService = new StarsService();