import React, { createContext, useReducer, useState } from 'react'

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}
interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amoutSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void

}

export const CyclesContext = createContext({} as CyclesContextType)
interface CyclesContextProviderProps {
  children: React.ReactNode;
}
interface CyclesState {
  cycles: Cycle[],
  activeCycleId: string | null
}

type Action =
  | {
    type: 'ADD_NEW_CYCLE';
    payload: {
      newCycle: Cycle;
    };
  }
  | {
    type: 'INTERRUPT_CURRENT_CYCLE';
    payload: {
      activeCycleId: string | null
    }
  }
  | {
    type: 'MARK_CURRENT_CYCLE_AS_FINISHED';
    payload: {
      activeCycleId: string | null
    }
  }
export function CyclesContextProvider({ children }
: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: Action) => {
      if (action.type === 'ADD_NEW_CYCLE') {
        return {
          ...state,
          cycles: [...state.cycles, action.payload.newCycle],
          activeCycleId: action.payload.newCycle.id,
        }
      }

      if (action.type === 'INTERRUPT_CURRENT_CYCLE') {
        return {
          ...state,
          cycles: state.cycles.map(cycle => {
            if (cycle.id === state.activeCycleId) {
              return { ...cycle, interruptedDate: new Date() }
            } else {
              return cycle
            }
          }),
          activeCycleId: null,
        }
      }
      return state
    }, [{
      cycles: [],
      activeCycleId: null,
    }])

  const [amoutSecondsPassed, setAmountSecondsPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      minutesAmount: data.minutesAmount,
      task: data.task,
      startDate: new Date(),
    }
    // setCycles(state => [...state, newCycle])
    dispatch({
      type: 'ADD_NEW_CYCLE',
      payload: {
        newCycle,
      },
    })
    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    // setCycles(state => state.map(cycle => {
    //   if (cycle.id === activeCycleId) {
    //     return { ...cycle, interruptedDate: new Date() }
    //   } else {
    //     return cycle
    //   }
    // }))
    dispatch({
      type: 'INTERRUPT_CURRENT_CYCLE',
      payload: {
        activeCycleId,
      },
    })
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    // setCycles(state => state.map(cycle => {
    //   if (cycle.id === activeCycleId) {
    //     return { ...cycle, finishedDate: new Date() }
    //   } else {
    //     return cycle
    //   }
    // }))
    dispatch({
      type: 'MARK_CURRENT_CYCLE_AS_FINISHED',
      payload: {
        activeCycleId,
      },
    })
  }

  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      amoutSecondsPassed,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle,
    }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
