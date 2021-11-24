//  ------Space Hunter----------//

//Premise - You are a veteran agent of the Eternal Empire, you excel at high risk, no failure operations that ensure the continued prosperity and expansion of the great galactic empire 
//       of mankind. Tasked with the annihilation of an S-class anomaly(world-eater) that has halted the production of a manufacturing solar system, you must first obtain powerful 
//       allies to help you put a stop this threat. You will do this by finding, defeating and capturing legendary creatures from across the cosmos before taking on this nemesis.

let button = document.getElementById("button");
let inputBox = document.getElementById("inputText");
let para = document.getElementById("Example");
let para1 = document.getElementById("Example1");
let para2 = document.getElementById("Example2");
let response = "";

const agent = {
    
    age: 375,
    rank: 10,
    attack: 12,
    defence: 14,
    speed: 8,
    Gear: {

       monoMolecularSaber: 6, 
       plasmaWhip: 6,
       deflectorShield: 7,
       carbonMeshBodysuit: 7,
       chronoManipulator: 5,
    },
    Inventory :{
       
        quantumCage: 3,
        HBoost: 3,
        DBoost: 3,
        SBoost: 3,
    }
}

const mon1 = {
    
    age: 25,
    rank: 10,
    attack: 20,
    defence: 14,
    speed: 8,
    bonusItem: {
        magmaHammer: 10

    }
}
para.innerHTML = `Mankind has reached the stars, the galaxy is bustling with human life in all the many forms this now encompasses. However there are many dangers both known an unknown that lurk in the vastness 
                  of the void and humanity must stand united in the face of these ever looming threats. To this end the great galactic empire was established to maintain the safety and security
                  of its countless citizens, to establish trade both internally and with foreign entities and to push the boundaries of our knowledge and territories, ensuring our future as a major player
                  in the events to come. `;
    
para1.innerHTML = `...Agent, the Eternal Empire requires your unique skills once more. Your well honed skills will be put to the test to resolve this particular crisis. 
                We have lost contact with one our manufacturing solar systems, these are the life blood of the empire and as such production MUST be resumed. We
                have had scattered reports that an entity of incredible destructive power has been systematically destroying our on-world and orbital manufacturing platforms,
                as likely is evident, your mission is to annihilate this threat with utter prejudice so that production can promptly resume. As always you will be using a 
                code name for your mission, what will you be going by this time?`;

para2.innerHTML = ""                 

function codeName(){
    response = inputBox.value;
    inputBox.value = "";
    agent.name = response;
    para2.innerHTML = `Good ${agent.name} it is then, go do what you do best - track down, subdue and use a team of the most deadly entities in the galaxy to neutralise this threat to the empire!`

}

function battle(){
    agent.speed = Math.floor((Math.random() * agent.speed) + 1);
    mon1.speed = Math.floor((Math.random() * mon1.speed) + 1);
    if ((agent.attack*agent.speed) > (mon1.attack*mon1.speed)){
        mon1.health == ((mon1.health-((mon1.attack*mon1.speed)-(agent.attack*agent.speed))));
        console.log (`Good hit, the enemies health is down to${mon1.health} out of 100`)
        
        agent.speed = Math.floor((Math.random() * agent.speed) + 1);
        mon1.speed = Math.floor((Math.random() * mon1.speed) + 1);

    }
    else if (((mon1.attack*mon1.speed))> (agent.attack*agent.speed)){
        agent.health ==((agent.health-((agent.attack*agent.speed-mon1.attack*mon1.speed))));
        console.log (`You got hit! You're health is down to ${agent.health} out of 100`)
    }

    else {
        console.log ("It's a draw, one more time!");

  
    }
}
