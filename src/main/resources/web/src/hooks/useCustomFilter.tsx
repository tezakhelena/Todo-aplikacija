import { FormInstance } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { FilterStateKeys } from "../store/slices/filteriSlice";
import { RootState } from "../store/store";

interface Props {
    nazivFiltera: FilterStateKeys; // Pretpostavljam da imaš tip FilteriState
    form: FormInstance<any>; // FormInstance iz Ant Design
  }

export const useCustomFilter = ({nazivFiltera}: Props) => {
    const dispatch = useDispatch();
    const tableFilter = useSelector((state: RootState) => state.filteri[nazivFiltera]);

    // const onFinish = () => {
    //     dispatch(setFilter(form.getFieldsValue));
    // }

    return {
       // onFinish,
        tableFilter, // Vraćaš tableFilter ovde
      };
}