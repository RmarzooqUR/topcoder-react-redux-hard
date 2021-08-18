import types from './types'

const initialState ={
    plans: ['ore1','ore2'],
    finished:[],
    entries: [[]]
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case types.AddMiningPlan:
            return {...state, plans:state.plans.push(action.payload)}
        case types.AddMiningEntry:
            state.entries[state.entries.length-1].push(action.payload.amount);
            if (action.payload.lastBlock){
                state.finished.push(state.plans[0])
                let newPlans = state.plans.slice(1);
                if (newPlans.length !== 0) state.entries.push([])
                return {
                    ...state,
                    plans:newPlans,
                    finished:state.finished,
                    entries:state.entries
                }
            }
            return {...state, entries:state.entries}
        default:
            return state;
    }
}


export default reducer;