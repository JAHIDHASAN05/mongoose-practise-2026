export type TUser={
      id?: string,
      password:string,
      needsPasswordChange?:boolean,
      role?: 'admin' | 'student' | 'stuff',
      status?: 'pending' | 'blocked' |'active',
      isDeleted?: boolean
}