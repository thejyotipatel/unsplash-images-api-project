const InputBox = () => {
  const hundleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    if (!searchValue) return
    console.log(searchValue)
  }

  return (
    <form className='join mt-8 flex justify-center ' onSubmit={hundleSubmit}>
      <input
        className='input input-bordered join-item input-secondary'
        placeholder='dogs'
        name='search'
        type='text'
      />
      <button className='btn join-item rounded-r-full btn-secondary'>
        search
      </button>
    </form>
  )
}
export default InputBox
