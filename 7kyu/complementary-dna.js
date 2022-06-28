function DNAStrand(dna){
    let result = ''
    for (i = 0; i < dna.length; i++) {
      if (dna[i] == 'A') { result += 'T' }
      if (dna[i] == 'T') { result += 'A' }
      if (dna[i] == 'G') { result += 'C' }
      if (dna[i] == 'C') { result += 'G' }
    }
    return result
  }