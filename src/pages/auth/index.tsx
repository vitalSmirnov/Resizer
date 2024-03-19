import { useState } from 'react'
import { Button, Input } from '../../shared'

interface AuthCallback {
  callback: () => void
}
export const Auth = ({ callback }: AuthCallback) => {
  const [miroId, setMiroId] = useState(localStorage.getItem('miroId'))
  const setEnv = () => {
    localStorage.setItem('miroId', miroId!)
    callback()
  }

  return (
    <>
      <Input<string>
        label={'Set miro board id'}
        value={miroId!}
        onChange={setMiroId}
      />
      <Button
        severity={'primary'}
        title={'Set id'}
        onClick={setEnv}
      />
    </>
  )
}
