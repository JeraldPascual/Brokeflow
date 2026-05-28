## MOBILE / CROSS-PLATFORM DEVELOPMENT RULES

### Mobile Layout Architecture
- Design for 375px baseline viewport (iPhone SE). All responsive layouts must compile correctly without clipping or visual overlap at 375px width.
- Touch Targets: Every touchable/interactive component (buttons, touchable opacity, inputs) must have a touch target size of at least 44x44 points (Apple HIG) or 48x48dp (Material Design).
- Safe Area Boundaries: Wrap the root view of every screen component in SafeAreaView or use safe area insets hook. Never let layout elements overlap the status bar, navigation bar, home indicator, notch, or Dynamic Island.
- No Horizontal Scroll: Never generate layouts that cause accidental horizontal scroll on mobile screen widths. Constrain text and images using flexShrink, flexWrap, or maxWidth.

### Performance and Thread Safety
- Async I/O: All storage access, data writes, network fetches, and heavy calculations must be executed asynchronously with visible progress, activity indicators, or skeleton states.
- List Rendering: For lists exceeding 20 items, always generate FlatList with a stable, unique keyExtractor. Never use ScrollView to render dynamic or large lists.
- Image Caching: Always use fast-image or expo-image components with compression and caching enabled for remote URLs. Never use raw image tags for network images.
- StyleSheet Optimization: Declare all styling objects outside the component tree using StyleSheet.create(). Never generate inline style objects inside render loops or list items.

### Platform-Specific Gotchas
- No Web APIs: Do not use window, document, localStorage, sessionStorage, or web alert() in mobile environments. Use AsyncStorage, secureStore, or native Alert.alert() helper.
- Keyboard Avoidance: Wrap forms in KeyboardAvoidingView with platform-specific behavior ("padding" for iOS, "height" for Android) to prevent inputs from being covered by the soft keyboard.
- Navigation Boundaries: Keep each screen component in its own file and register in React Navigation or Expo Router. Never toggle screens by conditional state rendering like showPage && <Page />.

### Banned Patterns
- Never generate hardcoded connection strings or API endpoints. Reference environment variables via Config or dotenv wrappers.
- Never write blocking synchronous logic inside mobile UI render loops.
- Never import web-only libraries into React Native files.

### Free-Tier Framework Blueprint
- For mobile database integration, generate code utilizing the Supabase JS SDK (Expo compatible) or Firebase Spark SDK.
- For local storage wrapper, generate a helper around AsyncStorage that handles JSON serialization, error catches, and defaults.

### AI Agent Self-Check
Before outputting mobile code, verify:
1. Are touch targets on all interactive elements at least 44x44 points?
2. Does the layout respect safe area boundaries on iOS and Android?
3. Is ScrollView replaced with FlatList for all dynamic lists?
4. Are web-only APIs (localStorage, alert, window) completely absent?
5. Do all text elements have explicit styling and handle overflow?
