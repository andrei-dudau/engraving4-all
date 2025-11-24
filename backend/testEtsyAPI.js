require("dotenv").config();
const axios = require("axios");

const ETSY_API_TOKEN = process.env.ETSY_API_TOKEN;
const ETSY_API_KEY = process.env.ETSY_API_KEY; // This is your client_id
const SHOP_ID_OR_NAME = "CharliesCreativeStd"; // Replace with your shop name

async function testEtsyAPI() {
  try {
    const response = await axios.get(
      `https://openapi.etsy.com/v3/application/shops/${SHOP_ID_OR_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${ETSY_API_TOKEN}`,
          "x-api-key": ETSY_API_KEY,
        },
      }
    );

    console.log("✅ Etsy API connection successful!");
    console.log(response.data);
  } catch (error) {
    console.error("❌ Etsy API test failed:");
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

testEtsyAPI();