export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
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
export function cyclesReducer(state: CyclesState, action: Action) {
  switch (action.type) {
    case 'ADD_NEW_CYCLE':
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }

    case 'INTERRUPT_CURRENT_CYCLE':
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
    case 'MARK_CURRENT_CYCLE_AS_FINISHED':
      return {
        ...state,
        cycles: state.cycles.map(cycle => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
