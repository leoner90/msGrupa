import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  //  `https://msgrupa.lv/backEnd/`;
  baseUrl: `http://localhost/backEnd/`,
  prepareHeaders: (headers) => {
    //headers.set('Content-Type', 'application/json');
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  tagTypes: ['PROJECTS', 'KEYS'],

  endpoints: builder => ({
    getGallery: builder.mutation({
      query: data => {
        let formData = new FormData();  
        formData.append("data", data);
        // JSON.stringify(data)
       
        return {
          mode: "cors",
          enctype: 'multipart/form-data',
          url: 'index.php?gallery',
          method: 'POST',
          body: formData
        }
      },
    }),

    sendEmail: builder.mutation({
      query: data => {   
        return {
          mode: "cors",
          enctype: 'multipart/form-data',
          url: 'index.php?mail',
          method: 'POST',
          body: data
        }
      },
    }),

  }),
})

export const {
  useGetGalleryMutation,useSendEmailMutation 
} = api
