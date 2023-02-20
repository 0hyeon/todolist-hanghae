import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './Style'

function DebounceThrothling() {
  const navigate = useNavigate()
  let timerId:
    | ReturnType<typeof setTimeout>
    | ReturnType<typeof clearTimeout>
    | null = null

  const Throthling = (delay: number) => {
    if (timerId) return
    timerId = setTimeout(() => {
      console.log(`${delay / 1000}초 지나서 작동합니다.`)
      timerId = null
    }, delay)
  }
  const Debounce = (delay: number) => {
    if (timerId) clearTimeout(timerId)
    timerId = setTimeout(() => {
      console.log(`${delay / 1000}초 지나서 작동합니다.`)
      timerId = null
    }, delay)
  }
  useEffect(() => {
    return () => {
      //언마운트시 작동
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [timerId])
  return (
    <>
      <div>DebounceThrothling 버튼 이벤트 예제</div>
      <Button border={'1px solid #bbb'} onClick={() => Throthling(2000)}>
        Throthling버튼
      </Button>
      <Button border={'1px solid #bbb'} onClick={() => Debounce(2000)}>
        Debounce버튼
      </Button>
      <div
        onClick={() => {
          navigate('/')
        }}
      >
        페이지이동
      </div>
    </>
  )
}

export default DebounceThrothling
