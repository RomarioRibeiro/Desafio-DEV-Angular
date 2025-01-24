import { Farm } from './farm.model';
export class Animal {
  id?: number
  name?: string
  tag?: string
  farmId: number
  farm = new Farm()
}
