export default interface RepositoryInterface<T> {
  GetAll(): Promise<T[]>;
  GetById(id: number): Promise<T | null>;
  Create(data: T): Promise<T>;
  Update(data: T): Promise<T>;
  Delete(id: number): Promise<T>;
}
