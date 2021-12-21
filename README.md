# restobares-app-api
## ⚙️ Dependencies:

- Node.js v16.13.1 or above

## 🖥️ How to start the server LOCALLY:

1- Clone this repository from the `main` branch.

2- In your preferred CLI do ```npm install``` at the repository's root folder.

3- Do ```npm start``` at the repository's root folder.
   It should be ready when it prints out `Listening to port 3001`.

## ⭐ NEW! - Access the server remotely:

Use this host: https://restobares-app-api.herokuapp.com/ then append to it any of the routes listed below.

#### ⚠️ Tip about table manpulation:
Before you begin playing around with any table, check if someone is using it already.
To check that, perform a GET to https://restobares-app-api.herokuapp.com/resto/:idResto/staff/tables.
Get in contact with any of the colaborators to get a valid value for **_:idResto_**.

## ➡️ ENDPOINTS

#### DEV Routes (only for development)
- GET /dev/users
- DELETE /dev/clear

#### General Routes
- GET /resto/idResto/user
- GET /discounts
- GET /labels
- GET /categories

#### Diner Routes (comensal)
- GET  /resto/:idResto/table/:idTable/order
- GET  /resto/:userid/table/:idtable/menu
- POST /resto/:idResto/table/:idTable/order
- PUT /resto/:idResto/table/:idTable/order
- POST /resto/:idResto/table/:idTable/payment
- POST /resto/:idResto/table/:idTable/feedback

#### Staff Routes
- GET /resto/:idResto/staff/menu
- PUT /resto/:idResto/staff/menu
- GET /resto/:idResto/staff/tables
- PUT /resto/:idResto/staff/tables
- DELETE /resto/:idResto/staff/tables
- GET /resto/:idResto/staff/orders

#### Admin Routes
- *GET /resto/idResto/admin/account
- *PUT /resto/idResto/admin/account
- GET /resto/idResto/admin/revenue
- GET /resto/userid/admin/menu
- POST /resto/userid/admin/menu
- PUT /resto/userid/admin/menu
- DELETE /resto/userid/admin/menu
- GET /resto/:idResto/admin/feedback

## ROUTES RESPONSES

### --- Example for copy

#### - `GET /route/:param/etc/:otherParam/blablabla`

<details>
	
<summary>Request: Body</summary>

```

{
    property: 'value',
    otherProperty: 'otherValue',
}
	
```

</details>

<details>
	
<summary>Response: JSON</summary>

```

{
    "property": "value",
    "otherProperty": "otherValue"
}
	
```

</details>

### --- DEV Routes (only for development)


#### - `GET /dev/users`

<details>
	
<summary>Response: JSON</summary>

```

[
  {
    "id": "cc7fb1eb-4ca7-48a2-b6b8-d08b2bfca99b",
    "title": "La Trufa Dorada"
  },
  {
    "id": "2a7ab818-eeb9-4406-8dd6-81ff2547bc33",
    "title": "Betos"
  }
]
	
```

</details>

#### - `DELETE /dev/clear`

<details>
	
<summary>Request: Body</summary>

```

{
    idResto: "d7u8974jk398e09812j3hjks82",
    idTable: 1
}
	
```

</details>

### --- General Routes

#### - `GET /resto/idResto/user`
<details>
	
<summary>Response: JSON</summary> 
	
``` 
[

    {
    
        "id": "52b8f3ad-5ff6-4627-ace0-522c1a0f0d76",
        
        "title": "La Trufa Dorada",
        
        "logo": "https://i2.bssl.es/guiamaximin/2020/01/la-chistera-880x587.jpg"
        
    }
    
] 
```
	
</details>

#### - `GET /labels`

<details>
	
<summary>Response: JSON</summary> 
	
