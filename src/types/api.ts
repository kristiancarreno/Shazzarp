export interface CustomApiError {
  title?: string
  status: number
  detail?: string
  extensions?: Record<string, string>
}

export class ApiError extends Error {
  title: string

  status: number

  detail: string

  extensions?: Record<string, string>

  constructor(error: CustomApiError & Object) {
    super()
    this.title = error.title ?? ''
    this.status = error.status
    this.detail = error.detail ?? ''
    if (error.extensions) this.extensions = error.extensions
  }

  toString() {
    return `${this.title} - ${this.status} - ${this.detail.toString()}`
  }
}

export type ApiResponse<T> = {
  data?: T
  error: boolean
  status: number
} & CustomApiError

export type CookieData = {
  name: string
  path: string
  value: string
  expires: string
}
