 export const filterByPrice = (list, price) => {
    if (!price) return list;
    return list.filter((item) => {
      if (price.indexOf("<100") > -1) {
        return item.price > 1 && item.price <= 100;
      }
      if (price.indexOf("100_300") > -1) {
        return item.price >= 100 && item.price <= 300;
      }
      if (price.indexOf(">300") > -1) {
        return item.price > 300;
      }
      return list;
    });
  }

 export const  getByCategory = (list, category) => {
    if (!category) return list;
    return list.filter((item) => item.category === category);
  }
 export const  getByOrigin = (list, origin) => {
    if (!origin) return list;
    return list.filter((item) => item.origin === origin);
  }
 export const getByKeyword = (list, keyword)=> {
    const search = keyword.trim().toLowerCase();
    if (!search.length) return list;
    return list.filter((item) => 
    item.productName.toLowerCase().indexOf(search) > -1);
  }

 export const sort = (list, type) => {
    if (!type) return list;
    if (type === "a_z") {
      return [...list].sort((a, b) => a.productName.localeCompare(b.productName));
    }
    if (type === "z_a") {
        return [...list].sort((a, b) => b.productName.localeCompare(a.productName));
      }
    if (type === "high_low") {
      return [...list].sort((a, b) => b.price - a.price);
    }
    if (type === "low_high") {
        return [...list].sort((a, b) => a.price - b.price);
      }
    if (type === "new_old") {
        return [...list].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      }
    if (type === "old_new") {
        return [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }   
  }
  