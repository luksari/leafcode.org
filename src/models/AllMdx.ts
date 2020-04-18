import { IPost } from './Post';

export interface IAllMdx {
  readonly totalCount: number;
  readonly edges: ReadonlyArray<{ readonly node: IPost }>;
}
