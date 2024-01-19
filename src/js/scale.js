AFRAME.registerComponent("size-change", {
  init: function () {
    this.bindMethods();
    this.el.sceneEl.addEventListener("sliderchanged", this.onSliderChanged);
  },

  bindMethods: function () {
    this.onSliderChanged = this.onSliderChanged.bind(this);
  },

  onSliderChanged: function (event) {
    var scale = evt.detail.value;
    this.el.object3D.scale.set(scale, scale, scale);
  },
});
