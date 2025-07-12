const fn = new Function(
  "s",
  atob(
    "bGV0IGggPSAwOwpmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyBpKyspIHsKY29uc3QgYyA9IHMuY2hhckNvZGVBdChpKTsKaCA9ICgoaCA8PCA1KSAtIGgpICsgYzsKaCA9IGggJiBoOwp9CnJldHVybiBNYXRoLmFicyhoKTs="
  )
);

const secretText = document.querySelector("#secret-text");

secretText.textContent = `The second code is ${fn("funny")}`;

console.log(`The fifth code is ${fn("Alley-oop")}`);

document.cookie = `tenthCode=${fn(String(fn("blackpink in your area")))}; `;
