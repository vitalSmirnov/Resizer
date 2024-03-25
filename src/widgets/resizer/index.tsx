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
    <div className={'grid'}>
      <div className={'cs1 ce8'}>
        <Input<number>
          label={'Size'}
          onChange={sizeHandler}
          value={selectedSize}
        />
      </div>
      <div
        className={'cs9 ce12 centered'}
        style={{ marginTop: '0.8rem' }}
      >
        <Button
          icon={<span className='icon icon-collapse'></span>}
          onClick={resizerHandler}
        />
      </div>
    </div>
  )
}
