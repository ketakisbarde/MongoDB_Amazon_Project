import http from "../http-common";

class ProductDataService {
    
    getAll(page = 0) {
      return http.get(`searchAll?page=${page}`);
    } //appended to baseURL as page like localhost500/page1
  
    get(name) {
      return http.get(`/searchName/${name}`); //search/description=${description}` //searhName
    }

    getCategories(category) {
      return http.get(`/searchCategory/${category}`);
    }
  
    find(query, by = "name", page = 0) {
      return http.get(`restaurants?${by}=${query}&page=${page}`);
    } //main one electronice/phone/page1
    
    /*
    createReview(data) {
      return http.post("/review-new", data);
    }
  
    updateReview(data) {
      return http.put("/review-edit", data);
    }
  
    deleteReview(id, userId) {
      return http.delete(`/review-delete?id=${id}`, {data:{user_id: userId}});
    }
    */

  
  }
  
  export default new ProductDataService();