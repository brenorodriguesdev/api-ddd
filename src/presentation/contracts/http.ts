export interface HttpRequest {
    body? : any
}

export interface HttpResponse<T = any> {
    statusNumber: number,
    body: T
}