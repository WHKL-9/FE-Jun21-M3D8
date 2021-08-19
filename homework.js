// this js is working for backoffice.html only

let results = []

const getProduct = async (url) => {
    try{
        const response = await fetch(url, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MjkyODY3OTYsImV4cCI6MTYzMDQ5NjM5Nn0.yAhu_c4q0lOI03taC9l2-tRr-g2fSMHLx3aDjJPmgoA"
            }
        })

        const allProducts = await response.json()
        
        return allProducts

    } catch(error){
        console.log(error)
    }
}

window.onload = () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/"
    getProduct (url) 
    
    const prodcutId = new URLSearchParams(location.search).get("id")
    if (prodcutId){
        document.querySelector(".product-state").innerHTML = "Edit your Product"
    } else{
        document.querySelector(".product-state").innerHTML = "Create your Product"
    }
}


const handleSubmit = async (event) => {
    event.preventDefault() //prevent browser from refreshing | browser's default behavior

    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const newProduct = {
        name: document.getElementById("productName").value ,
        description: document.getElementById("productDescription").value ,
        brand: document.getElementById("productBrand").value ,
        imageUrl: document.getElementById("productImage").value ,
        price: document.getElementById("productPrice").value
    }

    console.log(newProduct)
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjE4YzJkNTI2MjAwMTViNmRjOTIiLCJpYXQiOjE2MjkyODY3OTYsImV4cCI6MTYzMDQ5NjM5Nn0.yAhu_c4q0lOI03taC9l2-tRr-g2fSMHLx3aDjJPmgoA",
                "Content-Type": "application/json",
            }
        })

        if(response.ok){
            const respProduct = await response.json()
            return respProduct
        }

    } catch (error){
        console.log(error)
    }finally{
        console.log("Product submitted")
    }
}

// const resetForm = () => {
//     document.getElementById("#productForm").reset()
// }

