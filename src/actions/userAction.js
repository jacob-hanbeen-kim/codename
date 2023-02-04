import { userService } from "../services/user-service";

export const fetchUser = (id) => async dispatch => {
    const response = await userService.getUserById(id);

    dispatch({ type: 'FETCH_USER', payload: response });
}