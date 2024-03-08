const { MongoClient } = require('mongodb');

// Thay thế chuỗi kết nối này với URI MongoDB thực của bạn
const uri = 'mongodb://username:password@localhost:27017/yourdatabase';

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Đã kết nối với MongoDB');

    // Các thao tác MongoDB của bạn ở đây

  } finally {
    await client.close();
    console.log('Đã ngắt kết nối từ MongoDB');
  }
}

connectToMongoDB();
