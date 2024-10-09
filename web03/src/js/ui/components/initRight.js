import rightData from "../../mockData/rightData.js";
import { rightTemplate } from "../templates/rightTemplate.js";

const initRight = (rightNode) => {
    rightNode.insertAdjacentHTML("beforeend", rightTemplate(rightData));
};

export default initRight;