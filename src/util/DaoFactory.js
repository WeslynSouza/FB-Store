import connectionFactory from './ConnectionFactory';
import DetailsDao from '../pages/Details/DetailsDao';

class DaoFactory{

    constructor(){

        throw new Error('Você não instanciar essa classe');
    }

    static getDetailsDao(){

        return connectionFactory.getConnection()
            .then(conn => new DetailsDao(conn))
    }
}

export default DaoFactory;