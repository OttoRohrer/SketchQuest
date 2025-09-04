const json = `{
  "headsets": {
    "round": {
      "directory": "RoundHead",
      "head": {
          "filepath": "RoundHead",
          "top": 15.047,
          "left": 15.047,
          "width": 69.906,
          "height": 69.906 
      },
      "eyes": { 
        "roundMedium": {
          "filepath": "round_medium",
          "top": 37.236,
          "left": 29.132,
          "width": 41.026,
          "height": 15.919  
        },  
        "confusedMedium": {
          "filepath": "confused_medium",
          "top": 33.783,
          "left": 25.508,
          "width": 49.186,
          "height": 15.241
        },  
        "happySmall": {
          "filepath": "happy_small",
          "top": 37.157,
          "left": 26.543,
          "width": 44.814,
          "height": 9.076
        },  
        "happyMedium": {
          "filepath": "happy_medium",
          "top": 34.995,
          "left": 26.106,
          "width": 47.150,
          "height": 13.788 
        },  
        "exitedSmall": {
          "filepath": "exited_small",
          "top": 38.040,
          "left": 29.132,
          "width": 41.026,
          "height": 15.919
        },  
        "madPointed": {
          "filepath": "mad_pointed",
          "top": 38.857,
          "left": 28.300,
          "width": 42.369,
          "height": 13.371
        }        
      },
      "ears": {    
         "roundMedium": {
          "filepath": "round_medium",
          "top": 35.101,
          "left": 3.116,
          "width": 95.019,
          "height": 24.589  
        },
        "largeWebbed": {
          "filepath": "large_webbed",
          "top": 34.998,
          "left": 0.446,
          "width": 98.912,
          "height": 25.330
        },
        "goblinMedium": {
          "filepath": "goblin_medium",
          "top": 31.510,
          "left": 2.140,
          "width": 95.474,
          "height": 26.951
        },
        "smallPointy": {
          "filepath": "small_pointy",
          "top": 39.901,
          "left": 3.125,
          "width": 93.744,
          "height": 17.621
        } 
      },
      "hair": {
        "halfBald": {
          "filepath": "half_bald",
          "top": 11.584,
          "left": 13.657,
          "width": 71.178,
          "height": 28.416
        },
        "shortSlanted": {
          "filepath": "short_slanted",
          "top": 14.491,
          "left": 18.669,
          "width": 62.666,
          "height": 26.290
        },
        "unkemptMohawk": {
          "filepath": "unkempt_mohawk",
          "top": 1.250,
          "left": 13.493,
          "width": 63.963,
          "height": 50.988
        },
        "shortCurly": {
          "filepath": "short_curly",
          "top": 8.444,
          "left": 19.153,
          "width": 60.822,
          "height": 21.791
        }
      },
      "mouth": {
        "frownSlant": {
          "filepath": "frown_slant",
          "top": 64.389 ,
          "left": 37.04,
          "width": 31.940,
          "height": 13.743
        },
       "toothySlant": {
          "filepath": "toothy_slant",
          "top": 57.748,
          "left": 28.075,
          "width": 43.839,
          "height": 19.545
        },
        "smileSlant": {
          "filepath": "smile_slant",
          "top": 59.324,
          "left": 29.346,
          "width": 38.639,
          "height": 17.760
        },
        "fangGrin": {
          "filepath": "fang_grin",
          "top": 59.324,
          "left": 29.346,
          "width": 38.639,
          "height": 17.760
        }
      },
      "eyebrows": {
        "madPointed": {
          "filepath": "mad_pointed",
          "top": 26.023,
          "left": 38.944,
          "width": 25.637,
          "height": 12.360
        },
        "suprisedCurve": {
          "filepath": "suprised_curve",
          "top": 25.087,
          "left": 30.941,
          "width": 36.015,
          "height": 4.143
        },
        "furrowedSingle": {
          "filepath": "furrowed_single",
          "top": 24.526,
          "left": 34.455,
          "width": 31.429,
          "height": 6.485
        },
        "confusedDouble": {
          "filepath": "confused_double",
          "top": 24.339,
          "left": 33.923,
          "width": 31.190,
          "height": 4.618
        }
      },
      "noses": {
        "largePointed": {
          "filepath": "large_pointed",
          "top": 52.883,
          "left": 44.618,
          "width": 10.773,
          "height": 12.996
        },
        "conicalLarge": {
          "filepath": "conical_large",
          "top": 50.598,
          "left": 42.984,
          "width": 12.904,
          "height": 8.252
        },
        "smallRounded": {
          "filepath": "small_rounded",
          "top": 48.744,
          "left": 45.071,
          "width": 7.104,
          "height": 10.169
        },
        "roundLong": {
          "filepath": "round_long",
          "top": 46.561,
          "left": 44.011,
          "width": 11.828,
          "height": 13.295
        }
      }
    }
  }
}`;

const data = JSON.parse(json);
const changingButtons = document.querySelector("#changeButtons");
let type = "ears";
let buttonObjs = Object.values(data.headsets.round[type]);
const changers = [
  {
    type: "eyes",
    HTMLElement: document.querySelector("#eyeChanger"),
  },
  {
    type: "ears",
    HTMLElement: document.querySelector("#earChanger"),
  },
  {
    type: "hair",
    HTMLElement: document.querySelector("#hairChanger"),
  },
  {
    type: "noses",
    HTMLElement: document.querySelector("#noseChanger"),
  },
  {
    type: "eyebrows",
    HTMLElement: document.querySelector("#eyebrowChanger"),
  },
  {
    type: "mouth",
    HTMLElement: document.querySelector("#mouthChanger"),
  },
  {
    type: "head",
    HTMLElement: document.querySelector("#headChanger"),
  },
];

