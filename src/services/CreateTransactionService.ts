import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO{
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type}:RequestDTO): Transaction {

    const balance =  this.transactionsRepository.getBalance();
    const { total } = balance;

    if(type == 'outcome' && value > total){
      throw Error('This transaction was not possible');
    }

    const transaction = this.transactionsRepository.create({
        title,
        type,
        value
      });

      return transaction;
    
  } 
}

export default CreateTransactionService;
