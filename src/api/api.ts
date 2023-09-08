import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '661cf9f2-0669-43bd-b603-e28fa3098b60'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(
            `follow/${userId}`
        )
    },
    unfollow(userId: number) {
        return instance.delete(
            `follow/${userId}`
        )
    },
    getProfile(userId: number) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status: status})
    },
}

export const authAPI = {

    me() {
        return instance.get(`auth/me`)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }

}
