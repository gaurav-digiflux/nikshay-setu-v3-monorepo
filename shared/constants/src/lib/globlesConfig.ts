import { NX_PUBLIC_API_URL, NX_PUBLIC_API_TIMEOUT } from '@env'

export const BASE_URL = process.env['NX_PUBLIC_API_URL'] || NX_PUBLIC_API_URL

export const API_TIMEOUT =
  process.env['NX_PUBLIC_API_TIMEOUT'] || NX_PUBLIC_API_TIMEOUT || 0
