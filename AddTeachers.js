const schemaaa = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  });
  const Userdb = mongoose.model('Teacherdb', schemaaa);
  module.exports = Userdb;
