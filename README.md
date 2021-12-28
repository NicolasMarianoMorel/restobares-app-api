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

#### ⚠️ Tip about routes that require authorization (Staff and Admin routes):
Before doing the request to the routes listed below in Staff or Admin side, you have to set the header "authorization" with the proper json web token pass as response in the route /login. 
So, you have to write in the authorization header "Bearer ${token}" its very important to let a space between Bearer and the token string.

If u want to skip the login process, you can use in the header authorization, a special token called "AdminSupremeTest". 

Example: `Bearer AdminSupremeTest`.

#### ⚠️ Tip about Posting Images:
When doing anything that requires posting an Image (example: POST /resto/:idResto/admin/menu), the Image now requires to be uploaded in the _base64_ format.
<details>

<summary>For example:</summary>

```
{
	...
	"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K...",
	...
}
```
	
</details>

## ➡️ ENDPOINTS

#### DEV Routes (only for development)
- GET /dev/users
- DELETE /dev/clear

#### General Routes
- GET /resto/idResto/user
- GET /discounts
- GET /labels
- GET /categories
- POST /register
- GET /confirmation/:token
- *POST /login

#### Diner Routes (comensal)
- GET  /resto/:idResto/table/:idTable/order
- GET  /resto/:userid/table/:idtable/menu
- *GET  /resto/:userid/table/:idtable/mp/:idStaff (Backend route only not Frontend)
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
- GET /resto/:idResto/admin/account
- PUT /resto/:idResto/admin/account
- GET /resto/:idResto/admin/revenue
- GET /resto/:idResto/admin/menu
- POST /resto/:idResto/admin/menu
- PUT /resto/:idResto/admin/menu
- DELETE /resto/:idResto/admin/menu
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

#### - `POST /register`

<details>
	
<summary>Request: Body</summary>

```

{
	"email": "email@email.com",
	"passAdmin": "abc123",
	"passStaff": "xyz321",
	"title": "Titulo de tu Restoran",
   	"tables": 8,
	"logo": "https//:fakeimage.url.com/asdasdasd",
	"paymentInfo": "78fgd89f79345uyhew908r"
}
	
```

</details>

#### - `GET /confirmation/:token`

<details>
	
<summary>Response: JSON</summary>

```

{
  "msg": "Your account has been confirmed successfully."
}
	
```

</details>

#### - `POST /login`

<details>
	
<summary>Request: Body</summary>

```

{
  "email": "elñeroñobarde@gmail.com",
  "password" : "abc123"
}
	
```

</details>

<details>
	
<summary>Response: JSON</summary>

```

{
  msg: `Welcome back, ${user.title}! You logged in as ${role}.`, 
  token: "fweofoiwneoifwef"
}
	
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

#### `*GET  /resto/:userid/table/:idtable/mp/:idStaff`

<details>

<summary>Response: JSON</summary>

```

{ 

    msg: "Payment Confirmed.", status: 200 
    
}


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
    "logo": "https://fake.image.url/123455",
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
    "logo" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
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
    filterTime: 'Day',     // 'Day', 'Month', 'Last7days'
    orderPrice: 'Ascendent' // 'Ascendent', 'Descendent'
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
</details>

#### `GET /resto/:idResto/admin/menu`

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


#### `POST /resto/:idResto/admin/menu`

<details>
	
<summary>Request: Body</summary> 
	
```
  
//example 1
 {
 
      "name":"Poke",
      
      "price":23,
      
      "detail":"Sushi rice, cherry tomato, avocado, edamame, red onion, mango, salmon and tataki sauce",
      
       "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
      
      "id_label":[2,5],
      
      "CategoryId":2
      
}
//example 2
{

       "name":"Cesar Salad",
       
       "price":10,
       
       "detail":"Parmesan cheese, lemon juice, coddled egg, olive oil, romaine and croutons",
       
       "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
       
       "id_label":[2,5],
       
       "CategoryId":2,
       
       "DiscountId":1
       
}
//example 3
{
 
       "name":"Spaguetti with Meatballs",
       
       "price":13,
       
       "detail":"Spaguetty with large and spicy meatballs",
       
       "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
       
       "id_label":[2,11],
       
       "CategoryId":1,
       
       "DiscountId":2
       
 } 
  
 ```
	
</details>

#### `PUT /resto/:idResto/admin/menu/:idProduct`

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
       "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
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
       "image":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+K",	// Image in base64 format
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
