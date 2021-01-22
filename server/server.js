const {request} = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const uuid4 = require('uuid4');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

// const SHUTTERSTOCK_API_TOKEN = 'v2/c0U1WEhNQjNpZmJIN0dHbFA1TGpMNVVSWkd6alBSSWYvMjkyMTc4MzQzL2N1c3RvbWVyLzMvZjRBU0R5NUgzMm8zYWdlUE9tc0lZa1FETmpDTXYxa2N4c0xRRXFraDhDZjk4VlRCR1JKRDZ4a1M5Y1lxbkZNRmI1cTlrRXFtLU9LN3VFUmFINHFHeEhVemE3WXNjMUFhVUgzMW5xRWthLVdidEt4eHRvYTFFTXZ3aExqclIydUwyMjJSWk50bVB4eUdyaEI1QnRwYTlqNXVmSTdwdjZDcUYwdFlLN0JNaDBmelRaM2JCWVBHdzZGZmtSRXpHVmlrVUFWc1ZXLVN3Yi1qWHoyNTZaMEZCUQ';
// const sstk = require("shutterstock-api");

// sstk.setAccessToken(SHUTTERSTOCK_API_TOKEN);

// const imagesApi = new sstk.ImagesApi();

// const queryParams = {
//   "query": "hiking",
//   "image_type": "photo",
//   "orientation": "vertical",
//   "people_number": 3
// };

// imagesApi.searchImages(queryParams)
//   .then(({ data }) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


const sstk = require("shutterstock-api");

const applicationConsumerId = "sE5XHMB3ifbH7GGlP5LjL5URZGzjPRIf";
const applicationConsumerSecret = "aKltAUoNbOvbXxaa";
sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "kites",
  "image_type": "photo",
  "page": 1,
  "per_page": 5,
  "sort": "popular",
  "view": "minimal"
};

imagesApi.searchImages(queryParams)
  .then(({data}) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });


app.listen(8081, () => {
    console.log('The server is running');
});

