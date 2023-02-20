import { useState } from 'react'

const useInput = () => {
  //state
  const [value, setValue] = useState('')
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return [value, handler] as const
}

export default useInput
