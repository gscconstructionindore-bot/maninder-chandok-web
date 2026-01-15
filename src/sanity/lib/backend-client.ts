import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const backendClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
})
