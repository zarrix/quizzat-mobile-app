import {
  GestureResponderEvent,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface ButtonProps {
  onClick: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <TouchableOpacity disabled={props.disabled} onPress={props.onClick}>
      <View style={props.style}>{props.children}</View>
    </TouchableOpacity>
  );
}
