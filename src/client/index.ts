import axios, { AxiosRequestConfig } from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = String(process.env.THEMOVIEDB_API_KEY)

// export default (endpoint: string, params?: string) =>
//   axios.create({
//     url: `${BASE_URL}/${endpoint}?&${params}&api_key=${API_KEY}`,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
export default (endpoint: string, config?: AxiosRequestConfig) => {
  return axios({
    ...config,
    ...{
      url: `${BASE_URL}/${endpoint}?&api_key=${API_KEY}`,
      headers: {
        'Content-Type': 'application/json',
      },
    },
  })
}
