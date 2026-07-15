import express from 'express'

const app = express()

app.get('/api/products',(req,res)=>{
            const products = [
        {
            id: 1,
            name: "Wooden Table",
            price: 200,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
        },
        {
            id: 2,
            name: "Glass Table",
            price: 250,
            image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg"
        },
        {
            id: 3,
            name: "Modern Chair",
            price: 150,
            image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg"
        },
        {
            id: 4,
            name: "Comfortable Sofa",
            price: 500,
            image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg"
        },
        {
            id: 5,
            name: "Wooden Bed",
            price: 700,
            image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg"
        },
        {
            id: 6,
            name: "Office Chair",
            price: 180,
            image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
        },
        {
            id: 7,
            name: "Dining Table",
            price: 450,
            image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg"
        },
        {
            id: 8,
            name: "Bookshelf",
            price: 300,
            image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg"
        },
        {
            id: 9,
            name: "Luxury Sofa",
            price: 850,
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
        },
        {
            id: 10,
            name: "Study Desk",
            price: 350,
            image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg"
        },
        {
            id: 11,
            name: "table plastic",
            price: 150,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id: 12,
            name: "table metal",
            price: 300,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id: 13,
            name: "table rubber",
            price: 500,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            id: 14,
            name: "table polyester",
            price: 150,
            image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
        ];

        http://localhost:3000/api/products?search=wood  
        
        // i want to apply a search query to show only those products that i search for

        if(req.query.search){
            const filterProducts=products.filter(product => 
                product.name.includes(req.query.search))
                res.send(filterProducts)
                return;
        }

    setTimeout(()=>{
        res.send(products)
    },4000)
})

const port= process.env.PORT || 3000;

app.listen(port,()=>{
        console.log(`Server at http://localhost:${port}`)

})
