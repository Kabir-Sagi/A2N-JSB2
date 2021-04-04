function fn() {
    // Took the References of Elements
   var nameRef= document.getElementById('name')
   var passwordRef= document.getElementById('password')
   var emailRef= document.getElementById('email')
   var locationRef= document.getElementById('location')
   // Took the values of each inputs element
    var nameVal = nameRef.value
    var passwordVal = passwordRef.value
    var emailVal = emailRef.value
    var locationVal = locationRef.value

    // console.log(nameVal,passwordVal,emailVal,locationVal)
         //Created Table Element
        var tableElementRef= document.createElement('table')
        // created Tr element
        var trElementRef1 = document.createElement('tr')
        var trElementRef2 = document.createElement('tr')

        var thElementRef1 = document.createElement('th')
        var thElementRef2 = document.createElement('th')
        var thElementRef3 = document.createElement('th')
        var thElementRef4 = document.createElement('th')

        var tdElementRef1 = document.createElement('td')
        var tdElementRef2 = document.createElement('td')
        var tdElementRef3 = document.createElement('td')
        var tdElementRef4 = document.createElement('td')

          var thContent1=   document.createTextNode('NAME')
          var thContent2=   document.createTextNode('PASSWORD')
          var thContent3=   document.createTextNode('EMAIL')
          var thContent4=   document.createTextNode('LOCATION')

          thElementRef1.append(thContent1)
          thElementRef2.append(thContent2)
          thElementRef3.append(thContent3)
          thElementRef4.append(thContent4)

          tdElementRef1.append(nameVal)
          tdElementRef2.append(passwordVal)
          tdElementRef3.append(emailVal)
          tdElementRef4.append(locationVal)

            tableElementRef.appendChild(trElementRef1)
            tableElementRef.appendChild(trElementRef2)

            trElementRef1.appendChild(thElementRef1)
            trElementRef1.appendChild(thElementRef2)
            trElementRef1.appendChild(thElementRef3)
            trElementRef1.appendChild(thElementRef4)

            trElementRef2.appendChild(tdElementRef1)
            trElementRef2.appendChild(tdElementRef2)
            trElementRef2.appendChild(tdElementRef3)
            trElementRef2.appendChild(tdElementRef4)

            tableElementRef.setAttribute('border','1')

            document.querySelector('body').appendChild(tableElementRef)

}


function fn1() {
    
}