
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

document.body.onresize = () => {
    canvas.width = window.innerWidth * devicePixelRatio;
    canvas.height = window.innerHeight * devicePixelRatio;
};

document.body.onresize();

const frogs = [];

const frogImage = new Image();
frogImage.src = "/assets/frog_transparent_bg_naked.png";

const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    // context.strokeStyle = "#374362";
    // context.lineWidth = 5;
    context.globalAlpha = 0.25;
    for (const raindrop of frogs) {
        const width = frogImage.width * (raindrop.size / 100) / 16;
        const height = frogImage.height * (raindrop.size / 100) / 16;
        context.save();
        context.translate(raindrop.x, raindrop.y);
        context.rotate(raindrop.rotation);
        context.drawImage(frogImage, -width / 2, -height / 2, width, height);
        context.restore();
        // context.beginPath();
        // context.arc(
        //   raindrop.x,
        //   raindrop.y,
        //   raindrop.size,
        //   0,
        //   Math.PI * 2,
        //   false
        // );
        // context.stroke();
    }
};

const update = (delta) => {
    if (Math.random() < delta * 0.5) {
        const isHuge = Math.random() > 0.99;
        const size = 100 + Math.random() * 700 + (isHuge ? Math.random() * 3000 : 0);
        const height = frogImage.width * (size / 100);
        frogs.push({
            x: Math.random() * canvas.width,
            y: canvas.height + height,
            size,
            speed: (50 + Math.random() * 50) / Math.max(size / 350, 1),
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2,
        });
    }

    for (let i = 0; i < frogs.length; i++) {
        const frog = frogs[i];
        frog.y -= frog.speed * delta;
        frog.rotation += frog.rotationSpeed * delta;
        const height = frogImage.height * (frog.size / 100);
        if (frog.y < -height) {
            frogs.splice(i, 1);
            i--;
        }
    }
};

let lastTime = 0;
const loop = (time) => {
    const delta = (time - lastTime) / 1000;
    lastTime = time;
    update(delta);
    draw();
    requestAnimationFrame(loop);
};

loop();

/*
 * I assign full credits to Lu's https://github.com/TodePond/TodePondDotCom
 * This js was mostly copied from there.
 */