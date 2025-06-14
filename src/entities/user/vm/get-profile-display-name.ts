import { User } from "../model/user-session"

export const getProfileDisplayName = (user: User) => {
  return user.name ? user.name + " " + user.secondName : user.email

}
