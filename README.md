# 有機食品電商-KOZA

## 簡介
 * 使用Vue.js和Node.js前後端分離的開發模式，實作電商網站。
 
## 使用技術
> Vue2 + Vuex + Vue Router + Vuetify + Tailwind CSS + SCSS + Node.js + MongoDB
 
 * 使用Vuex集中管理資料狀態
 * 使用Vue Router 做路由控制
 * 使用axios串接後端API
 * 使用Tailwind CSS及SCSS調整樣式及RWD版型規劃
## 後端repo
[連結](https://github.com/owllion/E-commerce-server)

## DEMO
* [線上DEMO](https://koza-organic.herokuapp.com/)     
     ✏ 測試帳號(可使用優惠券功能，因新註冊使用者沒有優惠券)
  ```
  帳號:100@gmail.com
  密碼:0000000 (7個0)
  ```
* GIF   
  ![ezgif-3-4f540f229096](https://user-images.githubusercontent.com/66667234/114814456-cea6aa00-9de6-11eb-995b-fca16dbf1f73.gif)
* 影片(畫質較好)   
   [![](https://res.cloudinary.com/marcomontalbano/image/upload/v1618459613/video_to_markdown/images/streamable--jrbp78-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://streamable.com/jrbp78 "")

## 功能
 * 登入/登出/註冊功能，使用JWT驗證使用者身分
 * 登入驗證碼功能
 * 加入購物車/從購物車刪除
 * 修改購物車商品數量
 * 購物車商品全(不)選、單選
 * 商品詳情展示
 * 商品多重篩選
 * 商品排序
 * 商品加入最愛
 * 個人中心，可修改個人資料，包含地址、Email、姓名及頭貼，並查看最愛列表、優惠券、訂單等資訊
 * 上傳照片
 * 使用優惠券，可檢測是否到期、有無達到使用門檻等
 * 產生/取消訂單

## 使用插件
| 名稱     | 功能          |
| -------- | -------------- |
| epic-spinners | loading圖示 |
| vue-loading-overlay | loading效果 |
| jw-vue-pagination | 製作分頁 |
| moment.js | 換算日期 |
| vue-meta | 設定頁面title |
| vue-sweetalert2 | 彈框訊息 |
| vue-tilt.js | 商品圖立體效果 |
| vuelidate | 驗證表單 |
| vuex-persist | 維持vuex state |

## 專案運行
```
git clone https://github.com/owllion/KOZA.git

npm install

npm run serve
```
