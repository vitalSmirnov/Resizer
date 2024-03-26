import { Downloader, Resizer, Auth } from '../../widgets'
import * as React from 'react'
import { useState } from 'react'

export const Main = () => {
  const [router, setRoute] = useState<boolean>(localStorage.getItem('token') !== null)
  const callback = () => {
    setRoute(true)
  }
  const settings = () => {
    setRoute(!router)
  }

  return (
    <>
      {localStorage.getItem('token') !== null && (
        <div
          className={'cs10 ce12'}
          style={{ width: '100%', display: 'flex', justifyContent: 'end' }}
        >
          <span
            onClick={settings}
            className={'icon icon-settings'}
          ></span>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {router ? (
          <>
            <Resizer />
            <Downloader />
          </>
        ) : (
          <Auth callback={callback} />
        )}
      </div>
    </>
  )
}
