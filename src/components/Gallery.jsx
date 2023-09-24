import { useQuery } from '@tanstack/react-query'
import customFetch from '../utlies'

const Gallery = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const { data } = await customFetch.get(`query=dogs`)

      return data
    },
  })
  if (isLoading) {
    return <span className='loading loading-spinner text-secondary'></span>
  }
  if (isError) {
    return <span className='loading loading-spinner text-secondary'></span>
  }
  return (
    <>
      <div className='columns-3xs mt-6'>
        {data.map((item) => {
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
