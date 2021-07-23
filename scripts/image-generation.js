const { createCanvas, loadImage, registerFont } = require("canvas");
const fs = require("fs");
registerFont("./static/fonts/PressStart2P-Regular.tff", {
  family: "Press Start 2P",
});

registerFont("./static/fonts/NotoSans-Bold.ttf", {
  family: "Noto Sans",
});

let c = {
  width: 1200,
  height: 700,
};

exports.generateTeraSaturdayImage = (
  blogName,
  postNumber,
  defaultImage,
  imageTag
) => {
  const canvas = createCanvas(c.width, c.height);
  const ctx = canvas.getContext("2d");
  ctx.save();
  loadImage(defaultImage).then((image) => {
    ctx.drawImage(image, 0, 0, c.width, c.height);

    let tag = imageTag.slice(4);

    let tagColor = "#8DE10D";

    if (tag ==="Saturday") {
      tagColor = "#E8BE36";
    }

    let postid = postNumber;

    ctx.font = '100px "Press Start 2P"';

    ctx.strokeStyle = "black";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.strokeText("Tera", c.width / 2 - c.height / 2 - 150, c.height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("Tera", c.width / 2 - c.height / 2 - 150, c.height / 3);

    spacer = ctx.measureText("Tera").width;
    ctx.globalAlpha = 0.5;
    ctx.font = '100px "Press Start 2P"';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.strokeText("sology", c.width / 2 - 90, c.height / 3);

    ctx.fillStyle = "white";
    ctx.fillText("sology", c.width / 2 - 90, c.height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("sology", c.width / 2 - 90, c.height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("sology", c.width / 2 - 90, c.height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("sology", c.width / 2 - 90, c.height / 3);

    ctx.globalAlpha = 1;
    ctx.translate(-100, 150);
    ctx.rotate(10 * (-Math.PI / 180));
    ctx.font = 'bold 130px "Noto Sans"';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 25;
    ctx.strokeText(tag, c.width / 2 - 20, c.height / 3);
    ctx.fillStyle = tagColor;
    ctx.fillText(tag, c.width / 2 - 20, c.height / 3);

    var pst =
      ctx.measureText("sology").width - ctx.measureText(postid).width + 70;

    ctx.restore();

    ctx.font = 'bold 100px "Noto Sans"';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 25;
    ctx.strokeText(postid, pst + c.width / 2 + 60, c.height / 3 + 120);
    ctx.fillStyle = tagColor;
    ctx.fillText(postid, pst + c.width / 2 + 60, c.height / 3 + 120);
    ctx.restore();

    let buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./blog/" + blogName + "/cover.jpg", buffer);
  });
};

exports.generateGsocImage = (blogName, defaultImage, position) => {
  const canvas = createCanvas(c.width, c.height);
  const ctx = canvas.getContext("2d");
  const gsocImage = "./static/logos/gsoc_logo.png";

  loadImage(defaultImage).then((image) => {
    ctx.drawImage(image, 0, 0, c.width, c.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, c.width, c.height);

    loadImage(gsocImage).then((gsocimage) => {
      if (position == "end" || position == "End") {
        ctx.drawImage(gsocimage, c.width - 350, 50, 300, 300);
      } else if (position == "start" || position == "Start") {
        ctx.drawImage(gsocimage, 100, 50, 300, 300);
      } else if (position == "center" || position == "Center") {
        ctx.drawImage(gsocimage, c.width / 2, c.width / 2, 300, 300);
      } else {
        ctx.drawImage(gsocimage, c.width - 350, 50, 300, 300);
      }

      let buffer = canvas.toBuffer("image/png");
      fs.writeFileSync("./blog/" + blogName + "/cover.jpg", buffer);
    });
  });
};

exports.generateOtherImage = (blogName, defaultImage, otherLogoURL) => {
  const canvas = createCanvas(c.width, c.height);
  const ctx = canvas.getContext("2d");
  const otherLogo = otherLogoURL;

  loadImage(defaultImage).then((image) => {
    ctx.drawImage(image, 0, 0, c.width, c.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, c.width, c.height);

    loadImage(otherLogo).then((Logo) => {
      if (position == "end" || position == "End") {
        ctx.drawImage(Logo, c.width - 350, 50, 300, 300);
      } else if (position == "start" || position == "Start") {
        ctx.drawImage(Logo, 350, 50, 300, 300);
      } else if (position == "center" || position == "Center") {
        ctx.drawImage(Logo, c.width / 2, c.width / 2, 300, 300);
      } else {
        ctx.drawImage(Logo, c.width - 350, 50, 300, 300);
      }

      let buffer = canvas.toBuffer("image/png");
      fs.writeFileSync("./blog/" + blogName + "/cover.jpg", buffer);
    });
  });
};
