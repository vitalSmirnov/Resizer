import { Image } from '@mirohq/websdk-types'

export const getImageSelection = async () => {
  const response = (await miro.board.getSelection()) as Image[]
  return response.filter(item => item.type === 'image')
}

export const getImageUrl = async (url: string, name: number) => {
  if (url) {
    const imageUrl = url.replace('preview', 'original')
    let httpsImageUrl = imageUrl.replace('redirect=false', 'redirect=true')
    httpsImageUrl = httpsImageUrl.replace('http', 'https')
    const image = await fetch(`${httpsImageUrl}`, {
      headers: { Authorization: `Bearer eyJtaXJvLm9yaWdpbiI6ImV1MDEifQ_G92i_EW6u0lh2VqFDd4PpWrFQlc` },
    })
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = `${name}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    return true
  } else {
    return false
  }
}
