import { Dimensions } from "react-native";

const {width, height} = Dimensions.get("window");
const metrics ={
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    calc(size=6){
        return metrics.screenWidth = (size / 365);
    }
};

export default metrics;