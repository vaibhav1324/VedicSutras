import { RouteProps } from 'react-router-dom';

export interface RouteWithSubRoutesProps extends RouteProps {
  path: string;
  routes?: Record<string, RouteWithSubRoutesProps>;
}
