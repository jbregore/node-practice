// // MYSQL CONNECTION
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE
// });



// // MYSQL CONNECTION
// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'dbnodemysql_1'
// });

// // Get all beers
// app.get('', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) throw err
//         console.log('connected as id ' + connection.threadId)
//         connection.query('SELECT * from tbl_beers', (err, rows) => {
//             connection.release() // return the connection to pool

//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//             // if(err) throw err
//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// })

// // Get an beer
// app.get('/:id', (req, res) => {
//     pool.getConnection((err, connection) => {
//         if (err) throw err
//         connection.query('SELECT * FROM tbl_beers WHERE id = ?', [req.params.id], (err, rows) => {
//             connection.release() // return the connection to pool
//             if (!err) {
//                 res.send(rows)
//             } else {
//                 console.log(err)
//             }

//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// });

// // Delete a beer
// app.delete('/:id', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if (err) throw err
//         connection.query('DELETE FROM tbl_beers WHERE id = ?', [req.params.id], (err, rows) => {
//             connection.release() // return the connection to pool
//             if (!err) {
//                 res.send(`Beer with the record ID ${[req.params.id]} has been removed.`)
//             } else {
//                 console.log(err)
//             }

//             console.log('The data from beer table are: \n', rows)
//         })
//     })
// });

// // Add beer
// app.post('', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if (err) throw err

//         const params = req.body
//         connection.query('INSERT INTO tbl_beers SET ?', params, (err, rows) => {
//             connection.release() // return the connection to pool
//             if (!err) {
//                 res.send(`Beer with the record ID ${params.id} has been added.`)
//             } else {
//                 console.log(err)
//             }

//             console.log('The data from beer table are:11 \n', rows)

//         })
//     })
// });

// // Update a record / beer
// app.put('/:id', (req, res) => {

//     pool.getConnection((err, connection) => {
//         if (err) throw err
//         console.log(`connected as id ${connection.threadId}`)

//         const { name, tagline, description, image } = req.body

//         connection.query('UPDATE tbl_beers SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?',
//             [name, tagline, description, image, req.params.id], (err, rows) => {
//                 connection.release() // return the connection to pool

//                 if (!err) {
//                     res.send(`Beer with the name: ${name} has been updated.`)
//                 } else {
//                     console.log(err)
//                 }

//             })

//         console.log(req.body)
//     })
// })


// LISTEN ON ENVIRONMENT PORT OR 5000
// app.listen(port, () => console.log(`Listening on port ${port}`));