class Card {
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name,cost,power,res){
        super(name,cost)
        this.power = power
        this.res = res
    }
    attack(target){
        if( target instanceof Unit ) {
        target.res = target.res - this.power
        }else{
            throw new Error("Target must me a Unit!")
        }
    }
    showStats(){
        console.log(`Name: ${this.name} ,Cost: ${this.cost}, Power: ${this.power}, Res: ${this.res}`)
    }
}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost)
        this.text = text
        this.stat = stat
        this.magnitud = magnitud
    }
    play(target){
        if( target instanceof Unit ) {
            if(this.stat == "power"){
                target.power = target.power + this.magnitud
            }else if(this.stat == "resilience"){
                target.res = target.res + this.magnitud
            }else{
                console.log("card is broken")
            }
            }else{
                throw new Error("Target must me a Unit!")
            }
        }
    }



    let Red_Belt_Ninja    = new Unit("Red Belt Ninja",3,3,4)
    let Black_Belt_Ninja    = new Unit("Black Belt Ninja",4,5,4)
    let Hard_Algorithm = new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",+3)
    let Unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2)
    let Pair_Programming = new Effect("Pair Programming",3,"increase target's power by 2","power",+2)

    Red_Belt_Ninja.showStats()
    Hard_Algorithm.play(Red_Belt_Ninja)
    Red_Belt_Ninja.showStats()
    Unhandled_Promise_Rejection.play(Red_Belt_Ninja)
    Red_Belt_Ninja.showStats()
    Pair_Programming.play(Red_Belt_Ninja)
    Red_Belt_Ninja.showStats()
    Red_Belt_Ninja.attack(Black_Belt_Ninja)
    Black_Belt_Ninja.showStats()

