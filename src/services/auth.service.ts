import api from '../api/axios';

interface LoginResponse {
    access: string;
    refresh: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

interface SignupRequest {
    username: string;
    email: string;
    password: string;
}

interface SignupResponse {
    username: string;
    email: string;
    date_joined: string;
}



export const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await api.post('/api/token/', loginRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const signup = async (signupRequest: SignupRequest): Promise<SignupResponse> => {
    try {
        const response = await api.post('/users/', signupRequest);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const logout = async (): Promise<void> => {
    await localStorage.removeItem('token');
}

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("token");
};