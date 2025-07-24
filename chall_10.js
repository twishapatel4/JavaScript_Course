(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

const poll = {
  question: "What is your favourite sport",
  options: ["0:JS", "1:Java", "2:Python", "3:C/C+++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const ans = Number(
      prompt(`What is yourfav programming language? 
      0:JS
      1:Java
      2:Python
      3:C/C++ `)
    );
    Number.isInteger(ans) &&
      ans > -1 &&
      ans < this.answers.length &&
      this.answers[ans]++;
    // console.log(this.answers);
    this.displayresults();
    this.displayresults("string");
  },

  displayresults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      // str = `Poll results are `;
      // // for (const i of this.options.length) {
      // //   str += `${options[i]}, `;
      // // }
      // console.log(str);
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

//challenge 2
