export function mapColorFilters(color: any){
    let result = []
    if(color.white === true){
      result.push('W'); 
    }
    if(color.green === true){
      result.push('G');
    }
    if(color.red === true){
      result.push('R');
    }
    if(color.black === true){
      result.push('B');
    }
    if(color.blue === true){
      result.push('U');
    }
    return result  
  }