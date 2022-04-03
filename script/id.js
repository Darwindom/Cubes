
const countID = [36]
for (let i = 48; i <= 57; i++) {
    countID.push(i)
}
for (let i = 65; i <= 90; i++) {
    countID.push(i)
}
for (let i = 97; i <= 122; i++) {
    countID.push(i)
}

const id = (Idlength = 6) => {
    let id = '';
    for (let i = 0; i < Idlength; i++) {
        id += String.fromCharCode(countID[random(countID.length)])
    }
    return id
}


