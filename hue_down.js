var c = new SolidColor();
c.hsb.hue = (app.foregroundColor.hsb.hue - 1) % 360;
c.hsb.saturation = app.foregroundColor.hsb.saturation;
c.hsb.brightness = app.foregroundColor.hsb.brightness;
app.foregroundColor = c;
