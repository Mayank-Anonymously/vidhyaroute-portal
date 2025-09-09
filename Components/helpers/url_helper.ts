// LOCAL;
// export const baseURL = "http://192.168.1.2:3202/api/v1";
// export const imagebaseURL = "http://192.168.1.2:3202/resources/";

// // // // // LIVE;
export const baseURL = "https://api.vidhyaroute.com/api/v1";
export const imagebaseURL = "https://api.vidhyaroute.com/resources/";

// LOCAL;
// export const baseURL = "http://192.168.1.15:9291/api/v1";
// export const imagebaseURL = "http://192.168.1.15:9291/resources/";

// export const baseURL = "http://192.168.1.13:9291/api/v1";
// export const imagebaseURL = "http://192.168.1.13:9291/resources/";

// export const baseURL = "http://192.168.1.20:9291/api/v1";
// export const imagebaseURL = "http://192.168.1.20:9291/resources/";

// export const baseURL = "http://192.168.1.7:9291/api/v1";
// export const imagebaseURL = "http://192.168.1.7:9291/resources/";

// export const baseURL = "http://172.20.10.5:9291/api/v1";
// export const imagebaseURL = "http://172.20.10.5:9291/resources/";

// export const baseURL = "http://10.0.0.51:9291/api/v1";
// export const imagebaseURL = "http://10.0.0.51:9291/resources/";

//REGISTER
export const POST_FAKE_REGISTER = "/post-fake-register";


//TESTIMONIAL
export const GET_ALL_TESTIMONIAL = "/testimonial/get-all-testimonial-for-admin";
export const ADD_NEW_TESTIMONIAL = "/testimonial/create-testimonial";
export const UPDATE_TESTIMOINAL_STATUS= "/testimonial/update-testimonial-status/";
export const EDIT_TESTIMONIAL = "/testimonial/edit-testimonial/" ;
export const DELETE_TESTIMONIAL = "/testimonial/delete-testimonial/"

//VACATIONS
export const DELETE_VACATION_BY_ID = "/vacation/delete-vacation-by-id/"
export const GET_All_VACATIONS = "/vacation/get-all-vacations"

//LOGIN
export const POST_FAKE_LOGIN = "/post-fake-login";
export const POST_FAKE_JWT_LOGIN = "/post-jwt-login";
export const POST_FAKE_PASSWORD_FORGET = "/fake-forget-pwd";
export const POST_FAKE_JWT_PASSWORD_FORGET = "/jwt-forget-pwd";
export const SOCIAL_LOGIN = "/social-login";

//PROFILE
export const POST_EDIT_JWT_PROFILE = "/post-jwt-profile";
export const POST_EDIT_PROFILE = "/post-fake-profile";

//CALENDER
export const GET_EVENTS = "/events";
export const GET_CATEGORIES = "/categories";
export const GET_UPCOMMINGEVENT = "/upcommingevents";
export const ADD_NEW_EVENT = "/add/event";
export const UPDATE_EVENT = "/update/event";
export const DELETE_EVENT = "/delete/event";

//CONTACT FROM 
export const GET_ALL_CONTACT_FORM = "/contact-form/get-all-contact"


//SUBSCRIBE EMAIL 
export const GET_ALL_SUBSCRIBE_MAILS = "/user-subscribe/get-all-subscribe-user";

//RATING
export const GET_ALL_RATING = "/rating/get-all-rating-for-admin";
export const DELETE_REVIEW = "/rating/delete-rating/";

// API Key
export const GET_API_KEY = "/api-key";
export const ADD_NEW_API_KEY = "/add/api-key";
export const UPDATE_API_KEY = "/update/api-key";
export const DELETE_API_KEY = "/delete/api-key";

// Contacts
export const GET_CONTACTS = "/get-contacts";
export const ADD_NEW_CONTACT = "/add/contacts";
export const UPDATE_CONTACT = "/update/contacts";
export const DELETE_CONTACT = "/delete/contacts";

// Team
export const GET_TEAM = "/get-team";
export const ADD_NEW_MEMBER = "/add/member";
export const UPDATE_MEMBER = "/update/member";
export const DELETE_MEMBER = "/delete/member";

// Dashboard charts data
export const GET_ALL_DATA = "/all-data";
export const GET_MONTHLY_DATA = "/monthly-data";
export const GET_HALFYEARLY_DATA = "/halfyearly-data";
export const GET_YEARLY_DATA = "/yearly-data";

/*  Category  */
export const POST_NEW_CATEGORY = "/category/create-category";
export const POST_NEW_SUB_CATEGORY = "/category/create-sub-category";
export const GET_ALL_CATEGORY = "/category/get-all-categories";
export const GET_ALL_SUB_CATEGORY_BY_CATID =
  "/category/get-sub-category-by-cat-id";
export const GET_ALL_SUB_CATEGORY = "/category/get-all-sub-category";
export const GET_SUBCATEGORY_BY_ID = "/category/get-subcategory-by-id/";
export const UPDATE_SUBCATEGORY_BY_ID = "/category/update-subcategory-by-id/";
export const DELETE_SUBCATEGORY_BY_ID = "/category/delete-subcategory-by-id/";
/*  Category  */

/* product */
export const POST_NEW_PRODUCT = "/product/create-product";
export const GET_ALL_PRODUCT = "/product/get-all-products-for-admin";
export const UPDATE_STOCK = "/stock/update-qty";
export const EDIT_PRODUCT = "/product/update-product-details";
export const EDIT_PRODUCT_STATUS = "/product/update-product-status";
/* product */

/* ORDER */
export const GET_ALL_ORDERS = "/order/get-all-orders";
export const UPDATE_ORDER = "/order/update-order-by-id";
export const ASSIGN_ORDER = "/order/assign-to-partner";
export const DEFINE_ROUTE = "/order/define-route/"
/* ORDER */

/* ORDER */
export const GET_ALL_SUBSCRIPTION = "/order/get-order-by-status";
/* ORDER */

/* ORDER */
export const GET_ALL_LOCATIONS = "/location/get-all-serving-locations";
export const ADD_NEW_LOCATION = "/location/add-new-location";
/* ORDER */

/* HUB */
export const GET_ALL_HUB = "/hub/get-all-hubs";
export const ADD_NEW_HUB = "/hub/create-new-hub";
/* HUB */

/* PARTNER */
export const GET_ALL_PARTNER = "/partner/get-all-partners";
export const ADD_NEW_PARTNER = "/partner/add-new-partner";
export const UPDATE_PARTNER_GIVEN_AMOUNT_BY_ID = "/partner/update-partner-given-amount-by-id/"
/* PARTNER */

/* CITY */
export const GET_ALL_CITY = "/city/get-all-city";
export const ADD_NEW_CITY = "/city/add-new-city";
/* CITY */

/* CONTENT */
export const GET_ALL_CONTENT = "/pages/all";
export const ADD_NEW_CONTENT = "/pages/add";
/* CONTENT */

/* CONTENT */
export const GET_ALL_UNI = "/university/all";
export const ADD_NEW_UNI = "/university/add";
/* CONTENT */
/* CONTENT */
export const GET_ALL_COUNTRY = "/countries/all";
export const ADD_NEW_COUNTRY = "/countries/add";
/* CONTENT */

/* CONTENT */
export const GET_ALL_SERVICE = "/services/all";
export const ADD_NEW_SERVICE = "/services/add";
/* CONTENT */
