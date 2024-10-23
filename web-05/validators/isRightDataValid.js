const isRightDataValid = (data) => {
    if (typeof data.mainText !== "string") {
      throw new Error("mainText должно быть строкой");
    }
  };
  
  module.exports = isRightDataValid;
  