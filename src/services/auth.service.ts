import api from '../api/axios';

interface LoginResponse {
    access: string;
    refresh: string;
}

interface LoginRequest {
    username: string;
    password: string;
}

export const login = async (loginRequest: LoginRequest): Promise<LoginResponse> => {
    try {
        const response = await api.post('/api/token/', loginRequest);
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