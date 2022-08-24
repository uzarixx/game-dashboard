import $api from '../http'

export default class AuthService {
    static async login(username,password) {
        return $api.post('/login', {username, password})
    }
    static async registration(username,password) {
        return $api.post('/registration', {username, password})
    }
    static async getUsers() {
        return $api.get('/users')
    }
    static async getMe() {
        return $api.get('/me')
    }
}