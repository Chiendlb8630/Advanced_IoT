const cors = require('cors');
const express = require('express');
const { pubTopic } = require('../Config/mqtt');
const db = require('../Config/Firebase');

const app = express();
app.use(express.json());
app.use(cors());


app.put('/Node1/Device/Led', (req, res) => {
  const { Led } = req.body;
  if (Led !== 0 && Led !== 1) {
    return res.status(400).json({ error: 'Giá trị Light phải là 0 hoặc 1' });
  }
  pubTopic('Node1/Device/Led', Led );
  db.ref('Node1/Devices/Led').set(Led);
  res.json({ message: `Đã gửi LED: ${Led}` });
  
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});