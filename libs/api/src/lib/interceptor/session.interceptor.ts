import { inject } from '@angular/core'
import { HttpInterceptorFn } from '@angular/common/http'
import { ApiService } from '../api/api.service'

export const sessionInterceptor: HttpInterceptorFn = (req, next) => {
  const api = inject(ApiService)
  const token = api.getToken()

  if (!token) return next(req)

  return next(
    req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
      withCredentials: true
    })
  )
}
