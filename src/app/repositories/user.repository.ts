import { users } from '../shared/mocks/users.mock';
import { User } from '../models/user.model';
export class UserRepository {
  private data: User[] = users.map(u => new User(u.id, u.nome, u.matricula,u.curso, u.email));
  
  getById(id: number): User | undefined {
    return this.data.find(user => user.id === id);
  }
}