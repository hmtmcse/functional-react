import { create, createStore } from "zustand"
import {
  devtools,
  persist,
  subscribeWithSelector
} from "zustand/middleware"

// Core
export const zustandCreate = create
export const zustandCreateStore = createStore

// Middleware
export const zustandDevtools = devtools
export const zustandPersist = persist
export const zustandSubscribeWithSelector = subscribeWithSelector