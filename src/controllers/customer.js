exports.createCustomer = (req, res) => {
    let name;
    let category;
    let address;
    let opening_balance;

    try {
        name = req.body.name;
    } catch (error) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }
    try {
        category = req.body.name;
    } catch (error) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }
    try {
        address = req.body.name;
    } catch (error) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }
    try {
        opening_balance = req.body.name;
    } catch (error) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }

};