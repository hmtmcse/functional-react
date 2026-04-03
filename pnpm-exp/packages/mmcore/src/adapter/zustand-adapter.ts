import { create, createStore } from "zustand"
import {
  devtools,
  persist,
  subscribeWithSelector
} from "zustand/middleware"

// Core
export const mmZustandCreate = create
export const mmZustandCreateStore = createStore

// Middleware
export const mmZustandDevtools = devtools
export const mmZustandPersist = persist
export const mmZustandSubscribeWithSelector = subscribeWithSelector