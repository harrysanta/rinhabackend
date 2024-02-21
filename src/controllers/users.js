module.exports = {
  async getUser(req, res) {
    try {
      res.status(200).json("sucess");
    } catch (error) {
      throw error;
    }
  },
};
