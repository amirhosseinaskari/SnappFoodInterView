import axios from 'axios';
/**
 *  
 * @param url url of api
 * @param pageNumber this arg set with each request (when user scrolled)
 */
export const getVendorListAPI = (url, pageNumber) => {
 
   const requst = axios({
    method: 'get',
    url,
    data: {
      page: pageNumber,
      page_size: 10,
      lat: 35.754,
      long: 51.328
    }
  });
  return requst.then((res) => res.data.data.finalResult);
}