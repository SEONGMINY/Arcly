import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { ColorSchemeName } from 'react-native/Libraries/Utilities/Appearance';
import { DARK_COLOR, LIGHT_COLOR, ThemeColor } from '@styles/colors.ts';
import setColorScheme = Appearance.setColorScheme;

interface ThemeContextProps {
  theme: ColorSchemeName;
  colors: ThemeColor;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: Appearance.getColorScheme(),
  colors: Appearance.getColorScheme() === 'light' ? LIGHT_COLOR : DARK_COLOR,
});

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [scheme, setScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());
  const colors = scheme === 'light' ? LIGHT_COLOR : DARK_COLOR;

  useEffect(() => {
    const subscription = Appearance.addChangeListener(
      ({ colorScheme: newColorScheme }: { colorScheme?: ColorSchemeName }) => {
        setScheme(newColorScheme);
      },
    );
    return () => subscription.remove();
  }, [setColorScheme]);

  return (
    <ThemeContext.Provider value={{ theme: scheme, colors }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
