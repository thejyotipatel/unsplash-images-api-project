import { useGlobalContext } from './contaxt'

const InputBox = () => {
  const { setSearchText } = useGlobalContext()

  const hundleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    setSearchText(searchValue)
  }

  return (
    <form
      className='join mt-8 flex justify-center gap-2 '
      onSubmit={hundleSubmit}
    >
      <input
        className='input input-bordered w-full max-w-xs input-secondary'
        placeholder='cat'
        name='search'
        type='text'
      />

      <button className='btn    btn-secondary'>search</button>
    </form>
  )
}
export default InputBox
