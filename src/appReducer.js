export default (state, action)=>{
    switch(action.type){
        case 'remove_user':
            return{
                users:state.users.filter(user=>{
                    return user.id !== action.payload
                })
            }
        case 'add_user':
            return {
                ...state,
                users: [...state.users, action.payload],
              };

        case 'edit_user':
            const updateuser=action.payload
            const updateusers=state.users.map(user =>{
                if(user.id ==updateusers.id){
                    return updateuser
                }
                return user
            })
            return{
                users:updateusers
            }



        default:return state
    }
}