
    const stores = ['detalhes'];

    let connection = null;

    class ConnectionFactory{

        constructor(){

            throw new ErrorEvent("Não é possivel instanciar essa classe");
        }

        static getConnection(){

            return new Promise((resolve, reject) => {
                if(connection) return resolve(connection);

                const openRequest = indexedDB.open('fbs', 2);

                openRequest.onupgradeneeded = e => {

                    ConnectionFactory._createStore(e.target.result);
                }

                openRequest.onsuccess = e => {
                    connection = e.target.result;

                    connection.close = () => {
                        throw new Error('Você não pode fechar diretamente a conexão');
                    }
                    resolve(connection);
                }

                openRequest.onerror = e => {
                    reject(e.target.error.name);
                }
            });
        }

        static _createStore(connection){

            stores.forEach(store => {
                if(connection.objectStoreNames.contains(store))
                    connection.deleteObjectStore(store);

                connection.createObjectStore(store, {autoIncrement: true});
            })
        }

    }


export default ConnectionFactory;