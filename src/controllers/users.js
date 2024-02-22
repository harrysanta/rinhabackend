const User = require("../../db/models/user");

module.exports = {
  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        where: {
          id,
        },
      });
      res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  },
};
