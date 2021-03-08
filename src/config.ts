export let API: string

if(process.env.NODE_ENV !== 'development') {
  API = 'http://xxx.com'
} else {
  API = "http://xxx.com"
}