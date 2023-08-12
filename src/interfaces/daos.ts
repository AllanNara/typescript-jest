import { UpdateWriteOpResult } from "mongoose";

export default interface IDAO<T, M> {
	get(): Promise<Array<T>>;
	getById(id: string): Promise<T | null>;
	create(object: M): Promise<T>;
	update(id: string, object: Object): Promise<UpdateWriteOpResult>;
}
