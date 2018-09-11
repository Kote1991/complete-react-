const express = require('express');
app = new express();

const server_port = 5000;


app.get('/', (req, res) => {
    res.send('Hello React Express!!');
})
app.get('/ab?cd', function (req, res) {
    res.send('ab?cd')
  })
  app.get('/ab+cd', function (req, res) {
    res.send('ab+cd')
  })
  app.get('/random.text', function (req, res) {
    res.send('random.text')
  })
app.get('/api/employee', (req, res) => {
    const employee = [
        // { "id": "cust_06", "name": "Rakesh", "phno": " 944 *** 9407" },
        { "id": "cust_01", "name": "Karthik", "phno": " 944 *** 9403" },
        { "id": "cust_02", "name": "Gourav", "phno": " 944 *** 9404" },
        { "id": "cust_03", "name": "Rishabh", "phno": " 944 *** 9405" },
        { "id": "cust_04", "name": "Srinidhi", "phno": " 944 *** 9406" },
       
       
        { "id": "cust_08", "name": "Varun", "phno": " 944 *** 9409" }
    ];
    //res.json({ 'user': 'tobi' });
    res.json({employee});

});


app.listen(server_port, () => {
    console.log(`Express server is started running on: ${server_port}`);
})