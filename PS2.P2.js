function* spitSentence(s) {
    let splits = s.split(' ');
    yield* splits;
}

//Get a few fibs
const spit = spitSentence("All I know is something like a bird within her sang");
let word = spit.next();
while (!word.done) {
    console.log(word.value);
    word = spit.next();
}