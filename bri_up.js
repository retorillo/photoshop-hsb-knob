var c = new SolidColor();
c.hsb.hue = app.foregroundColor.hsb.hue;
c.hsb.saturation = app.foregroundColor.hsb.saturation;
c.hsb.brightness = Math.min(100, app.foregroundColor.hsb.brightness + 1);
app.foregroundColor = c;
