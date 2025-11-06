# Discord Verification Interface - Design Guidelines

## Design Approach
**Reference-Based Design**: Premium verification experience inspired by Lovable.dev's modern minimalism, combined with Chrome Hearts Club's luxury branding aesthetic. Target: 10/10 visual match to provided references.

## Core Visual Identity

### Brand Integration
- **Background**: Full-screen Chrome Hearts Club branded image with subtle dark overlay (opacity: 0.4-0.5) for text legibility
- **Aesthetic**: Luxury streetwear meets modern tech - premium, exclusive, and polished

### Typography Hierarchy
**Font Stack**: Inter or similar modern sans-serif via Google Fonts
- Hero/Title: 2xl-4xl (32-48px), font-weight: 700, with subtle gradient effect
- Body Text: base-lg (16-18px), font-weight: 400-500
- Button Text: base (16px), font-weight: 600
- Microcopy: sm (14px), font-weight: 400

### Layout System
**Spacing Units**: Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Container: Centered card with max-w-md (28rem)
- Internal padding: p-8 to p-12 for card content
- Element spacing: gap-4 to gap-6 between stacked elements

## Component Design

### Verification Card
**Glassmorphism Treatment**:
- Background: Semi-transparent white (bg-white/10 to bg-white/20)
- Backdrop filter: blur-xl for frosted glass effect
- Border: 1px solid white/20 with rounded-2xl corners
- Shadow: Large, soft shadow (shadow-2xl) with subtle glow
- Padding: p-8 to p-12

### Success Checkmark Animation
- Circular container with gradient border (green accent)
- Animated checkmark icon scaling from 0 to 1
- Smooth spring animation on mount
- Glowing effect around success state

### Button Design
- Primary CTA: Full width, rounded-xl, gradient background (brand colors)
- Background blur on hover for buttons over images
- Height: h-12, font-weight: 600
- No custom hover states (use component defaults)

### Status States
**Loading State**:
- Pulsing spinner or dots
- "Verifying..." text with gentle opacity animation

**Success State**:
- Animated checkmark (scale + fade in)
- "Verified!" headline with gradient text
- Welcoming message
- Auto-redirect timer with countdown

**Error State**:
- Red accent color for error icon
- Clear error message
- Retry button option

## Visual Effects

### Animations (Subtle & Purposeful)
- Card entrance: Fade in + subtle scale (0.95 to 1)
- Checkmark: Scale spring animation
- Text gradients: Subtle shimmer on success
- Minimal duration: 200-400ms for micro-interactions

### Glassmorphism Implementation
- backdrop-filter: blur(16px) to blur(24px)
- Semi-transparent backgrounds with white overlay
- Subtle borders for depth
- Layered depth with shadows

## Layout Structure

### Single-Page Verification Flow
**Centered Modal Design**:
1. **Background Layer**: Full-screen Chrome Hearts Club image
2. **Overlay Layer**: Dark gradient overlay for contrast
3. **Content Layer**: Centered glassmorphic card

**Card Content Stack** (top to bottom):
- Brand logo or icon (if applicable)
- Status icon (loading/checkmark/error)
- Headline text with gradient
- Description/instruction text
- Progress indicator or action button
- Footer microcopy (privacy note, etc.)

### Responsive Behavior
- Mobile: Full-screen card with minimal margins (m-4)
- Desktop: Centered card with max-width constraint
- Consistent padding across breakpoints

## Color Palette (Conceptual)
- **Accents**: Use brand colors from Chrome Hearts aesthetic (likely metallics, blacks, luxury tones)
- **Success**: Vibrant green gradient for verified state
- **Text**: White/off-white for high contrast on dark backgrounds
- **Overlays**: Semi-transparent blacks and whites for glassmorphism

## Images
**Hero Background**:
- Chrome Hearts Club branded image (full viewport)
- Dark overlay to ensure text readability
- Fixed or subtle parallax effect (optional)
- Cover positioning, no-repeat

## Accessibility
- High contrast text on glassmorphic backgrounds
- Clear visual feedback for all states
- Readable font sizes (minimum 14px)
- Focus states for interactive elements

## Key Differentiators
- **Premium Feel**: Luxury branding meets clean tech interface
- **Glassmorphism**: Modern depth without visual clutter
- **Confident Animations**: Smooth, purposeful, never distracting
- **Single Focus**: Verification is the only goal - no navigation clutter

**Target Experience**: User clicks verification link → Sees stunning branded page → Smooth animation confirms verification → Feels welcomed to exclusive community.