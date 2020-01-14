const Spot = require("../models/Spot");
const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const { tech } = request.query;

    const spots = await Spot.find({ techs: tech });

    return response.json(spots);
  },

  async store(request, response) {
    const { filename: thumbnail } = request.file;
    const { company, techs, price } = request.body;
    const { user_id: user } = request.headers;

    const username = await User.findById(user);

    if (!username) {
      return response.status(400).json({ error: "User does not exist" });
    }

    let spot = await Spot.findOne({ company });

    if (!spot) {
      spot = await Spot.create({
        user,
        thumbnail,
        company,
        techs: techs.split(",").map(tech => tech.trim()),
        price
      });
    }

    return response.json(spot);
  }
};
