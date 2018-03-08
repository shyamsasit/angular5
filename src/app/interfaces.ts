/*
 * STATUS
 *
 */
import { HttpErrorResponse } from '@angular/common/http';



export interface LoginInfo {
  email: string;
  password: string;
}
export interface RegisterInfo {
  remail: string;
  rpassword: string;
  rpasswordr: string;
  ruser_name: string;
}
export interface ContactInfo {
  contact_name: string;
  message: string;
  contact_email: string;
  subject: string;
}

