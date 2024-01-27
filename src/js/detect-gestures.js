AFRAME.registerComponent("detect-gesture", {
  init: function () {
    this.bindMethods();
    this.colorsMenuElement = document.querySelector("#colorsMenu");
    this.el.addEventListener("thumbsup", this.handleGesture);
    document.addEventListener("keypress", this.keypress.bind(this));
  },

  bindMethods: function () {
    this.handleGesture = this.handleGesture.bind(this);
  },

  handleGesture: function (event) {
    this.colorsMenuElement.object3D.visible = true;
  },
  keypress: function (event) {
    if (event.key === "h") {
      this.el.emit("thumbsup");
    }
  },
});
