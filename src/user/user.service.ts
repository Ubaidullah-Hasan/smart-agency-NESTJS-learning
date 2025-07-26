import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string {
    return 'List of all users';
  }
}
