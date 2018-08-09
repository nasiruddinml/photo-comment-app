import shortid from "shortid";

export const Images = generateImages(10);
export const Comments = generateComments(Images);

function generateImages(numberOfImages) {
  return Array.from({ length: numberOfImages }, () => generateImage());
}

/**
 * @returns {Object} - a new image object
 */

export function generateImage() {
  return {
    id: shortid.generate(),
    url: 'https://picsum.photos/1920/1080/?random'
  };
}



export function generateComments(arr) {
  return arr.map(element => {
    return generateComment(element.id);
  })
}

/**
 * @returns {Object} - a new image object
 */

export function generateComment(id) {
  return {
    id: id,
    commentBoxes: []
  };
}




