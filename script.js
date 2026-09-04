const demoContent = {
  alerts: {
    label: "AI Alerts",
    title: "Receive the next action before the issue spreads.",
    text: "Uniquefarmz surfaces important task reminders and operational changes so the farm can respond with better timing and fewer missed steps."
  },
  soil: {
    label: "Soil Monitoring",
    title: "Know when soil conditions need testing or intervention.",
    text: "The platform helps farms keep soil checks visible and highlights moments when moisture, health, or condition routines should be reviewed."
  },
  plants: {
    label: "Plant Condition",
    title: "Track crop stress before it becomes a wider loss.",
    text: "AI-supported observations help detect plant changes, organize field notes, and make follow-up actions more consistent."
  },
  livestock: {
    label: "Livestock Tracking",
    title: "Keep animal activity and care routines visible every day.",
    text: "Boards for livestock movement, feeding, health notes, and routine checks help farms stay organized across operations."
  }
};

const tabButtons = document.querySelectorAll(".tab-button");
const demoLabel = document.getElementById("demo-label");
const demoTitle = document.getElementById("demo-title");
const demoText = document.getElementById("demo-text");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = demoContent[button.dataset.topic];
    tabButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    if (demoLabel && demoTitle && demoText) {
      demoLabel.textContent = content.label;
      demoTitle.textContent = content.title;
      demoText.textContent = content.text;
    }
  });
});
