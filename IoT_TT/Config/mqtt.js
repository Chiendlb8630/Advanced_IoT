const mqtt = require('mqtt');
const brokerUrl = 'mqtt://192.168.0.108:1883'; // Sửa IP nếu cần
const client = mqtt.connect(brokerUrl);


client.on('connect', () => {
  console.log('MQTT connected');
});

client.on('error', (err) => {
  console.error('MQTT error:', err.message);
});


client.on('message', (topic, message) => {
  console.log(`Nhận từ ${topic}: ${message.toString()}`);

});

function subTopic(topic) {
  client.subscribe(topic, (err) => {
    if (err) {
      console.error(`❌ Lỗi subscribe ${topic}:`, err);
    } else {
      console.log(`✅ Đã subscribe: ${topic}`);
    }
  });
}

function pubTopic(topic, value) {
  client.publish(topic, String(value), {}, (err) => {
    if (err) {
      console.error(`❌ Gửi ${topic} lỗi:`, err);
    } else {
      console.log(`📤 Gửi ${topic}: ${value}`);
    }
  });
}


module.exports = {
  mqttClient: client,
  subTopic,
  pubTopic
};
