import{_ as p}from"./store.daaa27a6.js";const T="http://localhost/the-outline/api/";let t=p;const d=(s="GET",e,n,o,c,r,E)=>{switch(t.defaults.headers.common.token=r,E.toLowerCase()==="url-encoded"?t.defaults.headers.post["Content-Type"]=u.URL_ENCODED:t.defaults.headers.post["Content-Type"]=u.JSON,s){case"GET":return t.get(e+n);case"POST":return t.post(e+n,o);case"PUT":return t.put(e+n,o);case"DELETE":return t.delete(e+n,o);default:return t.get(e+n)}},g=({path:s="",baseUrl:e="",data:n={},setAuthorization:o=!1,method:c="GET",authToken:r="",type:E="json"})=>(e=e.length!==0?e:T,d(c,e,s,n,o,r,E)),i={GET:"GET",POST:"POST",PUT:"PUT",DELETE:"DELETE"},u={JSON:"application/json",URL_ENCODED:"application/x-www-form-urlencoded"},a={methods:i,makeRequest:g},m={slug:"events/slug-lookup/",createEvent:"events",getEvent:"events",getEventById:"event",getPaymentByReference:"payments",getEventsByOrganizer:"organizer",editEvent:"events",qrcode:"qrcode/"};export{m as A,a as R};
