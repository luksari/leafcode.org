import { IData } from './Data';
import { IPageResources } from './PageResources';
import { IPathContext } from './PathContext';

export interface IPageProps {
  readonly data: IData;
  readonly location: Location;
  readonly pageResources?: IPageResources;
  readonly pathContext: IPathContext;
}
