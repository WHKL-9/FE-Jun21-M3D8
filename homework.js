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
    
    // displayProduct(product)
}

// <!-- The product model is 
// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
// } -->

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

