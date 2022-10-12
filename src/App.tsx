import { Envelope, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import './styles/global.css'

import Logo from '../public/react.svg'

export function App() {

  return (
    <div className='flex flex-col items-center m-auto justify-center max-w-[400px] min-h-screen gap-10'>
      <div className='flex flex-col items-center'>
        <img src={Logo} alt="react-logo" className='h-[120px]' />

        <Heading
          children="Ignite Lab"
          size='lg'
        />

        <Text
          children="Faça login e comece a usar"
          size='md'
          color='gray-400'
        />

      </div>

      <div className='w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-3'>
          <Text children="Endereço de e-mail" size='md' />

          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input placeholder="Type your e-mail address" />
          </TextInput.Root>
        </div>

        <div className='w-full flex flex-col gap-3'>
          <Text children="Sua senha" size='md' />

          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input placeholder="**********" type="password" />
          </TextInput.Root>
        </div>

        <div className="flex items-center gap-2 mb-9">
          <Checkbox />
          <Text>
            Lembrar de mim por 30 dias
          </Text>
        </div>

        <Button children='Entre na plataforma' />
      </div>

      <div className='flex flex-col gap-4 items-center'>
        <Text
          children="Esqueceu sua senha?"
          size='sm'
          color='gray-400'
        />

        <Text
          children="Não possui conta? Crie uma conta!"
          size='sm'
          color='gray-400'
        />
      </div>

    </div>
  )
}