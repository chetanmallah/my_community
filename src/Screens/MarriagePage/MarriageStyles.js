// MarriageStyles.js
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  fontSize,
  isPixel2,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
} from "../../utils/responsiveHelper";

const MarriageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: "1%"
  },
  scrollContent: {
    paddingHorizontal: wp(isPixel2 ? "5%" : isLargeDevice ? "12%" : "8%"),
    
    paddingBottom: hp("5%"),
  },
  header: {
    marginBottom: hp("4%"),
  },
  title: {
    fontSize: fontSize(36), // 🔥 Pixel 2 auto-adjust handled in fontSize()
    fontWeight: "700",
    color: "#000",
    marginBottom: hp("1%"),
    textAlign: "center",
    marginTop: hp(isPixel2 ? "5%" : "8%"),
  },
  subtitle: {
    fontSize: fontSize(16),
    color: "#666",
    textAlign: "center",
  },
  section: {
    marginBottom: hp("3.5%"),
  },
  sectionTitle: {
    fontSize: fontSize(17),
    fontWeight: "600",
    color: "#000",
    marginBottom: hp("2%"),
  },
  genderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: wp(isPixel2 ? "3%" : "4%"),
  },
  genderButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: hp(isPixel2 ? "1.8%" : "2.2%"),
    borderRadius: wp("3%"),
    backgroundColor: "#f5f5f5",
  },
  genderButtonSelected: {
    backgroundColor: "#000",
  },
  genderText: {
    fontSize: fontSize(16),
    fontWeight: "500",
    color: "#000",
    marginLeft: wp("3%"),
  },
  genderTextSelected: {
    color: "#fff",
  },
  ageRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: wp(isPixel2 ? "2%" : "3%"),
  },
  ageInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: hp(isPixel2 ? "1.3%" : "1.7%"),
    fontSize: fontSize(16.5),
  },
  ageSeparator: {
    fontSize: fontSize(16),
    color: "#000",
    fontWeight: "500",
  },
  radioGroup: {
    marginLeft: wp("-3%"),
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(isPixel2 ? "1%" : "1.3%"),
  },
  radioText: {
    fontSize: fontSize(16.5),
    color: "#000",
    marginLeft: wp("3%"),
  },
  searchButton: {
    backgroundColor: "#000",
    paddingVertical: hp(isPixel2 ? "2%" : "2.5%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    marginTop: hp("3%"),
  },
  searchButtonDisabled: {
    backgroundColor: "#aaa",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: fontSize(17),
    fontWeight: "600",
  },
});

export default MarriageStyles;
