import { Button } from '../../shared'
import { getImageSelection, getImageUrl, getTableId } from './helpers/helper'
import { getImage } from '../../shared'
import { Image } from '@mirohq/websdk-types'
import { useEffect, useState } from 'react'

export const Downloader = () => {
  const [miroId, setMiroId] = useState<string>('')

  useEffect(() => {
    getTableId().then(response => setMiroId(response))
  }, [])

  const downloadImages = async () => {
    const imageSelection: Image[] = await getImageSelection()
    imageSelection.map(async (item, number) => {
      const image = await getImage({ boardId: miroId, imageId: item.id })
      await getImageUrl(image.data.imageUrl, number)
    })
  }

  return (
    <>
      <div style={{ marginTop: '0.8rem' }}>
        <Button
          icon={<span className='icon icon-download'></span>}
          onClick={downloadImages}
        />
      </div>
    </>
  )
}
