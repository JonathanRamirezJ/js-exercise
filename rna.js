function rnaTranscription(dna) {
  dna = dna.toUpperCase();
  var dnaValid = dna.length > 1 ? 'nucleotides' : 'nucleotide';
  var arnArray = [];
  var nucleotideArray = {
    'G':'D',
    'C':'G',
    'T':'A',
    'A':'U'
  };

  if (nucleotideArray[dna] != undefined ) {
    if (dnaValid == 'nucleotide') {
      console.log(nucleotideArray[dna]);
    } else {
      var splitDna = dna.split("");
      for (var i = 0; i < splitDna.length; i++) {
        arnArray.push(nucleotideArray[splitDna[i]]);
      }
      console.log(arnArray.join(""));
    }
  } else {
    console.log('Invalid input');
  }
}

rnaTranscription('a');
