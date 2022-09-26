import axios from 'axios'
import { USERNAME_DB_KEY } from '../constants'
import { getData } from '../db'

export async function returnUsername() {
  const result = await getData(USERNAME_DB_KEY)
  return result || ''
}

export const api = axios.create({
  baseURL: 'https://supermarketlist-api.herokuapp.com',
  headers: {
    username: returnUsername(),
  },
})
