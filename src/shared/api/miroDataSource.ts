import { Image } from '../../entities'

export interface GetImagePayload {
  imageId: string
  boardId: string
}
export interface GetImageResponse extends Image {}
