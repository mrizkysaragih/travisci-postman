
var mysql = require('mysql');

const pool = new mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root12345',
    database : 'travisci_postman'
});


pool.on('error', function (err, client) {
    console.error('client error', err.message, err.stack);
});



module.exports = {
    connect: () => {
        return pool.connect().then(client => {
            client.release();
        });
    },

    end: () => {
        return pool.end();
    },

    query: (qy, params) => {
        return pool.connect().then(client => {
            return client.query(qy, params)
                .then(res => {
                    client.release();
                    return res.rows || [];
                })
                .catch(err => {
                    if (process.env.NODE_ENV == 'production') console.error(qy, params || '');
                    if (client && client.release) client.release();
                    //throw err;
                });
        });
    }
}
