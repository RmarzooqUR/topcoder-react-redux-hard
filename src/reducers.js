import types from './types'

const initialState ={
    plans: ['ore1','ore2','ore3','ore4','ore5'],
    finished:[],
    entries: [[]]
}

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case types.AddMiningPlan:
            return {...state, plans:state.plans.push(action.payload)}
        case types.AddMiningEntry:
            let newEntries = state.entries[state.entries.length-1].push(action.payload.amount);
            if (action.payload.lastBlock){
                let newFinished = state.finished.push(state.plans[0])
                let newPlans = state.plans.slice(1);
                if (state.plans.length !== 0) newEntries.push([])
                return {
                    ...state,
                    plans:newPlans,
                    finished:newFinished,
                    entries:newEntries
                }
            }
            return {...state, entries:newEntries}
        default:
            return state;
    }
}


export default reducer;