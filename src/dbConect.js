import { MongoClient } from 'mongodb'
const cliente = new MongoClient('mongodb+srv://root:123@aluradocs.rlo4b8m.mongodb.net/?retryWrites=true&w=majority')

let documentosColecao 

try {
    await cliente.connect()
    const db = cliente.db('alura-websockets')

    documentosColecao = db.collection('documentos')

    console.log('sucesso ao conectar no mongodb');
    
} catch (error) {
    console.log(error);
}

export { documentosColecao }