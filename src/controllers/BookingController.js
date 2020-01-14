const Booking = require('../models/Booking')

module.exports = {
    async store(request, response) {
        const { user_id: user } = request.headers;
        const { spot_id: spot } = request.params;
        const { date } = request.body;

        const booking = await Booking.create({ user, spot, date });

        await booking.populate('spot').populate('user').execPopulate();

        return response.json(booking);
    }
}