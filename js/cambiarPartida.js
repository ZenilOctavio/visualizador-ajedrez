/**
 * 
 * @param {Event} event 
 */
function changeMatch(event){
    const newPartida = event.target.value
    console.group(newPartida)
    console.log(matchesDictionary[newPartida])
    console.groupEnd()

}