export interface IUser {
  user: IUserProfile;
  token: TUserToken;
}
export type TUserToken = string;
export interface IUserProfile {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  isPhoneVerified: boolean;
  userType: number;
  createdAt: string;
  lastLoginAt: string;
  isActive: boolean;
  companyName: string;
  taxId: string;
  businessLicenseNumber: string;
  fullName: string;
}
export interface UserToken {
  token: string;
  exp: number;
}
