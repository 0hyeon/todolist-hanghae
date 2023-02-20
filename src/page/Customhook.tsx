import useInput from '../hook/useInput'

function Customhook() {
  const [name, onChangeNameHandler] = useInput()
  const [password, onChangePasswordHandler] = useInput()
  //   const [name, setName] = useState('')
  //   const [password, setPassword] = useState('')

  //   const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setName(e.target.value)
  //   }
  //   const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setPassword(e.target.value)
  //   }
  return (
    <>
      <input type="text" value={name} onChange={onChangeNameHandler} />
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </>
  )
}

export default Customhook
