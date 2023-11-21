const sidebar = document.getElementById("sidebar");
const resizeHandle = document.getElementById("resizeHandle");
let isResizing = false;

resizeHandle.addEventListener("mousedown", (event) => {
  isResizing = true;
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", () => {
    isResizing = false;
    document.removeEventListener("mousemove", handleMouseMove);
  });
});

function handleMouseMove(event) {
  if (isResizing) {
    const newWidth = event.clientX;
    sidebar.style.width = `${newWidth}px`;
  }
}
