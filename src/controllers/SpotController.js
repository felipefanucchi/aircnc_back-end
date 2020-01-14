const Spot = require("../models/Spot")
const User = require("../models/User")

module.exports = {
  async store(request, response) {
    const { filename: thumbnail } = request.file;
    const { company, techs, price } = request.body;
    const { user_id: user } = request.headers;

    const username = User.findById(user);

    if (!username) {
      return response.status(400).json({ error: "User does not exist" });
    }

    const spot = await Spot.create({
      user,
      thumbnail,
      company,
      techs: techs.split(","),
      price
    });

    return response.json(spot);
  }
};
