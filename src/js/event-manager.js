AFRAME.registerComponent("event-manager", {
  init: function () {
    // Do something when component first attached.
    this.bindMethods();

    this.boxGeometryElement = document.querySelector("#boxGeometry");
    this.sphereGeometryElement = document.querySelector("#sphereGeometry");
    this.torusGeometryElement = document.querySelector("#torusGeometry");

    this.colorsButtonElement = document.querySelector("#colorsButton");
    this.colorsMenuElement = document.querySelector("#colorsMenu");
    this.crossMenuElement = document.querySelector("#crossColorMenu");
    this.boxButtonElement = document.querySelector("#boxButton");
    this.sphereButtonElement = document.querySelector("#sphereButton");
    this.torusButtonElement = document.querySelector("#torusButton");

    this.redColorButtonElement = document.querySelector("#red");
    this.greenColorButtonElement = document.querySelector("#green");
    this.whiteColorButtonElement = document.querySelector("#white");
    this.blackColorButtonElement = document.querySelector("#black");
    this.pinkColorButtonElement = document.querySelector("#pink");
    this.purpleColorButtonElement = document.querySelector("#purple");
    this.blueColorButtonElement = document.querySelector("#blue");
    this.yellowColorButtonElement = document.querySelector("#yellow");
    this.brownColorButtonElement = document.querySelector("#brown");

    this.buttonToColor = {
      red: this.redColorButtonElement.getAttribute("material", "color"),
      green: this.greenColorButtonElement.getAttribute("material", "color"),
      white: this.whiteColorButtonElement.getAttribute("material", "color"),
      black: this.blackColorButtonElement.getAttribute("material", "color"),
      pink: this.pinkColorButtonElement.getAttribute("material", "color"),
      purple: this.purpleColorButtonElement.getAttribute("material", "color"),
      blue: this.blueColorButtonElement.getAttribute("material", "color"),
      yellow: this.yellowColorButtonElement.getAttribute("material", "color"),
      brown: this.brownColorButtonElement.getAttribute("material", "color"),
    };

    this.buttonToGeometry = {
      boxButton: this.boxGeometryElement,
      sphereButton: this.sphereGeometryElement,
      torusButton: this.torusGeometryElement,
    };

    this.colorsButtonElement.addEventListener("click", this.onClick);
    this.colorsMenuElement.addEventListener("click", this.onClick);
    this.crossMenuElement.addEventListener("click", this.onClick);
    this.boxButtonElement.addEventListener("click", this.onClick);
    this.sphereButtonElement.addEventListener("click", this.onClick);
    this.torusButtonElement.addEventListener("click", this.onClick);
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (event) {
    var targetElement = event.target;
    this.changeColor(targetElement);
    this.changeGeometry(targetElement);

    if (targetElement === this.colorsButtonElement) {
      this.colorsMenuElement.object3D.visible = true;
      document
        .getElementById("colorsMenu")
        .setAttribute("material", "color", "red");
    }

    if (targetElement === this.crossMenuElement) {
      this.colorsMenuElement.object3D.visible = false;
    }
  },

  changeColor(targetElement) {
    if (
      targetElement === this.redColorButtonElement ||
      targetElement === this.greenColorButtonElement ||
      targetElement === this.whiteColorButtonElement ||
      targetElement === this.blackColorButtonElement ||
      targetElement === this.pinkColorButtonElement ||
      targetElement === this.purpleColorButtonElement ||
      targetElement === this.blueColorButtonElement ||
      targetElement === this.yellowColorButtonElement ||
      targetElement === this.brownColorButtonElement
    ) {
      this.redColorButtonElement.removeState("pressed");
      this.greenColorButtonElement.removeState("pressed");
      this.whiteColorButtonElement.removeState("pressed");
      this.blackColorButtonElement.removeState("pressed");
      this.pinkColorButtonElement.removeState("pressed");
      this.purpleColorButtonElement.removeState("pressed");
      this.blueColorButtonElement.removeState("pressed");
      this.yellowColorButtonElement.removeState("pressed");
      this.brownColorButtonElement.removeState("pressed");

      const targetColor = this.buttonToColor[targetElement.id];
      console.log(this.buttonToColor);
      this.boxGeometryElement.setAttribute(
        "material",
        "color",
        targetColor.color
      );
      this.sphereGeometryElement.setAttribute(
        "material",
        "color",
        targetColor.color
      );
      this.torusGeometryElement.setAttribute(
        "material",
        "color",
        targetColor.color
      );
    }
  },

  changeGeometry(targetElement) {
    if (
      targetElement === this.boxButtonElement ||
      targetElement === this.sphereButtonElement ||
      targetElement === this.torusButtonElement
    ) {
      this.boxButtonElement.removeState("pressed");
      this.sphereButtonElement.removeState("pressed");
      this.torusButtonElement.removeState("pressed");

      this.boxGeometryElement.object3D.visible = false;
      this.sphereGeometryElement.object3D.visible = false;
      this.torusGeometryElement.object3D.visible = false;

      this.buttonToGeometry[targetElement.id].object3D.visible = true;
    }
  },
});
