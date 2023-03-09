/*
a simple key cypfer shifting by 1 in this example
a b c d e f g h i j k l m n o p q r s t u v w x y z
z a b c d e f g h i j k l m n o p q r s t u v w x y 

I love cryptography!
h knud bqxosnfqzogx
i love cryptography
*/

function cypher (str) {
    str = str.toLowerCase()
    let arr = str.split("")
    let answerArr = []
    let answerStr = ""
    
    arr.forEach(element => {

        switch(element) {
            case 'a':
                answerArr.push("z")
              break;
            case 'b':
                answerArr.push("a")
              break;
            case 'c':
                answerArr.push("b")
              break;
            case 'd':
                answerArr.push("c")
              break;
            case 'e':
                answerArr.push("d")
              break;
            case 'f':
                answerArr.push("e")
              break;
            case 'g':
                answerArr.push("f")
              break;
            case 'h':
                answerArr.push("g")
              break;
            case 'i':
                answerArr.push("h")
              break;
            case 'j':
                answerArr.push("i")
              break;
            case 'k':
                answerArr.push("j")
              break;
            case 'l':
                answerArr.push("k")
              break;
            case 'm':
                answerArr.push("l")
              break;
            case 'n':
                answerArr.push("m")
              break;
            case 'o':
                answerArr.push("n")
              break;
            case 'p':
                answerArr.push("o")
              break;
            case 'q':
                answerArr.push("p")
              break;
            case 'r':
                answerArr.push("q")
              break;
            case 's':
                answerArr.push("r")
              break;
            case 't':
                answerArr.push("s")
              break;
            case 'u':
                answerArr.push("t")
              break;
            case 'v':
                answerArr.push("u")
              break;
            case 'w':
                answerArr.push("v")
              break;
            case 'x':
                answerArr.push("w")
              break;
            case 'y':
                answerArr.push("x")
              break;
            case 'z':
                answerArr.push("y")
              break;
            default:
                answerArr.push(" ")
          }
        
    });
    answerStr = answerArr.join("")
    return answerStr
}

console.log(cypher("I love cryptography"))
