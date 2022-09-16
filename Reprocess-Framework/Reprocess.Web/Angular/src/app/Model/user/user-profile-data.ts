import { RoleData } from "../role/role-data";
import { UserData } from "./user-data";

export class UserProfileData {
public User : UserData ;
  public Role: RoleData;
  public JsonRole: string;
  public roles: Array<RoleData>;
}
