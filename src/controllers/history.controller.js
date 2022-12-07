const { save, findAll, findById } = require("../services/history.service");

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

exports.find = async (req, res) => {
    try {
        const histories = await findAll();
        res.json({
            success: true,
            data: histories,
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

exports.findById = async (req, res) => {
    try {
        const history = await findById(req.params.id);
        res.json({
            success: true,
            data: history,
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
