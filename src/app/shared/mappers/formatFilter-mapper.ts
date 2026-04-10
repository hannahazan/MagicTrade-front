export function mapFormatFilter(format : any){
    if(format){
       return "legal" 
    }
    else if( format === ''){
        return ''
    }

    return "not_legal"
}