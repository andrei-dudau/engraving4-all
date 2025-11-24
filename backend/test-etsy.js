import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.ETSY_API_KEY;

async function testEtsy() {
  try {
    // Test #1: Ping the API
    const ping = await axios.get("https://openapi.etsy.com/v3/application/openapi-ping", {
      headers: {
        "x-api-key": API_KEY,
      },
    });
    console.log("✅ Ping:", ping.data);

    // Test #2: Fetch active public listings
    const listings = await axios.get("https://openapi.etsy.com/v3/application/listings/active?limit=2", {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    console.log("✅ Public Listings:", listings.data);
  } catch (error) {
    const status = error?.response?.status;
    const data = error?.response?.data;
    console.error("❌ Etsy API test failed:\nStatus:", status, "\nData:", data);
  }
}

testEtsy();