``` 
[

    {
    
        "id": 1,
        
        "name": "ice cream"
        
    },
    
    {
    
        "id": 2,
        
        "name": "dinner"
        
    },
    
    {
    
        "id": 3,
        
        "name": "drink with alcohol"
        
    },
    
    {
    
        "id": 4,
        
        "name": "soft drink"
        
    },
    
    {
    
        "id": 5,
        
        "name": "pasta,
        
    },
    
    {
    
        "id": 6,
        
        "name": "fish and shellfish"
        
    },
    
    {
    
        "id": 7,
        
        "name": " woks"
        
    },
    
    {
    
        "id": 8,
        
        "name": "empanadas"
        
    },
    
    {
    
        "id": 9,
        
        "name": "lomitos"
        
    },
    
    {
    
        "id": 10,
        
        "name": "chicken"
        
    },
    
    {
    
        "id": 11,
        
        "name": "meat"
        
    },
    
    {
    
        "id": 12,
        
        "name": "fried"
        
    }
    
] 
```
</details>

#### - `GET /categories`
<details>
	
<summary>Response: JSON</summary> 

``` 
[

    {
    
        "id": 1,
        
        "name": "starter"
        
    },
    
    {
    
        "id": 2,
        
        "name": "main course"
        
    },
    
    {
    
        "id": 3,
        
        "name": "dessert"
        
    },
    
    {
    
        "id": 4,
        
        "name": "drink"
        
    }
 
] 
```
</details>

#### - `GET /discounts`

<details>
	
<summary>Response: JSON</summary> 

```
[

    {
    
        "id": 1,
        
        "percentage": 50,
        
        "factor": 2,
        
        "max_discounts": 3
        
    },
    
    {
    
        "id": 2,
        
        "percentage": 50,
        
        "factor": 3,
        
        "max_discounts": 4
        
    },
    
    {
    
        "id": 3,
        
        "percentage": 75,
        
        "factor": 1,
        
        "max_discounts": 4
        
    }
    
]
```
</details>

### --- Diner Routes (comensal)
	
#### - `GET /resto/:idResto/table/:idTable/order`

<details>
	
<summary>Response: JSON</summary> 
	
``` 
{

	tableId: 1,
  
	state: 'waiting', // free, eating, waiting, pay_cash, pay_online
  
	ordered: [
  
		{ productName: 'Papas Fritas', productId: 23, quantity: 2, price: 200},
    
		{ productName: 'Henieken', productId: 12, quantity: 2, price: 300},
    
		... mas productos
    
	],
  
	totalPrice: 500.0,
	
	tip: 50.0,
  
	currentOrder: {
  
		time: '2022-01-07T23:45:05.467Z',
    
		products: [
    
			{ productName: 'Brownie', quantity: 2, price: 300},
      
			... mas productos
      
		],
    
	},
  
	comments: 'las papas sin sal porfa'
  
} 

```

</details>

#### - `POST /resto/:idResto/table/:idTable/order`

<details>
	
<summary>Request: Body</summary> 

```
{

  products [
  
		{ productName: 'Papas Fritas', productId: 23, quantity: 2, price: 200},
    
		{ productName: 'Henieken', productId: 12, quantity: 2, price: 300},
    
  ],
  
  comments: "Sin sal por favor."
  
}

```

</details>

<details>
	
<summary>Response: JSON</summary> 

```
	
{ status: 200, msg: 'Te order has been taken.' }

```

</details>

#### `PUT /resto/:idResto/table/:idTable/order`

<details>
	
<summary>Response: JSON</summary>

```
{
    "msg": "The table 1 is calling the staff."
}
```

</details>

#### `POST /resto/:idResto/table/:idTable/feedback`

<details>
	
<summary>Response: Body</summary>

```
{
    "msg": "the post was made correctly"
}
	//ejemplo
 {
 
    {
	
    "comment":"buenardo",
	
    "rating": 5
}
      
}
```

</details>


#### `POST /resto/userid/admin/menu`

<details>
	
<summary>Request: Body</summary> 
	
