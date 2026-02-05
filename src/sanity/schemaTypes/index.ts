import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog'
import { product } from './product'
import order from './order'
import user from './user'

import category from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, product, order, user, category],
}
