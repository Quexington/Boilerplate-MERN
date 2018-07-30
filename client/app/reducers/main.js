export default function(state={
  clickDisplay: 0
}, action){
  if (action.type == "CLICK") {
    var click_temp = state.clickDisplay + 1;
    return Object.assign({},state,{
      clickDisplay: click_temp
    });
  }
  if (action.type == "INIT") {
    var click_temp = action.data;
    return Object.assign({},state,{
      clickDisplay: click_temp
    });
  }
  return state
}
