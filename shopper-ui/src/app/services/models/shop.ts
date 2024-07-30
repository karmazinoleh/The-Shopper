/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Shop {
  createdBy?: number;
  createdDate?: string;
  id?: number;
  lastModifiedDate?: string;
  owner?: User;
  shareable?: boolean;
  shopName?: string;
}