```
  
//ejemplo de platillo 1
 {
 
      "name":"Poke",
      
      "price":23,
      
      "detail":"Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
      
      "image":"",
      
      "id_label":[2,5],
      
      "CategoryId":2,

      "DiscountId":""
      
}
//ejemplo de platillo 2
{

       "name":"Cesar Salad",
       
       "price":10,
       
       "detail":"Parmesan cheese, lemon juice, coddled egg, olive oil, romaine and croutons",
       
       "image":"",
       
       "id_label":[2,5],
       
       "CategoryId":2,
       
       "DiscountId":1
       
}
//ejemplo de platillo 3
{
 
       "name":"Spaguetti with Meatballs",
       
       "price":13,
       
       "detail":"Spaguetty with large and spicy meatballs",
       
       "image":"",
       
       "id_label":[2,11],
       
       "CategoryId":1,
       
       "DiscountId":2
       
 } 
  
 ```
	
</details>

#### `POST /resto/:idResto/table/:idTable/payment`

<details>
	
<summary>Request: Body</summary> 

```
{
  "state" : "pay_cash",
  "tip" : 0
}

```
	
</details>

#### `GET /resto/:idResto/table/:idtable/menu`

<details>
	
<summary>Response: JSON</summary> 

```
[
 
    {
    
        "id": 1,
        
        "name": "Poke",
        
        "price": "23.00",
        
        "detail": "Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
        
        "image": "",
        
        "available": true,
        
        "DiscountId": null,
        
        "CategoryId": 2,
        
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        
        "Labels": [
        
            2,
            
            6,
            
            7
            
        ]
        
    },
    {
    
        "id": 2,
        
        "name": "Cesar Salad",
        
        "price": "10.00",
        
        "detail": "Parmesan cheese, lemon juice, coddled egg, olive oil, romaine and croutons",
        
        "image": "",
        
        "available": true,
        
        "DiscountId": 1,
        
        "CategoryId": 2,
        
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        
        "Labels": [
        
            2,
            
            5
            
        ]
        
    },
    {
    
        "id": 3,
        
        "name": "Spaguetti with Meatballs",
        
        "price": "13.00",
        
        "detail": "Spaguetty with large and spicy meatballs",
        
        "image": "",
        
        "available": true,
        
        "DiscountId": 2,
        
        "CategoryId": 1,
        
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        
        "Labels": [
        
            2,
            
            11
            
        ]
        
    }
    
]

```

</details>

### --- Staff Routes

#### `GET /resto/:idResto/staff/menu`

<details>
	
<summary>Response: JSON</summary>

```

[
    {
        "id": 3,
        "name": "Chori",
        "price": "23.00",
        "detail": "Un chorizo entre dos panes",
        "image": "http://www.elchacalparrilla.com/images/carta/CHORIPAN.jpg",
        "available": true,
        "DiscountId": null,
        "CategoryId": 2,
        "UserId": "cc4eb956-6c15-4d1f-871e-da0f6883718a",
        "Labels": [
            2,
            5
        ]
    },
    {
        "id": 4,
        "name": "Fernet",
        "price": "23.00",
        "detail": "El fernesito de la ranchada",
        "image": "https://pbs.twimg.com/media/B4iFFySIEAA8sf5.jpg",
        "available": true,
        "DiscountId": null,
        "CategoryId": 2,
        "UserId": "cc4eb956-6c15-4d1f-871e-da0f6883718a",
        "Labels": [
            2,
            5
        ]
    },
    {
        "id": 2,
        "name": "Poke",
        "price": "23.00",
        "detail": "Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
        "image": "",
        "available": true,
        "DiscountId": null,
        "CategoryId": 2,
        "UserId": "cc4eb956-6c15-4d1f-871e-da0f6883718a",
        "Labels": [
            2,
            5
        ]
    }
]
	
```
	
</details>

#### `PUT /resto/:idResto/staff/menu`

<details>
	
<summary>Request: Body</summary>

```

{
    product_Id: 1	
}
	
```

</details>

#### `GET /resto/:idResto/staff/tables`

<details>
	
<summary>Response: JSON</summary>

