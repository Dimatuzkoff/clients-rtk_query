// hooks
import { useLoginUserMutation } from '@/features/auth/api/authApi';
// types
import type { IAuth } from '@/features/auth/model/types/auth'

export const useLoginUser = () => {
    const [loginUser, result] = useLoginUserMutation();

    const loginNewUser = async (
        user: IAuth,
        onSuccess: () => void,
    ) => {
        const { phone, password } = user
        if (!phone || !password) return
        try {
            await loginUser(user).unwrap()
            onSuccess();            
        } catch (error) {
            console.error('created error', error);
        }
    }
    return {
        loginNewUser,
        ...result,
    }
}