// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



const pAequorFactory = (num, dnaArray) => {
  return {
    specimenNum: num,
    dna: dnaArray,

    mutate() {
      const randomIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = randomBase();
      while (newBase === this.dna[randomIndex]) {
        newBase = randomBase();
      }
      this.dna[randomIndex] = newBase;
    },

    compareDNA(pAequor){
      letNewDna = pAequor;
      let counter = this.dna.length;
      let matching = 0;
      let percentage = 0;
      for( let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === pAequor[i]){
          matching++;
        }
      }
      percentage = matching / counter *100;
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`)
    },

      
    willLikelySurvive() {
      const matching = this.dna.filter(base => base === 'C' || base === 'G').length;
      const percentage = (matching / this.dna.length) * 100;
      return percentage >= 60;
    }
    
 };
};


//reate 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later.
const survivalInstances = [];

while (survivalInstances.length < 30) {
  const newSpecimen = pAequorFactory(survivalInstances.length + 1, mockUpStrand());
  if (newSpecimen.willLikelySurvive()) {
    survivalInstances.push(newSpecimen);
  }
}






