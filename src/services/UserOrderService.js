import Repository from "../Repository";

class UserOrderService {
  static GetUserOrder(userId) {
    return Repository.get(`orders/${userId}`);
  }

  static IncrementQuantity(itemId) {
    return Repository.post(`orders/122/items/${itemId}?user_id=2`);
  }

  static DecrementQuantity(itemId) {
    return Repository.delete(`orders/122/items/${itemId}?user_id=2`);
  }
}

export default UserOrderService;
