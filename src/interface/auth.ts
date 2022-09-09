export interface ILogin {
    email: string
    password: string
  }

  export interface ICredentials {
    email: string
    id: number
    roles: string[]
    token: string
    type: string
    isLoggedIn: boolean
  }
  