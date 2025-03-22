export interface User {
  name: {
    title: 'Ms' | 'Mr'
    first: string
    last: string
  }
  email: string
  phone: string
  gender: 'female' | 'male'
}
