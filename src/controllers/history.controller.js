const { save } = require("../services/history.service");

const History = require("../models/history.model").History;

exports.save = async (req, res) => {
    const historyObject = new History(req.body);
    console.log(historyObject);
    try {
        const saved = await save(historyObject);
        res.json({
            success: true,
            data: saved,
        });
    } catch (e) {
        console.log("Descricao: " + e);
        res.json({
            success: false,
            error: {
                data: e,
            },
        });
    }
};
