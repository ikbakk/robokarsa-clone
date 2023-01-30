export interface IClass {
  id: string
  title: string
  description: string
  image: string
}

export interface IPriceList {
  id: number
  title: string[]
  price: string
  feature: string[]
  type: 'level' | 'project' | 'bundle'
}

export interface IProjectClass {
  [key: string]: number
}

export interface IBundleClass {
  title: string
  priceBundle: number
  priceNormal: number
  levels: string[]
}
