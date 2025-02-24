import { create } from 'zustand'
import { createSelectors } from './utils'

type ErrorState = {
  errorMessage: string | null
  actions: {
    changeErrorMessage: (errorMessage: string | null) => void
  }
}

const defaultState: Omit<ErrorState, 'actions'> = {
  errorMessage: null,
}

export const useErrorStore = createSelectors(
  create<ErrorState>()((set, get) => ({
    ...defaultState,
    actions: {
      changeErrorMessage(errorMessage) {
        set({ errorMessage })
      },
    },
  })),
)
