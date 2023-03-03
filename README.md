## Encrypt and Decrypt Strings with Evervault Functions and Node.js

This is an example of how you can encrypt a string from a text input, encrypt the string, and decrypt it using a serverless function.

In this demo you will use the Evervault React SDK to encrypt a string of text. Then you will decrypt that string and send it back to the client. Be careful about what you decrypt!

This was bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can make adjustments to the component at `pages/Component.js` and to the function invocation at `pages/api/decrypt.js`

## Prerequisites

This project requires
* An Evervault Account [create one here](https://app.evervault.com/register)

## Environment variables

See the `env.example` file for the required environment variables to run the code. You can rename it to `.env` and add yours to run locally.

## Evervault Functions

You will need to deploy [this function](https://github.com/Eclairemoy/decrypt-node) using the Evervault dashboard or the CLI.

## Learn More

To learn more about Evervault check out:

- [Evervault React SDK](https://docs.evervault.com/sdks/reactjs)
- [Evervault Node.js SDK](https://docs.evervault.com/sdks/nodejs)
