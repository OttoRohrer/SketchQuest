fetch(
  "https://raw.githubusercontent.com/OttoRohrer/SketchQuest/main/Headsets.json"
)
  .then((response) => response.json())
  .then((data) => {
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
      mouth.src = `images/RoundHead/Mouth/${characterData.mouth.filepath}.svg`;
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
      newButton.style.backgroundImage = `url(images/RoundHead/${type}/${buttonData.filepath}.svg)`;
    }
  });
