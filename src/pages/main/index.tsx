import { Downloader, Resizer } from '../../widgets'
import * as React from 'react'

export const Main = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Resizer />
        <Downloader />
      </div>
    </>
  )
}
