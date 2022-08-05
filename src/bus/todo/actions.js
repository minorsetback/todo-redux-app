//Types
import { types } from './types';

export const clockActions = Object.freeze({
    setNewToDo: () => {
        return {
            type: types.SET_NEW_TODO
        }
    },
    deleteToDo: () => {
        return {
            type: types.DELETE_TODO
        }
    },
    editStatusToDo: () => {
        return {
            type: types.EDIT_STATS_TODO
        }
    }
})