import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { UseControllerProps, useController } from "react-hook-form";

interface Props extends UseControllerProps {
  label: string;
  items: string[];
}

export default function AppSelecList(props: Props) {
  const { fieldState, field } = useController({ ...props, defaultValue: "" });
  return (
    <FormControl fullWidth error={!!fieldState.error}>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={field.value}
        label={props.label}
        onChange={field.onChange}
      >
        {props.items.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{fieldState.error?.message}</FormHelperText>
    </FormControl>
  );
}
