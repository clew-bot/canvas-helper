window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false; 

    function startPosition() {
        painting = true;
        draw(e);
    }
    const finishedPosition = () => {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if(!painting) return;
        ctx.lineWidth = 20;
        ctx.lineCape = "round";
        //ctx.strokeStyle = "red" //

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
})