import { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export const NewCycleForm = () => {
  const { register } = useFormContext()
  const { activeCycle } = useContext(CyclesContext)
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text" id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        {...register('task')}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number" id="minutesAmount" placeholder="00" step={5} min={5}
        max={60} {...register('minutesAmount', {
          valueAsNumber: true,
        })}
        disabled={!!activeCycle}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
