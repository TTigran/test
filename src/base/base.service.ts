export abstract class BaseService{
    abstract  getById(id: string): object;
    abstract  add(object: object): object
}