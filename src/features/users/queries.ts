import { prisma } from '@/lib/prisma'

export async function findOne(username: string) {
  return await prisma.user.findUnique({
    where: { username },
  })
}

export async function create(username: string, hashedPassword: string) {
  return await prisma.user.create({
    data: { username, password: hashedPassword },
  })
}
