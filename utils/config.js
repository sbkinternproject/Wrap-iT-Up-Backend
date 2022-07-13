module.exports = {
    SCHEMAS: {
      USERS: "users",
      PRODUCTS: "products"
    },
    STATUS_CODES: {
      NOT_FOUND: 404,
      SUCCESS: 200,
      SERVER_ERROR: 500,
      FILE_NOT_FOUND: 404,
    },
    ROUTES: {
      ROOT: "/",
      USER: {
        LOGIN: "/login",
        REGISTER: "/register",
        SHOW: "/show"
      },
      PRODUCT: {
        REGISTER: "/registerProduct",
        PRODUCTS: "/products",
        SHOWPRODUCTBYCATEGORY: "/showProductByCategory/:category",
        DELETEPRODUCT: "/deleteProduct/:product",
        UPDATEPRODUCT: "/updateProduct/:product",
      },
    },
  };