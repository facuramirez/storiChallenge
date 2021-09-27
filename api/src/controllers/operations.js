var operations = {
    saldo_total: function(transactions) {
        let saldo_total = 0.0;
        transactions.forEach( (transaction) => {
            if(transaction.Id !== ''){
                saldo_total += parseFloat(transaction.Transaction);               
            }            
        })
        return saldo_total.toFixed(2);
    },
    transacciones_por_mes: function(transactions) {
        let transacciones = [];
                
        transactions.forEach( (transaction) => {
            if(transaction.Id !== '') {
                var mes = new Date(transaction.Date).getMonth()+1;
                transacciones.push(mes);
            }
        })
        
        let cantidad = {
            Enero: transacciones.filter( (e) => e === 1).length,
            Febrero: transacciones.filter( (e) => e === 2).length, 
            Marzo: transactions.filter( (e) => e === 3).length,
            Abril: transacciones.filter( (e) => e === 4).length,
            Mayo: transacciones.filter( (e) => e === 5).length,
            Junio: transacciones.filter( (e) => e === 6).length,
            Julio: transacciones.filter( (e) => e === 7).length,
            Agosto: transacciones.filter( (e) => e === 8).length,
            Septiembre: transacciones.filter( (e) => e === 9).length,
            Octubre: transacciones.filter( (e) => e === 10).length,
            Noviembre: transacciones.filter( (e) => e === 11).length,
            Diciembre: transacciones.filter( (e) => e === 12).length
        };

        return cantidad;        
    },
    debito_medio: function(transactions) {
        let debito_medio = 0;

        transactions = transactions.filter( (e) => e.Transaction < 0)
        let cantidad_operaciones = transactions.length;
        let total_debito = 0;
        transactions.forEach( (e) => {
            total_debito += parseFloat(e.Transaction);
        })

        debito_medio = total_debito / cantidad_operaciones;

        return debito_medio.toFixed(2);
    },
    credito_medio: function(transactions) {
        let credito_medio = 0;

        transactions = transactions.filter( (e) => e.Transaction > 0)
        let cantidad_operaciones = transactions.length;
        let total_credito = 0;
        transactions.forEach( (e) => {
            total_credito += parseFloat(e.Transaction);
        })

        credito_medio = total_credito / cantidad_operaciones;

        return credito_medio.toFixed(2);
    }
}


module.exports = operations;