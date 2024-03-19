import axios from 'axios'
import { GetImagePayload, GetImageResponse } from './miroDataSource'

const instance = axios.create({
  baseURL: 'https://api.miro.com/v2/boards/',
  insecureHTTPParser: true,
  headers: {
    Authorization: `Bearer ${process.env['REACT_APP_MIRO']}`,
    'Content-Type': 'application/json',
  },
})

export const getImage = async ({ boardId, imageId }: GetImagePayload): Promise<GetImageResponse> => {
  return await instance.get(`${boardId}/images/${imageId}`).then(response => {
    return response.data
  })
}