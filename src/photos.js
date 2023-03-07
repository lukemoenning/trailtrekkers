/**
 * Functions to upload and retrieve phto from AWS S3
 */

import { Storage } from 'aws-amplify';


/**
* Upload the image to the S3 bucket
* @param {*} file image file
* @param {*} id id of the object the photo is associated with
*/
export const uploadPhoto = async (file, id) => {
 try {
   await Storage.put('photo' + id, file);
 } catch (error) {
   console.log('Error uploading file: ', error);
 }
}