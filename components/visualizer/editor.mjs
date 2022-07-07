
var userInput = `
#include<iostream>
using namespace std;
int main()
{
    cout<<1 + 2 + 5<<" " ;
    cout<<4 + 0;
    return 0;
}
`
// class inputOutput{
//     constructor(userInputCode)
//     {
//         this.userInputCode = userInputCode;
//     }
// }


import axios from "axios";
import qs from "qs";
var output = null;
var data = qs.stringify({
  code: userInput,
  language: "cpp",
  input: "Hello\nWorld",
});
var config = {
  method: "post",
  url: "https://codex-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data.output));
    output =  JSON.stringify(response.data.output);
    displayOutput(output);
  })
  .catch(function (error) {
    console.log(error);
  });

  function displayOutput(output) { 
    console.log(output);
   }
  