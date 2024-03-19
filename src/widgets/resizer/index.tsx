import { useState } from 'react'
import { Input } from '../../shared'
import { Button } from '../../shared'
import { resizeHandler } from './helpers/helper'

export const Resizer = () => {
  const [selectedSize, setSize] = useState<number>(300)
  const resizerHandler = async () => {
    await resizeHandler(selectedSize)
  }
  const sizeHandler = (value: number) => {
    setSize(Number(value))
  }

  return (
    <>
      <Input<number>
        label={'Size'}
        onChange={sizeHandler}
        value={selectedSize}
      />
      <Button
        title={'Resize items'}
        onClick={resizerHandler}
      />
    </>
  )
}
