var connection = new require("./kafka/Connection");
const envv= require('dotenv').config()


const mongoose = require("mongoose");
//const keys = require("./config/keys");
//const { MONGOURI } = require("./config/keys");

mongoose.connect("mongodb+srv://admin:00000@cluster0.woh5qpj.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  maxPoolSize:13
  
});
mongoose.connection.on("connected", () => {
  console.log("connected to mongo yeahh");
});
mongoose.connection.on("error", (err) => {
  console.log("err connecting", err);
});

require("./models/subscriber");
require("./models/customer");
console.log(envv);

var csignup = require("./services/csignup.js");
var rsignup = require("./services/rsignup.js");
var dish = require("./services/dish.js");
var order = require("./services/order.js");

function handleTopicRequest(topic_name, fname) {
  //var topic_name = 'root_topic';
  var consumer = connection.getConsumer(topic_name);
  var producer = connection.getProducer();
  console.log("server is running ");
  consumer.on("message", function (message) {
    console.log("message received for " + topic_name + " ", fname);
    console.log(JSON.stringify(message.value));
    var data = JSON.parse(message.value);

    fname.handle_request(data.data, function (err, res) {
      console.log("after handle" + res);
      var payloads = [
        {
          topic: data.replyTo,
          messages: JSON.stringify({
            correlationId: data.correlationId,
            data: res,
          }),
          partition: 0,
        },
      ];
      producer.send(payloads, function (err, data) {
        console.log("poducer send  = ", data);
      });
      return;
    });
  });
}


handleTopicRequest("csignup", csignup );
handleTopicRequest("rsignup", rsignup );
handleTopicRequest("dish", dish );
handleTopicRequest("order", order );