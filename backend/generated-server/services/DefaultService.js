/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Check database health
* Performs a simple query to verify that the database connection is operational
*
* returns _api_database_health_get_200_response
* */
const apiDatabaseHealthGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all images
* Fetch all image records from the database
*
* returns List
* */
const apiDatabaseImagesGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all products
* Fetch all products from the database
*
* returns List
* */
const apiDatabaseProductsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all testimonials
* Fetch all testimonials that are set to showcase and order them by the \"order\" column
*
* returns List
* */
const apiDatabaseTestimonialsGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  apiDatabaseHealthGET,
  apiDatabaseImagesGET,
  apiDatabaseProductsGET,
  apiDatabaseTestimonialsGET,
};
