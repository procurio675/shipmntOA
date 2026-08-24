exports.createItem = (req, res) => {

    const name = req.body.name;
    const tax = req.body.tax;

    if(!name) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }
    if(!tax || tax < 0 || tax > 28) {
        res.status(400).json({
            "status": 400, "message": "Missing required field(s)"
        })
    }

    
};