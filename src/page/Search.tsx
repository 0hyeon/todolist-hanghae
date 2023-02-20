import React, { useCallback, useState } from 'react'
import _ from 'lodash'
function Search() {
  const [searchText, setSearchText] = useState()
  const [inputText, setInputText] = useState()
  const debounce = (callback: any, delay: any) => {
    let timerId:
      | ReturnType<typeof setTimeout>
      | ReturnType<typeof clearTimeout>
      | null = null

    return (...args: any) => {
      // 실행시 리턴발생
      if (timerId) clearTimeout(timerId) //true시 사용가능하게 clearTimeout

      timerId = setTimeout(() => {
        //timerId는 true
        callback(...args)
      }, delay)
    }
  }
  const handleSearchText = useCallback(
    debounce((text: any) => {
      setSearchText(text)
    }, 2000),
    []
  )
  const handleChange = (e: any) => {
    setInputText(e.target.value)
    handleSearchText(e.target.value)
  }
  return (
    <>
      <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
        <h1>디바운싱 예제</h1>
        <input
          type="text"
          placeholder="입력값을 넣고 디바운싱 테스트를 해보세요"
          style={{ width: '300px' }}
          onChange={handleChange}
        />
        <p>Search Text : {searchText}</p>
        <p>Input Text : {inputText}</p>
      </div>
    </>
  )
}

export default Search
