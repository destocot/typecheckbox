import { Container } from '@/components/container'
import { Main } from '@/components/main'
import { Button } from '@/components/ui/button'
import { login } from '@/features/auth/actions/login'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Login' }

export default function Page() {
  return (
    <Main>
      <Container className='space-y-8 pb-8 pt-16'>
        <h1 className='text-3xl font-bold'>Login</h1>

        <p className='max-w-prose text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          assumenda repudiandae debitis veritatis! Voluptatum, quam laudantium.
          Et earum qui delectus voluptates explicabo rem, porro autem nam
          consectetur sit. Eum, doloremque?
        </p>

        <form action={login} className='w-full max-w-[350px] space-y-4'>
          <div>
            <label
              htmlFor='username'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Username
            </label>

            <input
              type='text'
              id='username'
              name='username'
              className='w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              className='w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
          </div>

          <Button type='submit' className='float-right'>
            Log In
          </Button>
        </form>
      </Container>
    </Main>
  )
}
