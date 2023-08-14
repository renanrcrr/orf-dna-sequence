class ORF {
    constructor(public start: number, public end: number, public sequence: string) {}
  }
  
  function findORFs(dnaSequence: string): ORF[] {
    const startCodon = 'ATG';
    const stopCodons = ['TAA', 'TAG', 'TGA'];
  
    const orfs: ORF[] = [];
  
    for (let i = 0; i < dnaSequence.length - 2; i++) {
      if (dnaSequence.substr(i, 3) === startCodon) {
        for (let j = i + 3; j < dnaSequence.length - 2; j += 3) {
          const codon = dnaSequence.substr(j, 3);
          if (stopCodons.includes(codon)) {
            const orfSequence = dnaSequence.substring(i, j + 3);
            orfs.push(new ORF(i, j + 2, orfSequence));
            break;
          }
        }
      }
    }
  
    return orfs;
  }
  
  const dnaSequence = 'ATGCGTAAATGCGTGAATGCGTAG';
  
  const orfs = findORFs(dnaSequence);
  
  console.log('Found ORFs:');
  for (const orf of orfs) {
    console.log(`Start: ${orf.start}, End: ${orf.end}, Sequence: ${orf.sequence}`);
  }
  