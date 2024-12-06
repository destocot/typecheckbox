'use server'

import { findOne } from '@/features/users/queries'
import { comparePasswords } from '@/lib/bcrypt'
import { setSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const user = await findOne(username)

  if (!user) return

  const isPasswordValid = await comparePasswords(password, user.password)

  if (!isPasswordValid) return

  await setSession({ id: user.id })

  redirect('/')
}
