// hooks
import { useRegisterMutation } from '@/features/auth/api/authApi';
// types
import type { IAuth } from '@/features/auth/model/types/auth'

export const useRegister = () => {
    const [register, result] = useRegisterMutation();

    const createNewUser = async (
        newUser: IAuth,
        onSuccess: () => void,
    ) => {
        const { phone, password } = newUser
        if (!phone || !password) return
        try {
            await register(newUser).unwrap()
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