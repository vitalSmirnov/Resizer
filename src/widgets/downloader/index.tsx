import { Button } from '../../shared'
import { getImageSelection, getImageUrl } from './helpers/helper'
import { getImage } from '../../shared'
import { Image } from '@mirohq/websdk-types'

export const Downloader = () => {
  const downloadImages = async () => {
    const imageSelection: Image[] = await getImageSelection()
    imageSelection.map(async (item, number) => {
      const image = await getImage({ boardId: 'uXjVKfJQ3As=', imageId: item.id })
      await getImageUrl(image.data.imageUrl, number)
    })
  }

  return (
    <>
      <div style={{ marginTop: '1rem' }}>
        <Button
          title={'Download selected images'}
          onClick={downloadImages}
        />
      </div>
    </>
  )
}
