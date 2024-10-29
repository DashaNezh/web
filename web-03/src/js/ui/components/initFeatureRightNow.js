import featureRightNowData from "../../mockData/featureRightNowData.js";
import { featureRightNowTemplate } from "../templates/featureRightNowTemplate.js";

const initFeatureRightNow = (featureRightNowNode) => {
    featureRightNowNode.insertAdjacentHTML(
        "beforeend",
        featureRightNowTemplate(featureRightNowData)
    );
};

export default initFeatureRightNow;
