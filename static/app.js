const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", () => {

    if(fileInput.files.length > 0){

        fileName.innerText =
        fileInput.files[0].name;

    }

});

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

    greeting = "☀️ Good Morning";

}
else if(hour < 17){

    greeting = "🌤️ Good Afternoon";

}
else{

    greeting = "🌙 Good Evening";

}

document.getElementById("greeting")
.innerText = greeting;

const quotes = [

    "Excellence is not an act, but a habit.",

    "Small details create professional results.",

    "Quality means doing it right when no one is looking.",

    "Success is the sum of small efforts repeated daily.",

    "Consistency builds trust.",

    "Transforming talent requirements with intelligence.",

    "AI-powered hiring starts with quality job descriptions."

];

document.getElementById("quote")
.innerText =
quotes[
    Math.floor(
        Math.random() * quotes.length
    )
];

function animateSteps(){

    let steps = [

        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4"),
        document.getElementById("step5")

    ];

    let i = 0;

    let interval = setInterval(() => {

        if(i < steps.length){

            steps[i].classList.add("active");

            i++;

        }
        else{

            clearInterval(interval);

        }

    }, 1500);

}

document
.getElementById("uploadForm")
.addEventListener("submit", (e) => {

    e.preventDefault();

    document
    .getElementById("generateBtn")
    .disabled = true;

    document
    .getElementById("generateBtn")
    .innerText = "Generating JD...";

    let steps = [

        document.getElementById("step1"),
        document.getElementById("step2"),
        document.getElementById("step3"),
        document.getElementById("step4"),
        document.getElementById("step5")

    ];

    let i = 0;

    let interval = setInterval(() => {

        steps[i].classList.add("active");

        i++;

        if(i >= steps.length){

            clearInterval(interval);

            // Reset UI after generation completes
            const resetUI = () => {
                // Re-enable generate button and reset its text
                const generateBtn = document.getElementById("generateBtn");
                if (generateBtn) {
                    generateBtn.disabled = false;
                    generateBtn.innerText = "Generate Deloitte JD";
                }
                // Hide loading section
                const loadingSection = document.getElementById("loadingSection");
                if (loadingSection) {
                    loadingSection.style.display = "none";
                }
                // Reset step indicators
                const stepsEls = document.querySelectorAll(".step");
                stepsEls.forEach(step => step.classList.remove("active"));
            };

            setTimeout(() => {
                document
                .getElementById("uploadForm")
                .submit();
                // Call reset after a short delay to allow download to start
                setTimeout(resetUI, 2000);
            }, 1000);

        }

    }, 1200);

});

const dropZone = document.querySelector(".drop-zone");

["dragenter","dragover"].forEach(eventName => {

    dropZone.addEventListener(eventName,(e)=>{

        e.preventDefault();

        dropZone.style.background =
        "#f9fff0";

    });

});

["dragleave","drop"].forEach(eventName => {

    dropZone.addEventListener(eventName,(e)=>{

        e.preventDefault();

        dropZone.style.background =
        "#fff";

    });

});

dropZone.addEventListener("drop",(e)=>{

    const files = e.dataTransfer.files;

    if(files.length){

        fileInput.files = files;

        fileName.innerText =
        files[0].name;

    }

});