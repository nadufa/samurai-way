import {UserType} from "../redux/usersReducer";

type ObjPropName = 'id' | 'followed'
export const updateObjectInArray = (items: UserType[], itemId: number, objPropName: ObjPropName, newObjProps: { followed: boolean }) => {
    return items.map(u => u[objPropName] === itemId ? {...u, ...newObjProps} : u)
}
