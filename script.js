const btn = document.getElementById("btn")
const a = document.getElementById('inputA')
const b = document.getElementById("inputB")
const c = document.getElementById("inputC")

btn.onclick = () => {
    const varA = parseInt(a.value)
    const varB = parseInt(b.value)
    const varC = parseInt(c.value)
    console.log(typeof varA)
    ! (varA && varB && varC) ? alert("You gotta input something, you know") : alert(`Value of X1 = ${GetSolution(varA, varB, varC).X1} Value of X2 = ${GetSolution(varA, varB, varC).X2}`)
}

const GetSolution = (a, b, c) => {

    const X1 = ((-b) + (Math.sqrt((b * b) - (4 * a * c)))) / (2 * c)

    const X2 = ((-b) - (Math.sqrt((b * b) - (4 * a * c)))) / (2 * c)

    return { X1, X2 }
}