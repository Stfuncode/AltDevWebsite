# AltDev Website Color Palette

Professional colors for data, AI, and development services. Inspired by Elijah Michaels Realty branding for a trustworthy, modern tech aesthetic.

## Color Palette

### Primary Colors (Deep Teal)
Based on the deep teal color (#0B4251) from the logo:

```
primary-50:  #E8F4F8 (lightest)
primary-100: #C4E4EE
primary-200: #9FD3E4
primary-300: #87BBD7 (from logo - light blue-gray)
primary-400: #5A9FC4
primary-500: #0B4251 (from logo - main brand color)
primary-600: #093843
primary-700: #072D35
primary-800: #052227
primary-900: #03171A
primary-950: #011012 (darkest)
```

### Accent Colors (Gold)
Based on the gold color (#F2C864) from the logo:

```
accent-50:  #FEF9ED (lightest)
accent-100: #FDEFD0
accent-200: #FBE5B3
accent-300: #F9DB96
accent-400: #F6D17D
accent-500: #F2C864 (from logo - main accent)
accent-600: #EFB93C
accent-700: #D19520
accent-800: #A67419
accent-900: #7A5512 (darkest)
```

## Usage Examples

### Tailwind Classes

#### Backgrounds
```html
<!-- Primary backgrounds -->
<div className="bg-primary-500">Deep teal background</div>
<div className="bg-primary-300">Light blue background</div>
<div className="bg-primary-50">Very light background</div>

<!-- Accent backgrounds -->
<div className="bg-accent-500">Gold background</div>
<div className="bg-accent-100">Light gold background</div>
```

#### Text Colors
```html
<h1 className="text-primary-600">Primary heading</h1>
<p className="text-primary-700">Dark primary text</p>
<span className="text-accent-600">Gold accent text</span>
```

#### Buttons
```html
<!-- Primary button -->
<button className="bg-primary-500 text-white hover:bg-primary-600">
  Primary Action
</button>

<!-- Accent button (CTA) -->
<button className="bg-accent-500 text-gray-900 hover:bg-accent-600">
  Call to Action
</button>

<!-- Outline button -->
<button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-50">
  Secondary Action
</button>
```

#### Borders
```html
<div className="border-2 border-primary-300">Subtle border</div>
<div className="border-t-4 border-accent-500">Top accent border</div>
```

## Design Recommendations

### Primary Use Cases
- **Deep Teal (primary-500)**: Headers, navigation, primary buttons, brand elements
- **Light Blue-Gray (primary-300)**: Backgrounds, section dividers, hover states
- **Very Light (primary-50)**: Page backgrounds, card backgrounds, subtle sections

### Accent Use Cases
- **Gold (accent-500)**: Call-to-action buttons, highlights, important badges
- **Light Gold (accent-100)**: Subtle highlights, hover states for accent elements
- **Dark Gold (accent-700)**: Text on light backgrounds, icons

### Color Combinations

#### Hero Sections
```html
<div className="bg-primary-500 border-t-8 border-accent-500">
  <h1 className="text-white">Hero Title</h1>
  <button className="bg-accent-500 text-gray-900">Get Started</button>
</div>
```

#### Content Cards
```html
<div className="bg-white border-2 border-primary-200">
  <h3 className="text-primary-600">Card Title</h3>
  <p className="text-gray-700">Card content...</p>
</div>
```

#### Call-to-Action Sections
```html
<div className="bg-accent-100 border-l-4 border-accent-500">
  <h2 className="text-accent-800">Special Offer</h2>
  <button className="bg-accent-500 hover:bg-accent-600">Learn More</button>
</div>
```

## Color Psychology

- **Deep Teal (#0B4251)**: Professional, trustworthy, stable - perfect for establishing credibility in data and technology services
- **Light Blue-Gray (#87BBD7)**: Calming, approachable, modern - creates a welcoming tech-forward atmosphere that's not intimidating
- **Gold (#F2C864)**: Premium, innovative, optimistic - perfect for highlighting AI insights, data-driven results, and CTAs

## View the Demo

Run the dev server and visit `/color-demo` to see all colors and examples in action.

## Files Modified

- `tailwind.config.ts` - Updated primary and accent color scales
- `src/app/color-demo/page.tsx` - New demo page (created)
- `COLOR_PALETTE.md` - This documentation file (created)

## Migration Guide

If you need to replace existing colors:

1. **Replace blue colors**: `bg-blue-500` → `bg-primary-500`
2. **Replace cyan/sky colors**: `bg-cyan-500` → `bg-primary-300`
3. **Replace purple/pink accents**: `bg-purple-500` → `bg-accent-500`
4. **Update hover states**: `hover:bg-blue-600` → `hover:bg-primary-600`

## Notes

- The secondary color palette (grays) remains unchanged for flexibility
- All colors are tested for accessibility and contrast ratios
- Colors work well in both light and dark modes
