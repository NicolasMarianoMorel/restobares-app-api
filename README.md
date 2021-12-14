# restobares-app-api
## How to start the server:

1.Create database in sql shell of postgres or Pg Admin with the name restobares (CREATE DATABASE restobares;)

2.Create .env in src/ with these exact vars:
```
DB_USER=(your postgres user)

DB_PASS=(your postgres pass)

DB_HOST=localhost:5432 (if you got the posgres in the default port).
```
3.Do ```npm install``` in folder ```/src```.

4.Execute ```npm start``` in folder ```/src``` and it should show "listening to port 3001".

## ENDPOINTS
#### General Routes
- GET /resto/idResto/user
- GET /discounts
- GET /labels
- GET /categories
#### Diner Routes (comensal)
- GET  /resto/:idResto/table/:idTable/order
- GET  /resto/:userid/table/:idtable/menu
- POST /resto/:idResto/table/:idTable/order
#### Admin Routes
- POST /resto/userid/admin/menu

## ROUTES RESPONSES

### General Routes

#### `GET /resto/idResto/user`
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

#### `GET /labels`

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

#### `GET /categories`
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

### Diner Routes (comensal)
	
#### - `GET /resto/:idResto/table/:idTable/order`

<details>
	
<summary>Response: JSON</summary> 
	
``` 
{

	tableId: 1,
  
	state: 'waiting', // free, busy, waiting, pay_cash, pay_online
  
	ordered: [
  
		{ productName: 'Papas Fritas', productId: 23, quantity: 2, price: 200},
    
		{ productName: 'Henieken', productId: 12, quantity: 2, price: 300},
    
		... mas productos
    
	],
  
	totalPrice: 500.0,
  
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
	
{ status: 200, msg: 'Message' }

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
      
      "CategoryId":2
      
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

#### `GET /resto/:userid/table/:idtable/menu`

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

