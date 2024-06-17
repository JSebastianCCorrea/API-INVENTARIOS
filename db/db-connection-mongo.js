const mongoose = require('mongoose');

const getConnection = async () => {

    try {

        const url = 'mongodb://sebastianccorrea:M4ximum5ecurity@ac-m1xjc2l-shard-00-00.mnrpenn.mongodb.net:27017,ac-m1xjc2l-shard-00-01.mnrpenn.mongodb.net:27017,ac-m1xjc2l-shard-00-02.mnrpenn.mongodb.net:27017/inventarios2024SS?ssl=true&replicaSet=atlas-7szrmh-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

        await mongoose.connect(url);

        console.log('conexion exitosa!!');

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}