class DetailsDao{

    constructor(connection){

        this._connection = connection;
        this._store = 'detalhes';
    }

    adiciona(detalhes){

        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .put(detalhes, 0);

            request.onsuccess = e => resolve();
            request.onerror = e => {
                const request2 = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(detalhes, 0);

                request2.onsuccess = e => resolve();
                request2.onerror = e => {
                    console.log(e.target.error);
                    reject('Mão foi possivel salvar');
                }
            }
        });
    }

    altera(detalhes, id){
        return new Promise((resolve, reject) => {
            const request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .put(detalhes, id);

            request.onsuccess = e => resolve();
            request.onerror = e => {
                console.log(e.target.error);
                reject('Mão foi possivel salvar');
            }
        });
    }

    busca(){

        return new Promise((resolve, reject) => {

            const camisas = []

            const cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            cursor.onsuccess = e => {
                
                const atual = e.target.result;

                if(atual){
                    
                    const camisa = {
                        titulo: atual.value.titulo,
                        preço: atual.value.preço,
                        imagem: atual.value.imagem,
                        page: atual.value.page,
                    }

                    camisas.push(camisa);
                    atual.continue();
                }else{
                    resolve(camisas);
                }
            }

            cursor.onerror = e => {
                console.log(e.target.error);
                reject('não foi possivel realizar a busca');
            }
        })
    }
}

export default DetailsDao