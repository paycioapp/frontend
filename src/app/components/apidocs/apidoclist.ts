import { useTranslations } from "next-intl";

export function useApidata() {
  const t = useTranslations();
  const apiTabs = [
    {
      id: 1,
      label: t('apilabel1'),
      title: `1.${t('apilabel1')}`,
      description: t('apidescription1'),
      endpoint: "POST /api/v1/getmyinfo",
      requestExample: `curl 
  --location --request POST 'https://sandbox-api.paycio.ae/api/v1/getmyinfo' \\
  --header 'PUBLICKEY: <your-public-key>' \\
  --header 'SIGN: <generated-signature>'`,
      responseExample: `{
  "account": {
  "status": "active",
  "name": "Merchant Name",
  "email": "merchant@example.com"
  }
  }`,
    },
    {
      id: 2,
      label: t('apilabel2'),
      title: `2.${t('apilabel2')}`,
      description: t('apidescription2'),
      endpoint: "GET /api/v1/getinfo",
      requestExample: `curl 
    --location 'https://sandbox-api.paycio.ae/api/v1/getinfo' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --header 'Content-Type: application/json' \\
    --data '{
      "ucpiid": "971987654XXX"
    }'`,
      responseExample: `{
      "user": {
        "name": "John Doe",
        "kyc_status": "verified",
        "email": "johndoe@example.com"
      }
    }`,
    },
    {
      id: 3,
      label: t('apilabel3'),
      title: `3.${t('apilabel3')}`,
      description: t('apidescription3'),
      endpoint: "POST /api/v1/getaddress",
      requestExample: `curl 
    --location 'https://sandbox-api.paycio.ae/api/v1/getaddress' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --header 'Content-Type: application/json' \\
    --data '{
      "vendor_uuid": "fa92ec81-c2f9-4b02-9930-e12bbc7fe933"
    }'`,
      responseExample: `{
      "address": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
      "currency": "BTC"
    }`,
    },
    {
      id: 4,
      label: t('apilabel4'),
      title: `4.${t('apilabel4')}`,
      description: t('apidescription4'),
      endpoint: "POST /api/v1/getcurrencies",
      requestExample: `curl 
    --location --request POST 'https://sandbox-api.paycio.ae/api/v1/getcurrencies' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --data ''`,
      responseExample: `{
      "currencies": [
        { "symbol": "BTC", "rate": "50000" },
        { "symbol": "ETH", "rate": "3400" }
      ]
    }`,
    },
    {
      id: 5,
      label: t('apilabel5'),
      title: `5.${t('apilabel5')}`,
      description: t('apidescription5'),
      endpoint: "POST /api/v1/getbalances",
      requestExample: `curl 
    --location --request POST 'https://sandbox-api.paycio.ae/api/v1/getbalances' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --data ''`,
      responseExample: `{
      "balances": {
        "BTC": "0.005",
        "ETH": "1.2"
      }
    }`,
    },
    {
      id: 6,
      label: t('apilabel6'),
      title: `6.${t('apilabel6')}`,
      description: t('apidescription6'),
      endpoint: "POST /api/v1/requestpayment",
      requestExample: `curl 
    --location 'https://sandbox-api.paycio.ae/api/v1/requestpayment' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --header 'Content-Type: application/json' \\
    --data '{
      "ucpiid": "971987654XXX",
      "amount": "21.1",
      "vendorid": "199",
      "mode": "Paycio"
    }'`,
      responseExample: `{
      "status": "success",
      "payment_link": "https://paycio.ae/pay/12345"
    }`,
    },
    {
      id: 7,
      label: t('apilabel7'),
      title: `7.${t('apilabel7')}`,
      description: t('apidescription7'),
      endpoint: "POST /api/v1/requestpayment",
      requestExample: `curl 
    --location 'https://sandbox-api.paycio.ae/api/v1/requestpayment' \\
    --header 'PUBLICKEY: <your-public-key>' \\
    --header 'SIGN: <generated-signature>' \\
    --header 'Content-Type: application/json' \\
    --data '{
      "amount": "11.0002",
      "vendorid": "199",
      "mode": "Browser"
    }'`,
      responseExample: `{
      "status": "success",
      "wallet_address": "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
    }`,
    },
  ];
  return apiTabs
}