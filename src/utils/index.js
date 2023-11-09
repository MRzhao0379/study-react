export const isFalsy=(value)=>value === 0 ? true : !!value
export const clearObject=(object)=>{
  const result={...object};
  Object.keys(result).forEach(key=>{
    let value=result[key]
    if(!isFalsy(value)){
      delete result[key]
    }
  })
  return result
}

