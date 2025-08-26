import {JwtPayload} from "jwt-decode";
import {Role} from "./role.model";

export interface JwtCustomPayload extends JwtPayload {
  roles: Role[]
}
