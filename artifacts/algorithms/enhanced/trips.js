const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
// Supports filtering, sorting, and pagination
const tripsList = async (req, res) => {
    try {

        // Retrieve all trips from the database
        let results = await Model.find({}).exec();

        // -----------------------------
        // Filter by destination (resort)
        // Example:
        // /api/trips?resort=Hawaii
        // -----------------------------
        if (req.query.resort) {
            const resort = req.query.resort.toLowerCase();

            results = results.filter(trip =>
                trip.resort &&
                trip.resort.toLowerCase().includes(resort)
            );
        }

        // -----------------------------
        // Filter by maximum price
        // Example:
        // /api/trips?maxPrice=2000
        // -----------------------------
        if (req.query.maxPrice) {

            const maxPrice = Number(req.query.maxPrice);

            results = results.filter(trip =>
                getPrice(trip.perPerson) <= maxPrice
            );
        }

        // -----------------------------
        // Sort results
        // Example:
        // /api/trips?sort=price
        // /api/trips?sort=name
        // -----------------------------
        switch (req.query.sort) {

            case 'price':
                results.sort((a, b) =>
                    getPrice(a.perPerson) - getPrice(b.perPerson)
                );
                break;

            case 'name':
                results.sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;

            case 'length':
                results.sort((a, b) =>
                    getTripLength(a.length) - getTripLength(b.length)
                );
                break;

            default:
                // Leave original order
                break;
        }

        // -----------------------------
        // Pagination
        // Example:
        // /api/trips?page=2&limit=5
        // -----------------------------
        const page = Math.max(Number(req.query.page) || 1, 1);
        const limit = Math.max(Number(req.query.limit) || results.length, 1);

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedResults = results.slice(startIndex, endIndex);

        return res.status(200).json({
            totalTrips: results.length,
            page,
            limit,
            trips: paginatedResults
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: "Unable to retrieve trips."
        });
    }
};


 // Converts a price string such as "$1,995"
 // into a numeric value for comparisons.
function getPrice(price) {

    if (!price) {
        return 0;
    }

    return Number(price.replace(/[^0-9.]/g, ''));
}

// Converts a trip length such as "8 days"
// into a numeric value for comparisons.
function getTripLength(length) {

    if (!length) {
        return 0;
    }

    return parseInt(length);
}


// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode }) // Return single record
        .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

    if(!q)
    { // Database returned no data
        return res
            .status(404)
            .json(err);
    } else { // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }

};

// POST: /trips - Adds a new Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsAddTrip = async (req, res) => {
    try {
        const newTrip = new Trip({
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        });

        const q = await newTrip.save();

        return res
            .status(201)
            .json(q);

    } catch (err) {
        console.error('Error adding trip:', err);

        return res
            .status(400)
            .json({
                message: 'Unable to add trip.',
                error: err.message
            });
    }

};

// PUT: /trips/:tripCode - Updates a Trip
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    console.log(req.params);
    console.log(req.body);

    const q = await Model
        .findOneAndUpdate(
            { 'code': req.params.tripCode },
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();

    if (!q) { 
        // Database returned no data / trip code didn't match
        return res
            .status(400)
            .json(err);
    } else { 
        // Return resulting updated trip
        return res
            .status(201)
            .json(q);
    }

    // Uncomment the following line to show results of operation
    // on the console
    // console.log(q);
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
