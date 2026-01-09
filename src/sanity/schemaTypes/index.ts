import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, product],
}
