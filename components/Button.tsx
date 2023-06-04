import { Alert, GestureResponderEvent, StyleProp, TouchableOpacity, View, ViewStyle } from "react-native"

interface ButtonProps {
    onClick: (event: GestureResponderEvent) => void;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode
}

export default function Button(props: ButtonProps) {
    return (
        <TouchableOpacity
          onPress={props.onClick}
        >
          <View style={props.style}>
            {props.children}
          </View>
        </TouchableOpacity>
    )
}