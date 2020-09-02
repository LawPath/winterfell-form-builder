import WinterfellFormBuilder from "./components/WinterfellFormBuilder";
import WinterfellFormBuilderReducer from "./reducers/winterfellFormBuilderReducer";
import {
  addQuestion,
  addQuestionSet,
  goToPage,
  onSelectNextButtonAction,
  onSelectNextButtonTarget,
  addPage,
  changeCurrentEditingField,
  deletePage,
  createForm,
} from "./actions/winterfellFormBuilderActions";

export {
  WinterfellFormBuilderReducer,
  addQuestion,
  addQuestionSet,
  goToPage,
  onSelectNextButtonAction,
  onSelectNextButtonTarget,
  addPage,
  changeCurrentEditingField,
  deletePage,
  createForm,
};
export default WinterfellFormBuilder;
