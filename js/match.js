class Play{
    /**
     * 
     * @param {string} play 
     */
    constructor(play, turn){
        this.move = play   
        this.turn = turn     
    }
}

class Match{

    file
    plays
    /**
     * 
     * @param {string} file 
     */
    constructor(file){
        this.plays = []
        this.file = file
        const steps = file.split('\n')

        //Clean each step
        let turn = true
        for(let i = 0; i < steps.length; i++){
            let dotIndex = steps[i].indexOf('.')
            let step = steps[i].substring(dotIndex+1, steps.length)
            step = step.trim()
            let plays = step.split(' ')
            for (let play of plays){
                this.plays.push(new Play(play, (turn)? 'white': 'black'))
                turn = !turn
            }
        }
        console.log(this.plays)
    }

    start(){

    }
}

