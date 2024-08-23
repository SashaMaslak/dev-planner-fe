import { IUser } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

import { TypeUserForm } from './auth.service'

export interface IprofileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IprofileResponse>(this.BASE_URL)
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put(this.BASE_URL, data)
		return response.data
	}
}

export const userService = new UserService()
