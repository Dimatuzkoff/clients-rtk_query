// hooks
import { useCreateUserMutation } from '@/features/auth/api/authApi';
// types
import type { IAuth } from '@/features/auth/model/types/auth'

export const useCreateUser = () => {
    const [createUser, result] = useCreateUserMutation();

    const createNewUser = async (
        newUser: IAuth,
        onSuccess: () => void,
    ) => {
        const { phone, password } = newUser
        if (!phone || !password) return
        try {
            await createUser(newUser).unwrap()
            onSuccess();            
        } catch (error) {
            console.error('created error', error);
        }
    }
    return {
        createNewUser,
        ...result,
    }
}