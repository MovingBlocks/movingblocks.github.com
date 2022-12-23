const { createCanvas, loadImage, registerFont } = require("canvas");
const fs = require("fs");
const blogList = require("../src/generated/blog-result.json");

registerFont("./static/fonts/PressStart2P-Regular.tff", {
  family: "Press Start 2P"
});

registerFont("./static/fonts/NotoSans-Bold.ttf", {
  family: "Noto Sans"
});

const c = {
  width: 1200,
  height: 700
};

// functions to generate TeraSaturday and TeraSpotlight image
const generateTeraSaturdayImage = (
  date,
  postNumber,
  defaultImage,
  imageTag,
  title
) => {
  const canvas = createCanvas(c.width, c.height);

  const blogName = `${date}-${title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase()}`;

  console.log(blogName); // for classifying which blog image is generated
  const ctx = canvas.getContext("2d");
  ctx.save();
  loadImage(defaultImage).then(image => {
    ctx.drawImage(image, 0, 0, c.width, c.height);

    const tag = imageTag.slice(4);
    let tagColor = "#8DE10D";

    if (tag === "Saturday") {
      tagColor = "#E8BE36";
    }

    const postid = postNumber;
    ctx.font = '100px "Press Start 2P"';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 18;
    ctx.lineCap = "round";
    ctx.strokeText("Tera", c.width / 2 - c.height / 2 - 150, c.height / 3);
    ctx.fillStyle = "white";
    ctx.fillText("Tera", c.width / 2 - c.height / 2 - 150, c.height / 3);

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

    const pst =
      ctx.measureText("sology").width - ctx.measureText(postid).width + 70;

    ctx.restore();

    ctx.font = 'bold 100px "Noto Sans"';
    ctx.strokeStyle = "black";
    ctx.lineWidth = 25;
    ctx.strokeText(postid, pst + c.width / 2 + 60, c.height / 3 + 120);
    ctx.fillStyle = tagColor;
    ctx.fillText(postid, pst + c.width / 2 + 60, c.height / 3 + 120);
    ctx.restore();

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`./blog/${blogName}/cover.jpg`, buffer);
  });
};

// functions to generate image with logo
const generateCustomLogoImage = (
  date,
  defaultImage,
  position,
  customLogo,
  title
) => {
  const canvas = createCanvas(c.width, c.height);
  const blogName = `${date}-${title
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/\s/g, "-")
    .toLowerCase()}`;

  console.log(blogName); // for classifying which blog image is generated
  const ctx = canvas.getContext("2d");
  const customImage = customLogo;

  loadImage(defaultImage).then(image => {
    ctx.drawImage(image, 0, 0, c.width, c.height);
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, c.width, c.height);

    loadImage(customImage).then(logoImage => {
      if (position === "end" || position === "End") {
        ctx.drawImage(logoImage, c.width - 350, 50, 300, 300);
      } else if (position === "start" || position === "Start") {
        ctx.drawImage(logoImage, 100, 50, 300, 300);
      } else if (position === "center" || position === "Center") {
        ctx.drawImage(logoImage, c.width / 2, c.width / 2, 300, 300);
      } else {
        ctx.drawImage(logoImage, c.width - 350, 50, 300, 300);
      }

      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(`./blog/${blogName}/cover.jpg`, buffer);
    });
  });
};

// Fetch data and generate image
blogList.forEach(edge => {
  if (edge.imageTag === "TeraSaturday" || edge.imageTag === "TeraSpotlight") {
    generateTeraSaturdayImage(
      edge.date,
      edge.postNumber,
      edge.mainImage,
      edge.imageTag,
      edge.title
    );
  }

  if (edge.imageTag === "other" || edge.imageTag === "Other") {
    generateCustomLogoImage(
      edge.date,
      edge.mainImage,
      edge.position,
      edge.customLogo,
      edge.title
    );
  }
});
