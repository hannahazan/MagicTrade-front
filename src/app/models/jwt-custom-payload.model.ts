import {JwtPayload} from "jwt-decode";
import {Role} from "./role.model";

export interface JwtCustomPayload extends JwtPayload { // JwtPayload : interface from the jwt-decode library
  roles: Role[]
}
