import axios from 'axios'
const customFetch = axios.create({
  baseURL:
    'https://api.unsplash.com/photos/?client_id=DzjfH-k4tEXim4zXbRybaxH9VIKu55a4hKQ5cxKIrT4',
})

export default customFetch
