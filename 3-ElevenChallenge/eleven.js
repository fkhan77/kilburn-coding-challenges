function eleven() {
  // there once lived a hero named wahn.
  let wahn = 1;
  // also lived an evil demon named mako.
  let mako = 666;
  // wahn set off on a quest to put the demon to an end.
  // whose only weakness was the mighty golden taco.
  function retrieveMightyTaco() {
    if (wahn === 332) {
      wahn += 1;
    }
  }
  // he attempted to unearth the taco but flopped to the ground. fail.
  retrieveMightyTaco();
  // no matter, he vowed to become stronger and eventually prevail.
  // wahn started with slaying some wildlife. A bat, a bear, and a bee.
  function murderWildlife(creature) {
    wahn += 5;
  }
  // he felt bad but needed the xp.
  murderWildlife("bat");
  murderWildlife("bear");
  murderWildlife("bee");
  // relaxation is important to strength, something he was missing.
  // wahn went down to the river to do some fishing.
  const riverFish = [
    {
      type: "trout",
      xp: 20,
    },
    {
      type: "carp",
      xp: 30,
    },
    {
      type: "eel",
      xp: 17,
    },
    {
      type: "flyingFish",
      xp: 20,
    },
    {
      type: "rainbowShark",
      xp: 100,
    },
  ];
  // wahn fished for hours and hours, he reduced the river to nothing and now it was dark.
  // "worth it though" he thought after finally catching that rare rainbow shark.
  wahn += riverFish.reduce((acc, cur) => acc + cur.xp, 0);
  // he felt tired, needed to recover his strength, and was in a hurry.
  // a quick stop at an eatery to consume some curry.
  const eatCurry = (x) => (y) => {
    return y ? eatCurry(x + y) : x;
  };
  const curryList = {
    green: 30,
    red: 45,
    crab: 52,
    spicy: 28,
  };
  // with all that slaying and fishing wahn could have ate for an entire crew.
  // this time he decided he's going for two.
  wahn += eatCurry(curryList.spicy)(curryList.crab)();
  // after wolfing it all down, wahn started to look pale.
  // "bartender! I immediately require a pint of ale!"
  (function consumeAle() {
    wahn += 50;
  })();
  // wahn felt ready to face the treacherous mako.
  // he returned to the village to obtain the taco.
  retrieveMightyTaco();
  // it was dark and the fiery beast now towered over wahn.
  // wahn was feeling nervous but made a promise to himself he must keep.
  // wahn waited a second and thought of all the good he would do, all the treasures he would reap.
  let promiseToSlayMako = new Promise(function (resolve) {
    setTimeout(resolve(mako / wahn), 1000);
  });
  // he threw the taco at the demon and wondered if it mattered if the taco was cold or reheated.
  // turns out it didn't matter, a severe allergic reaction and mako was defeated.
  // wahn stood, a whirlwind of emotions while sweating and shaking.
  // mako was no more and shrivelled in to a pile of loot for the taking.
  promiseToSlayMako.then((victory) => {
    console.log(victory);
  });
  // all the damage wahn had done had began to dawn.
  // the environemnt destroyed and animals gone.
  // wahn decided to sell the piece of the demon to make lands anew.
  // he glanced down at his spoils "Oh sweet, I have two!"
}
eleven();
