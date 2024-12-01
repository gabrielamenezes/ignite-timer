import { Play } from "@phosphor-icons/react"
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles"
import { useForm } from 'react-hook-form'

export const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }
  const task = watch('task')
  const isSubmitDisabled = !task;
  
  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput type="text" id="task" placeholder="Dê um nome para o seu projeto" list="task-suggestions" {...register('task')}/>
          <datalist id="task-suggestions">
            <option value="Projeto 1"></option>
            <option value="Projeto 2"></option>
            <option value="Projeto 3"></option>
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" step={5} min={5} max={60} {...register('minutesAmount', {
            valueAsNumber: true
          })}/>

          <span>minutos.</span>
        </FormContainer>
        
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit" disabled={!isSubmitDisabled}>
          <Play size={24}/>
          Começar
        </StartCountdownButton>
      </form>

    </HomeContainer>
  )
}
