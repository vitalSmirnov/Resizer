import { useState } from 'react'
import { Input, Button } from '../../shared'

interface AuthProps {
  callback: () => void
}
export const Auth = ({ callback }: AuthProps) => {
  const [token, setToken] = useState<string>('')
  const setEnv = () => {
    localStorage.setItem('token', token)
    sessionStorage.setItem('token', token)
    if (token !== '') {
      callback()
    }
  }

  return (
    <div className={'grid'}>
      <div className={'cs1 ce8'}>
        <Input<string>
          label={'Copied token'}
          onChange={setToken}
          value={token}
        />
      </div>
      <div
        className={'cs9 ce12 centered'}
        style={{ marginTop: '0.8rem' }}
      >
        <Button
          icon={<span className='icon icon-checkbox'></span>}
          onClick={setEnv}
        />
      </div>
    </div>
  )
}