```
  
{
    "tables": [
        {
            "tableId": 1,
            "state": "free",
            "ordered": [],
            "totalPrice": 0,
	    "tip": 0,
            "currentOrder": {
                "time": "",
                "products": [],
                "comments": ""
            }
        },
        {
            "tableId": 2,
            "state": "waiting",
            "ordered": [],
            "totalPrice": 0,
	    "tip": 0,
            "currentOrder": {
                "time": "2021-12-15T15:32:28.557Z",
                "products": [
                    {
                        "productName": "Papas Fritas",
                        "productId": 23,
                        "quantity": 2,
                        "price": 200
                    },
                    {
                        "productName": "Henieken",
                        "productId": 12,
                        "quantity": 2,
                        "price": 300
                    }
                ],
                "comments": "Sin sal por favor."
            }
        },
        {
            "tableId": 3,
            "state": "free",
            "ordered": [],
            "totalPrice": 0,
	    "tip": 0,
            "currentOrder": {
                "time": "",
                "products": [],
                "comments": ""
            }
        },
        {
            "tableId": 4,
            "state": "free",
            "ordered": [],
            "totalPrice": 0,
	    "tip": 0,
            "currentOrder": {
                "time": "",
                "products": [],
                "comments": ""
            }
        },
        {
            "tableId": 5,
            "state": "free",
            "ordered": [],
            "totalPrice": 0,
	    "tip": 0,
            "currentOrder": {
                "time": "",
                "products": [],
                "comments": ""
            }
        }
    ]
}
  
```
  
</details>

#### - `PUT /resto/:idResto/staff/tables`

<details>
	
<summary>Request: Body</summary>

```

{
    idTable: 1,
    state: 'eating',
    idStaff: '39672174'
}
	
```

</details>

#### `DELETE /resto/:idResto/staff/tables `

<details>
	
<summary>Body: JSON</summary>
  
```
  
{
    tableId:2,
    productId:12
}
  
```
  
</details>


#### - `GET /resto/:idResto/staff/orders`

<details>
	
<summary>Response: JSON</summary>

```

[
    {
        "idTable": 1,
        "currentOrder": {
            "time": "16/12/2021 21:17:36",
            "products": [
                {
                    "productName": "Papas Fritas",
                    "productId": 23,
                    "quantity": 2,
                    "price": 200
                },
                {
                    "productName": "Henieken",
                    "productId": 12,
                    "quantity": 2,
                    "price": 300
                }
            ],
            "comments": "Sin sal por favor."
        }
    },
    {
        "idTable": 2,
        "currentOrder": {
            "time": "16/12/2021 21:17:17",
            "products": [
                {
                    "productName": "Papas Fritas",
                    "productId": 23,
                    "quantity": 2,
                    "price": 200
                },
                {
                    "productName": "Henieken",
                    "productId": 12,
                    "quantity": 2,
                    "price": 300
                }
            ],
            "comments": "Sin sal por favor."
        }
    }
]
	
```

</details>

### --- Admin Routes

#### - `GET /resto/:idResto/admin/account`


<details>
	
<summary>Response: JSON</summary>

```

{
    "id": "ANzbx5Pa3dPizabR",
    "email": "goldentruffle@gmail.com",
    "passAdmin": "abc123",
    "passStaff": "321cba",
    "tables": 5,
    "title": "La Trufa Dorada",
    "logo": "https://vignette.wikia.nocookie.net/simpsons/images/d/dd/Fabf01_20_goldener_trueffel.jpg/revision/latest?cb=20140407012625",
    "theme": 1,
    "payment_mp": null
}
	
```

</details>

#### - `PUT /resto/:idResto/admin/account`


<details>
	
<summary>Request: Body</summary>

```

{
    "title" : "El Holandes frito"
    "logo" : "https://vignette.wikia.nocookie.net/simpsons/images/d/dd/Fabf01_20_goldener_trueffel.jpg/revision/latest?cb=20140407012625"
}
	
```

</details>

#### - `GET /resto/:idResto/admin/revenue`

<details>
	
<summary>Request: Body</summary>

```
//example 1:
{
    filterTime: 'Day'     // 'Day', 'Month'
}
//example 2:
{
    filterTime: 'Day',     // 'Day', 'Month'
    filterPrice: 'Ascendent' // 'Ascendent', 'Descendent'
}

	
```

</details>

