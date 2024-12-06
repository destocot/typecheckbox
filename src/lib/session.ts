import { cookies } from 'next/headers'

import { SESSION_LIFESPAN_MS } from '@/features/auth/constants'
import { type Session, SessionInput, signToken, verifyToken } from '@/lib/jose'

export async function auth() {
  const session = (await cookies()).get('session')?.value

  if (!session) return null

  const decoded = await verifyToken(session)

  return decoded as Session
}

export async function setSession(user: SessionInput['user']) {
  const expiresAt = new Date(
    Math.floor((Date.now() + SESSION_LIFESPAN_MS) / 1000) * 1000,
  )

  const session: Session = {
    user: {
      id: user.id,
    },
    expires: expiresAt.toISOString(),
  }

  const encryptedSession = await signToken(session, expiresAt)

  ;(await cookies()).set('session', encryptedSession, {
    expires: expiresAt,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  })
}
