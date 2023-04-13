import {createClient, type ClientConfig } from '@sanity/client'

export const config: ClientConfig = {
  projectId: '65ba4794',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
}

export const client = createClient(config) 