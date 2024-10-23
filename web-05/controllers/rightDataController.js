const isRightDataValid = require("../validators/isRightDataValid");

const {
  getRightDataModel,
  postRightDataModel,
} = require("../model/files/rightDataModel");

const getRightData = (req, res, next) => {
  try {
    const data = getRightDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postRightData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    isRightDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель
    postRightDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getRightData, postRightData };
