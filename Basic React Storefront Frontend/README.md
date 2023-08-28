# Basic React Storefront Frontend in Typescript with SWC

- uses node v16.14.2
- uses SWR for server fetch calls
- uses react-router-dom for routing, uses routeprovider approach
- processes payment using Stripe

This was written for practise purposes and is not suitable for deployment to production yet.
---

## To install:
~~~
nvm use 16
npm run install
~~~ 

Make sure you add a .env.development file with the following vars:
~~~
VITE_API_PATH="{your api path}"
VITE_PRODUCTS_URL="{your api path}"
~~~
for Stripe payment processing
Make sure you add a .env.development file with the following vars:
~~~
VITE_STRIPE_TOKEN="{Your Stripe token}"
~~~


## To run server: 
~~~
npm run dev
~~~
## To close server:
~~~
ctrl + c
~~~
