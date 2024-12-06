import { SALT_ROUNDS } from '@/features/auth/constants'
import { compare, hash } from 'bcryptjs'

export async function hashPassword(password: string) {
  return hash(password, SALT_ROUNDS)
}

export async function comparePasswords(password: string, hash: string) {
  return compare(password, hash)
}
