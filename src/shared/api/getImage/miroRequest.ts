import { GetImagePayload, GetImageResponse } from './miroDataSource'
import { instance } from '../axios/axios'

export const getImage = async ({ boardId, imageId }: GetImagePayload): Promise<GetImageResponse> => {
  return await instance.get(`v2/boards/${boardId}/images/${imageId}`).then(response => {
    return response.data
  })
}
