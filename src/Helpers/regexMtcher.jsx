export function isemail(string){
  return string.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


}

export function isValidpassword(string){
  return string.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/)
}