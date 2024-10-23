const isFeatureRightNowDataValid = require("../validators/isFeatureRightNowDataValid");

const {
  getFeatureRightNowDataModel,
  postFeatureRightNowDataModel,
} = require("../model/files/featureRightNowDataModel");

const getFeatureRightNowData = (req, res, next) => {
  try {
    const data = getFeatureRightNowDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postFeatureRightNowData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isFeatureRightNowDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postFeatureRightNowDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getFeatureRightNowData, postFeatureRightNowData };
