export const initialStore=()=>{
  return {
   personajes: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_personajes':
      return {
        ...store,
        personajes: action.payload
      };
    default:
      throw Error('Unknown action.');
  }    
}
