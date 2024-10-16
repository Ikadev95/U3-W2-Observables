import { iProd } from "./i-prod"

export interface iObj {
  products: iProd[]
  total: number
  skip: number
  limit: number
}