for (const changer of changers) {
  changer.HTMLElement.addEventListener("click", () => {
    changers.forEach((changer) =>
      changer.HTMLElement.classList.remove("selected")
    );
    changer.HTMLElement.classList.add("selected");

    type = changer.type;
    const buttons = document.querySelector("#buttons");
    buttons.innerHTML = "";
    buttonObjs = Object.values(data.headsets.round[type]);
    for (const button of buttonObjs) {
      makeButton(button, type);
    }
  });
}
const characterData = {
  head: data.headsets.round.head,
  ears: data.headsets.round.ears.largeWebbed,
  eyes: data.headsets.round.eyes.madPointed,
  mouth: data.headsets.round.mouth.toothySlant,
  hair: data.headsets.round.hair.halfBald,
  eyebrows: data.headsets.round.eyebrows.madPointed,
  noses: data.headsets.round.noses.largePointed,
};

const buttonContainer = document.querySelector("#buttons");
function drawRoundHead(x, y, w, h) {
  const drawingRect = document.querySelector(".drawingRect");
  drawingRect.style.height = h + "px";
  drawingRect.style.width = w + "px";
  const changingButtonsVals = {
    h: h + 90,
    w: w + 204,
    x: 0,
    y: 0,
  };

  changingButtons.style.height = changingButtonsVals.h + "px";
  changingButtons.style.width = changingButtonsVals.w + "px";
  changingButtons.style.top = changingButtonsVals.y + "px";
  changingButtons.style.left = changingButtonsVals.x + "px";

  const ears = document.createElement("img");
  ears.src = `images/RoundHead/Ears/${characterData.ears.filepath}.svg`;
  drawingRect.appendChild(ears);
  const hair = document.createElement("img");
  hair.src = `images/RoundHead/Hair/${characterData.hair.filepath}.svg`;
  drawingRect.appendChild(hair);
  hair.style.zIndex = "1000";
  const head = document.createElement("img");
  head.src = `images/RoundHead/RoundHead.svg`;
  drawingRect.appendChild(head);
  const eyes = document.createElement("img");
  eyes.src = `images/RoundHead/Eyes/${characterData.eyes.filepath}.svg`;
  drawingRect.appendChild(eyes);
  const mouth = document.createElement("img");
  mouth.src = `images/RoundHead/Mouths/${characterData.mouth.filepath}.svg`;
  drawingRect.appendChild(mouth);
  const eyebrows = document.createElement("img");
  eyebrows.src = `images/RoundHead/Eyebrows/${characterData.eyebrows.filepath}.svg`;
  drawingRect.appendChild(eyebrows);
  const noses = document.createElement("img");
  noses.src = `images/RoundHead/Noses/${characterData.noses.filepath}.svg`;
  drawingRect.appendChild(noses);
  eyes.style.top = characterData.eyes.top + "%";
  eyes.style.left = characterData.eyes.left + "%";
  eyes.style.width = characterData.eyes.width + "%";
  eyes.style.height = characterData.eyes.height + "%";
  hair.style.top = characterData.hair.top + "%";
  hair.style.left = characterData.hair.left + "%";
  hair.style.width = characterData.hair.width + "%";
  hair.style.height = characterData.hair.height + "%";
  ears.style.top = characterData.ears.top + "%";
  ears.style.left = characterData.ears.left + "%";
  ears.style.width = characterData.ears.width + "%";
  ears.style.height = characterData.ears.height + "%";
  noses.style.top = characterData.noses.top + "%";
  noses.style.left = characterData.noses.left + "%";
  noses.style.width = characterData.noses.width + "%";
  noses.style.height = characterData.noses.height + "%";
  eyebrows.style.top = characterData.eyebrows.top + "%";
  eyebrows.style.left = characterData.eyebrows.left + "%";
  eyebrows.style.width = characterData.eyebrows.width + "%";
  eyebrows.style.height = characterData.eyebrows.height + "%";
  head.style.top = characterData.head.top + "%";
  head.style.left = characterData.head.left + "%";
  head.style.width = characterData.head.width + "%";
  head.style.height = characterData.head.height + "%";
  mouth.style.top = characterData.mouth.top + "%";
  mouth.style.left = characterData.mouth.left + "%";
  mouth.style.width = characterData.mouth.width + "%";
  mouth.style.height = characterData.mouth.height + "%";
}
drawRoundHead(500, 390, 500, 500);

for (const button of buttonObjs) {
  makeButton(button, type);
}
function makeButton(buttonData, type) {
  const newButton = document.createElement("button");
  newButton.textContent = buttonData.filepath.split("_").join(" ");

  newButton.classList.add("selector");
  buttonContainer.appendChild(newButton);
  newButton.addEventListener("click", () => {
    const buttons = document.querySelectorAll(".selector");
    buttons.forEach((button) => button.classList.remove("selected"));
    newButton.classList.add("selected");
    const imgs = document.querySelectorAll("img");
    let i = 0;
    imgs.forEach((img) => {
      const parent = img.parentElement;
      parent.removeChild(img);
      i++;
    });
    let name = buttonData.filepath.split("_");
    name[1] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    name = name.join("");

    characterData[type] = data.headsets.round[type][name];
    drawRoundHead(500, 390, 500, 500);
  });
}
// yay i made a comment
