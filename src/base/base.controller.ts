export abstract class BaseController {
    abstract  create(object: object): object;
    abstract  get(id: string): object
}