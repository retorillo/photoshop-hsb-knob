var c = new SolidColor();
c.hsb.hue = app.foregroundColor.hsb.hue;
c.hsb.saturation = Math.max(0, app.foregroundColor.hsb.saturation - 1);
c.hsb.brightness = app.foregroundColor.hsb.brightness;
app.foregroundColor = c;
