import { IPost } from './Post';

export interface IPathContext {
  readonly tags?: ReadonlyArray<string>;
  readonly categories?: ReadonlyArray<string>;
  readonly categoryName: string;
  readonly tagName?: string;
  readonly posts?: ReadonlyArray<IPost>;
  readonly next: any;
  readonly prev: any;
}
