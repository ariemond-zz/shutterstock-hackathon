import React from "react";
import axios from "axios";

const SHUTTERSTOCK_API_TOKEN =
  "v2/c0U1WEhNQjNpZmJIN0dHbFA1TGpMNVVSWkd6alBSSWYvMjkyMTc4MzQzL2N1c3RvbWVyLzMvZjRBU0R5NUgzMm8zYWdlUE9tc0lZa1FETmpDTXYxa2N4c0xRRXFraDhDZjk4VlRCR1JKRDZ4a1M5Y1lxbkZNRmI1cTlrRXFtLU9LN3VFUmFINHFHeEhVemE3WXNjMUFhVUgzMW5xRWthLVdidEt4eHRvYTFFTXZ3aExqclIydUwyMjJSWk50bVB4eUdyaEI1QnRwYTlqNXVmSTdwdjZDcUYwdFlLN0JNaDBmelRaM2JCWVBHdzZGZmtSRXpHVmlrVUFWc1ZXLVN3Yi1qWHoyNTZaMEZCUQ";
class HomePage extends React.Component {
  state = {
    data: [],
  };
  
  componentDidMount() {
    axios
      .get("https://api.shutterstock.com/v2/images/search", {
        params: {
          query: "dogs",
          fields: "data(id,assets/preview/url)",
        },
        headers: {
          Authorization: `Bearer ${SHUTTERSTOCK_API_TOKEN}`,
          "User-Agent": "request",
        },
      })
      .then((data) => {
        console.log(data.data.data);
        console.log(JSON.stringify(data.data, null, 2));
        this.setState({
            data: data.data.data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="App">
      {this.state.data.map(image => <img src={image.assets.preview.url}></img>)}
      </div>
      );
    }
}
export default HomePage;