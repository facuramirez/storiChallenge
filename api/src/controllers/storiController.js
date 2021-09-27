var storeFile = require('../models/models');
const operations = require('./operations');
const moment = require('moment');
const enviarMail = require('./sendMail');

var controller = {
    home: (req, res) => {
        res.json({message: "I'm the function HOME"})
    },
    saveFile: (req, res) => {
        var {transactions, email} = req.body;
        
        transactions_sort = transactions.sort((a, b) => moment(a.Date, "DD-MM").unix() - moment(b.Date, "DD-MM").unix());
        
        let saldo_total = operations.saldo_total(transactions_sort); // saldo total truncado a 2 decimales
        let cantidad_transacciones = operations.transacciones_por_mes(transactions_sort);   // cantidad de transacciones agrupadas por mes    
        let debito_medio = operations.debito_medio(transactions_sort); // promedio total debitos
        let credito_medio = operations.credito_medio(transactions_sort); // promedio total creditos

        let informacion = {
            saldo_total,
            cantidad_transacciones,
            debito_medio,
            credito_medio
        }
        
        let cantidad_filtrada = {};

        for(key in cantidad_transacciones) {
            if(cantidad_transacciones[key] > 0) {
                cantidad_filtrada[key] = cantidad_transacciones[key]
            }
        }

        var csvFile = new storeFile({
            email,
            transactions
        })

        csvFile.save()
        .then(response => {
            enviarMail(email, 'Resúmen de Cuenta', informacion, cantidad_filtrada);
            return res.json(informacion);
        })
        .catch(error => {
            return res.status(500).send({message:'Error al guardar el archivo'});
        })

        // csvFile.save((err, fileStored) => {
        //     if(err) return res.status(500).send({message:'Error al guardar el archivo'});
        //     if(!fileStored) return res.status(404).send({message:'No se ha podido guardar el archivo'});

        //     return res.json({fileStored});
        // });
        

    },
    getFiles: async (req, res) => {
        var files = await storeFile.find();

        return res.json(files);
    },
    deleteFiles: async (req, res) => {
        var files = await storeFile.deleteMany();

        return res.json(files);
    }
};


module.exports = controller;