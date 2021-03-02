 
 import instance from './axios'
 //get the newest products
  export const getNewestItem = () => instance.get('/product/newest')

 //get best seller from all category
 export const getBestSeller = () => instance.get('/product/feature/best_seller')

 //get a product
 export const getProduct = data => instance.post('/product/detail', data)

 //get productList by category
 export const getProductByCate = data => instance.post('/product/category/list', data)

 export const getSubItem = data => instance.post('/product/subCategory' ,data)
