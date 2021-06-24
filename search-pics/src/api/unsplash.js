import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID X4aVEEcQOdQFc-tuhPQufHJ8m43k7IX9XwzdFymUnco'
      }
});