<details>
	
<summary>Response: JSON</summary>

```

[
    {
        "id": 1,
        "idStaff": 39672174,
        "totalPrice": "500.00",
        "tip": "123.00",
        "date": "16/12/2021, 8:59:35 p. m.",
        "idTable": 2,
        "paymentMethod": "pay_cash",
        "UserId": "00880663-5552-4f00-b2eb-992de871e4ee",
        "SoldProducts": [
            {
                "productId": 23,
                "name": "Papas Fritas",
                "price": "200.00",
                "quantity": 2
            },
            {
                "productId": 12,
                "name": "Henieken",
                "price": "300.00",
                "quantity": 2
            }
        ]
    }
]
	
```

#### `GET /resto/userid/admin/menu`

<details>
	
<summary>Response: JSON</summary>

```
[
    {
        "id": 1,
        "name": "Poke",
        "price": "23.00",
        "detail": "Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
        "image": "",
        "available": true,
        "DiscountId": null,
        "CategoryId": 2,
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        "Labels": [
            2,
            6,
            7
        ]
    },
    {
        "id": 2,
        "name": "Cesar Salad",
        "price": "10.00",
        "detail": "Parmesan cheese, lemon juice, coddled egg, olive oil, romaine and croutons",
        "image": "",
        "available": true,
        "DiscountId": 1,
        "CategoryId": 2,
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        "Labels": [
            2,
            5
        ]
    },
    {
        "id": 3,
        "name": "Spaguetti",
        "price": "28.00",
        "detail": "Spaguetty with large and spicy meatballs and house sauce",
        "image": "imagen",
        "available": true,
        "DiscountId": 2,
        "CategoryId": 1,
        "UserId": "698b2498-0b10-46ce-9524-005449b5f966",
        "Labels": [
            2,
            11
        ]
    }
]

```

</details>

#### `POST /resto/userid/admin/menu`

<details>
	
<summary>Request: Body</summary> 
	
```
  
//example 1
 {
 
      "name":"Poke",
      
      "price":23,
      
      "detail":"Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
      
      "image":"",
      
      "id_label":[2,5],
      
      "CategoryId":2
      
}
//example 2
{

       "name":"Cesar Salad",
       
       "price":10,
       
       "detail":"Parmesan cheese, lemon juice, coddled egg, olive oil, romaine and croutons",
       
       "image":"",
       
       "id_label":[2,5],
       
       "CategoryId":2,
       
       "DiscountId":1
       
}
//example 3
{
 
       "name":"Spaguetti with Meatballs",
       
       "price":13,
       
       "detail":"Spaguetty with large and spicy meatballs",
       
       "image":"",
       
       "id_label":[2,11],
       
       "CategoryId":1,
       
       "DiscountId":2
       
 } 
  
 ```
	
</details>

#### `PUT /resto/userid/admin/menu/idProduct`

<details>
	
<summary>*Params: idproduct* Request: Body</summary>

```

//example 1
{
       "name":"",
       "price":28
 } 

//example 2
{
       "name":"",
       "price":18,
       "detail":"",
       "image":"",
       "id_label":"",
       "CategoryId":"",
       "DiscountId":"",
       "available": ""
 }

 //example 3
 {
       "name":"Spaguetti",
       "price":15,
       "detail":"Spaguetty with large and spicy meatballs and house sauce",
       "image":"imagen",
       "id_label":[2,11],
       "CategoryId":"",
       "DiscountId":"",
       "available": true
 } 

```

</details>

#### `DELETE /resto/idResto/admin/menu/:idProduct`

<details>
	
<summary>*Params: idproduct* Response: JSON</summary>
  
```
{
    "msg": "Product Deleted"
}

```
</details>

#### - `GET /resto/:idResto/admin/feedback`

<details>
	
<summary>Request: Body</summary>

```
[
  {
      comment: 'Excelente servicio',
      rating: 5,
  },
  {
      comment: 'Excelente servicio',
      rating: 5,
  },
  {
      comment: 'Excelente servicio',
      rating: 5,
  }
]	
```

</details>
