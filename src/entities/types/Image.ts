export interface Image {
  id: string
  type: string
  data: {
    imageUrl: string
  }
  geometry: {
    width: number
    height: number
  }
  position: {
    x: number
    y: number
    origin: string
    relativeTo: string
  }
  links: {
    self: string
  }
}
