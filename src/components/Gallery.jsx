import { useQuery } from '@tanstack/react-query'
import { useGlobalContext } from './contaxt'
import axios from 'axios'

const URL = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchText } = useGlobalContext()

  const response = useQuery({
    queryKey: ['images', searchText],
    queryFn: async () => {
      const result = await axios.get(`${URL}&query=${searchText}`)

      return result.data
    },
  })

  if (response.isLoading) {
    return <span className='loading loading-spinner text-secondary mt-4'></span>
  }
  if (response.isError) {
    return <h1 className='mt-4'>{response.error?.message}</h1>
  }
  if (response.data?.total === 0) {
    return <h1 className='mt-4 text-2xl'>No Result maching result fount</h1>
  }

  return (
    <>
      <div className='columns-3xs mt-6'>
        {response.data.results.map((item) => {
          const url = item?.urls?.regular
          return (
            <img
              className='pt-4'
              src={url}
              key={item.id}
              alt={item.alt_description}
            />
          )
        })}
      </div>
    </>
  )
}
export default Gallery
