class Color {
  constructor(hex, element) {
    this.hex = hex;
    this.element = element;
    this.locked = false;
  }

  setHex(hex) {
    this.hex = hex;
    this.element.style.backgroundColor = hex;
    this.element.querySelector(".color-inpput").value = hex;
  }

  setLocked(locked) {
    this.locked = locked;

    if (locked) {
      this.element.classList.add("locked");

      this.element.querySelector("img").src = "icons/lock-closed.svg";
    } else {
      this.element.classList.remove("locked");

      this.element.querySelector("img").src = "icons/lock-open.svg";
    }
  }

  toggleLocked() {
    this.setLocked(!this.locked);
  }

  generateHex() {
    if (this.locked) {
      return;
    }

    const char = "0123456789ABCDEF";

    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += char[Math.floor(Math.random() * 16)];
    }
  }

  copyToClipboard() {
    const input = this.element.querySelector("color-input");
    input.select();
    document.execCommand("copy");
    input.blur();

    this.element.classList.add("copied");

    setTimeout(() => {
      this.element.classList.remove("copied");
    }, 1000);
  }
}
