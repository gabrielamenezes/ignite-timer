import { HandPalm, Play } from '@phosphor-icons/react'
import {
  HomeContainer,
  StartCountdownButton, StopCountdownButton,
} from './styles'

import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number()
    .min(5, 'O ciclo precisa ser no mínimo de 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})
type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
export const Home = () => {
  const {
    createNewCycle,
    interruptCurrentCycle, activeCycle,
  } = useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, reset, watch } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  const task = watch('task')
  const isSubmitDisabled = !task
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {
          activeCycle
            ? (
              <StopCountdownButton
                type="button"
                onClick={interruptCurrentCycle}
              >
                <HandPalm size={24} />
                Interrupt
              </StopCountdownButton>
              )
            : (
              <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
                <Play size={24} />
                Começar
              </StartCountdownButton>
              )
        }
      </form>

    </HomeContainer>
  )
}
