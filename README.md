# restobares-app-api
How to start the server:

Create database in sql shell of postgres or Pg Admin with the name restobares (CREATE DATABASE restobares;)

Create .env in src/ with those exact vars:

DB_USER= (your postgres user)

DB_PASS= (your postgres pass)

DB_HOST= localhost:5432 (if you got the posgres in the default port).

Do npm install in folder /src, after that, execute npm start in the same folder and it should show "listening to port 3001".

### Endpoints
#### General Routes
- ruta get:/resto/idResto/user --> 
- ruta get:/discounts --> 
- ruta get:/labels --> 
- ruta get:/categories
#### Diner Routes (comensal)
- ruta get: /resto/:idResto/table/:idTable/order --> 
- ruta post: /resto/:idResto/table/:idTable/order --> 
- ruta get: /resto/:userid/table/:idtable/menu -->
#### Admin Routes
- ruta post: /resto/userid/admin/menu -->

## ROUTES RESPONSES

### ruta get:/resto/idResto/user -->
JSON: ``` [

    {
    
        "id": "52b8f3ad-5ff6-4627-ace0-522c1a0f0d76",
        
        "title": "La Trufa Dorada",
        
        "logo": "https://i2.bssl.es/guiamaximin/2020/01/la-chistera-880x587.jpg"
        
    }
    
] ```
### ruta get:/labels --> 
JSON: ``` [

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
### ruta get:/categories
JSON: ``` [

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
    
] ```
### ruta get:/discounts -->
JSON: ``` [

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

#### RUTA '/resto/:idResto/table/:idTable/order'

#### El comensal obtiene la orden de la mesa 1, Restaurante 698b2498-0b10-46ce-9524-005449b5f966 (revisar que el id no haya cambiado si esta el force true en la carpeta bin/www)

##### GET http://localhost:3001/resto/698b2498-0b10-46ce-9524-005449b5f966/table/1/order

// Ejemplo Respuesta (status 200):
<-- JSON ``` {

	tableId: 1,
  
	state: 'waiting', // free, busy, waiting, pay_cash, pay_online
  
	ordered: [
  
		{ productName: 'Papas Fritas', quantity: 2, price: 200},
    
		{ productName: 'Henieken', quantity: 2, price: 300},
    
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
  
} ```


##### El comensal envía la orden de la mesa 1, Restaurante 698b2498-0b10-46ce-9524-005449b5f966

##### POST http://localhost:3001/resto/698b2498-0b10-46ce-9524-005449b5f966/table/1/order

### BODY: ```
{

  products [
  
    { productName: 'Papas Fritas', quantity: 2, price: 200.0 },
    
    { productName: 'Heineken', quantity: 2, price: 300.0 },
    
  ],
  
  comments: "Sin sal por favor."
  
}

// Recibe

<-- STATUS 200: Si no tenía una orden en espera.

<-- STATUS 400: Si ya habia una orden en espera.

<-- En ambos casos recibe también un mensaje.

### ruta post --> /resto/userid/admin/menu
ejemplos para hacer post en Postman:
http://localhost:3001/resto/698b2498-0b10-46ce-9524-005449b5f966/admin/menu
JSON:

//ejemplo de platillo 1

 ``` {
 
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
       
 } ```
 
### ruta get --> /resto/:userid/table/:idtable/menu

asi se obtiene el JSON del get:

ejemplo:

http://localhost:3001/resto/698b2498-0b10-46ce-9524-005449b5f966/table/1/menu

ejemplo respuesta:
 ``` [
 
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
    
] ```

