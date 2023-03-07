/**
 * Functions to upload and retrieve phto from AWS S3
 */

import { Storage } from 'aws-amplify';


/**
* Upload the image to the S3 bucket
* @param {*} file image file
* @param {*} id id of the object the photo is associated with
*/
export async function uploadPhoto(file, id) {
 try {
   await Storage.put('photo' + id, file);
 } catch (error) {
   console.log('Error uploading file: ', error);
 }
}

/**
 * Retrieves the hike photo from S3
 * @param {*} imagePath image path from S3
 * @returns photo retrieved from S3
 */
export async function getPhoto(imagePath) {
  try {
    const photo = await Storage.get(imagePath);
    return photo;
  } catch (error) {
    console.log('Error retrieving hike photo: ', error);
    return null;
  }
};