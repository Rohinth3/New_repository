


/* <script>
    const newDiv = document.createElement('div')
    newDiv.style.height = "100vh";
    newDiv.style.display = "flex"
    newDiv.style.alignItems = "center"
    newDiv.style.justifyContent = "center"
    newDiv.style.background = "#838689"
    document.body.appendChild(newDiv)


    //1box
    const boxDiv1 = document.createElement('div')
    boxDiv1.style.height = "90%"
    boxDiv1.style.width = "45%"
    boxDiv1.style.background = "white"
    boxDiv1.style.display = "flex"
    boxDiv1.style.alignItems = "center"
    boxDiv1.style.flexDirection = "column"
    boxDiv1.style.justifyContent = "center"
    newDiv.appendChild(boxDiv1)

    //in box
    // const inBox = document.createElement('div')
    // inBox.style.height = "100%"
    // inBox.style.width = "100%"
    // inBox.style.background = "white"
    // inBox.style.display = "flex"
    // inBox.style.flexDirection = "column"
    // inBox.style.justifyContent = "center"
    // inBox.style.marginRight = "30px"
    // boxDiv1.appendChild(inBox)


    //header img
    const imgTag1 = document.createElement('img')
    imgTag1.setAttribute('src','data:image/jpeg;base64,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')
    imgTag1.style.height = "15%"
    imgTag1.style.width = "25%"
    imgTag1.style.marginRight = "450px"
    

    //signup content box
    const smallBox = document.createElement('div')
    smallBox.style.height = "70%"
    smallBox.style.width = "90%"
    // smallBox.style.background = "blue"
    smallBox.style.display = "flex"
    smallBox.style.flexDirection = "column"
    smallBox.style.marginTop = "30px"
    boxDiv1.append(imgTag1,smallBox,)

    //sign up header
    const signUp = document.createElement('label')
    signUp.innerHTML = "Sign up"
    signUp.style.fontSize = "25px"
    signUp.style.fontWeight = "999"
    smallBox.appendChild(signUp)

    //input box
    const smallDiv = document.createElement('div')
    smallDiv.style.marginTop = "50px"
    smallDiv.style.height = "47%"
    // smallDiv.style.background = "yellow"
    smallDiv.style.display = "flex"
    smallDiv.style.flexDirection = "column"
    smallBox.appendChild(smallDiv)

   //input queue
    const emailLab = document.createElement('label')
    emailLab.textContent = "Email"

    const emailLab1 = document.createElement('input')
    emailLab1.setAttribute ('placeholder',"Your email address")
    emailLab1.style.height = "18px"
    emailLab1.style.width = "50%"
    
    const emailDiv = document.createElement ('div')
    emailDiv.style.display = "flex"
    emailDiv.style.flexDirection = "column"
    smallDiv.appendChild(emailDiv)
    emailDiv.append(emailLab,emailLab1)


    //input queue2
    const PassLab = document.createElement('label')
    PassLab.textContent = "Password"
 

    const PassLab1 = document.createElement('input')
    PassLab1.setAttribute ('placeholder',"Your password")
    PassLab1.style.height = "18px"
    PassLab1.style.width = "50%"
    
    const PassDiv = document.createElement('div')
    PassDiv.style.display = "flex"
    PassDiv.style.flexDirection = "column"
    PassDiv.style.marginTop = "10px"
    smallDiv.appendChild(PassDiv)
    PassDiv.append(PassLab,PassLab1)
    

    //checkbox
    const  remainDiv = document.createElement('div')
    // remainDiv.style.background = "green"
    remainDiv.style.height = "15%"
    remainDiv.style.width = "53%"
    remainDiv.style.display = "flex"
    remainDiv.style.justifyContent = "space-between"
    remainDiv.style.marginTop = "10px"
    smallDiv.appendChild(remainDiv)


    const  remainDiv1 = document.createElement('div')
    // remainDiv1.style.background = "blue"
    remainDiv1.style.display = "flex"
    remainDiv1.style.width = "30%"

    //remaind and checkbox
    const smallRem = document.createElement('input')
    smallRem.setAttribute ('type',"checkbox")
    smallRem.style.height = "11px"
    remainDiv1.appendChild(smallRem)

    const smallRem1 = document.createElement('div')
    smallRem1.textContent = "Remainder me"
    smallRem1.style.fontSize = "13px"
    remainDiv1.appendChild(smallRem1)


    //forget pass
    const  remainDiv2 = document.createElement('div')
    remainDiv2.style.width = "29%"
    remainDiv2.style.display = "flex"
    remainDiv2.style.justifyContent = "flex-end"
    remainDiv2.style.fontSize = "13px"
    remainDiv2.textContent ="Forget password?"
    // remainDiv2.style.background = "red"
    remainDiv.append(remainDiv1,remainDiv2)

    //signup
    const upButton = document.createElement('button')
    upButton.innerHTML = "Sign up"
    upButton.style.color = "white"
    upButton.style.background = "black"
    upButton.style.marginTop = "15px"
    upButton.style.height = "30px"
    upButton.style.width = "51%"
    smallDiv.appendChild(upButton)


    //google,facebook,apple
    const pinkDiv = document.createElement('div')
    // pinkDiv.style.background = "pink"
    pinkDiv.style.height = "40%"
    pinkDiv.style.display = "flex"
    pinkDiv.style.flexDirection = "column"
    smallBox.appendChild(pinkDiv)

    // <button style="height: 30px;width: 300px;">
    //                     <div style="display: flex;justify-content: center;align-items: center;"><img style="height: 26px;width: 27px;" src="https://th.bing.com/th/id/OIP.ofszTT24fDawOOMrn7iLcwHaHa?pid=ImgDet&w=474&h=474&rs=1">
    //                     Continue with google </div>
    
    // </button>

    const googleBut = document.createElement('button')
    googleBut.innerHTML = "Continue with google"
    googleBut.style.fontWeight = "700"
    googleBut.style.marginTop = "10px"
    googleBut.style.height = "30px"
    googleBut.style.width = "51%"
    pinkDiv.appendChild(googleBut)


    const facebookBut = document.createElement('button')
    facebookBut.innerHTML = "Continue with Facebook"
    facebookBut.style.fontWeight = "700"
    facebookBut.style.marginTop = "10px"
    facebookBut.style.height = "25px"
    facebookBut.style.width = "51%"
    pinkDiv.appendChild(facebookBut)

    const facebookBut1 = document.createElement('button')
    facebookBut1.innerHTML = "Continue with Apple"
    facebookBut1.style.fontWeight = "700"
    facebookBut1.style.marginTop = "10px"
    facebookBut1.style.height = "25px"
    facebookBut1.style.width = "51%"
    pinkDiv.append(googleBut,facebookBut,facebookBut1)

    //maintext
    const mainText =document.createElement('div')
    mainText.style.display = "flex"
    mainText.style.marginTop = "20px"
    mainText.style.fontWeight = "700"
    pinkDiv.appendChild(mainText)


    const text = document.createElement('span')    
    text.textContent = "Already have an account?"
    
    const text2 = document.createElement('a')
    text2.textContent = "log in"
    text2.style.color = "black"
    text2.setAttribute('href',"https://www.youtube.com/")
    // <a target="_blank" href="www.dch"/>
    mainText.append(text,text2)





    //imgbox
    const imgbox = document.createElement('img')
    imgbox.setAttribute ('src','https://th.bing.com/th/id/OIP.xyRgzVFFnX-j5WqWZdNYTQHaEK?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')
    imgbox.style.height = "90%"
    imgbox.style.width = "50%"
    newDiv.appendChild(imgbox)

</script> */



let a = 5
console.log(a)