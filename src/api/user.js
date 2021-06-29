import instance from "./axios";

//login
export const userLogin = (data) => instance.post("/login", data);

//login captcha
export const loginCaptcha = () => instance.get("/captcha");

//register
export const userRegister = (data) => instance.post("/register", data);

//get new token
export const getNewToken = (data) => instance.post("/getNewToken", data);

//logout
export const userLogout = (data) => instance.post("/logout", data);

//upload avatar
export const upload = (data) => instance.post("/user/upload", data);

//deleteAvatar
export const deleteAvatar = (data) => instance.post("/user/upload", data);

//forgotPassword
export const forgotPassword = (data) => instance.post("/forgot-password", data);

//get userInfo
export const userInfo = () => instance.get("/user/me");

//log out all devices
export const userLogoutAll = () => instance.get("/user/logoutAll");

//modify uesr info
export const userInfoModify = (data) =>
  instance.post("/user/info-modify", data);

//modify user password
export const userPasswordModify = (data) =>
  instance.post("/user/password-modify", data);

// add the product to the favorite list
export const addToFav = (data) => instance.post("/user/add/favlist", data);

//remove the product
export const removeFromFav = (data) =>
  instance.post("/user/delete/favlist", data);

//get the cartList
export const getCart = () => instance.get("/cartList");

//add product(s) to cart
export const addToCart = (data) => instance.post("/addToCart", data);

//Update item quantity
export const updateQty = (data) =>
  instance.post("/cart/product/updateQty", data);

//clear cart
export const clearCart = () => instance.delete("/clearCart");

//delete item in cart
export const deleteItemInCart = (data) => instance.post("/cart/delete", data);

export const deleteMultiItem = (data) =>
  instance.post("/cart/deleteMany", data);
