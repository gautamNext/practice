function segments(message) {
  let transformedMessage = [];
  let restOfString = message;
  let i = 0;
  while (restOfString) {
    const maxLength = restOfString.length > 155 ? 155 : undefined;
    let nextBatch = restOfString.substring(0, maxLength);
    restOfString = restOfString.substring(155);
    const lastIndexOfBlanck = nextBatch.lastIndexOf(" ");
    const firstEleOfRest = restOfString.substring(0, 1);
    const isLastIndexBlanck = firstEleOfRest === " ";
    if (
      restOfString &&
      lastIndexOfBlanck < nextBatch.length - 1 &&
      !isLastIndexBlanck
    ) {
      const lastSubstr = nextBatch.substring(lastIndexOfBlanck + 1);
      nextBatch = nextBatch.substring(0, lastIndexOfBlanck + 1);
      restOfString = lastSubstr + restOfString;
    }

    transformedMessage = [...transformedMessage, `${nextBatch}(${i + 1}/#)`];
    i++;
  }

  return transformedMessage.length === 1 ? transformedMessage.map((ele) => ele.replace(/\(1\/#\)/g, '')) : transformedMessage.map((ele) => ele.replace(/#/g, i));
}

const input = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat nec dui quis maximus. Praesent vehicula feugiat condimentum. Nunc porta vulputate elit sit amet lacinia. Vivamus volutpat accumsan consequat. Nulla mattis odio erat, vel convallis neque semper nec. Integer a pharetra purus.`;
const input2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id tristique quam, in ullamcorper metus. Duis lacinia dolor non quam porta, non turpis duis.`;

console.log(segments(input2));
