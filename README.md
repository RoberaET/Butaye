# 💕 Valentine's Day Website 💕

An interactive and romantic Valentine's Day website to ask that special someone to be your Valentine!

## Features

- 🐻 Adorable kissing bears animation
- 💖 Interactive "Yes" and "No" buttons
- 📈 The "Yes" button grows bigger each time "No" is clicked
- 💬 The "No" button changes text with funny/sweet messages
- 🎉 Beautiful celebration animation when "Yes" is clicked
- 🎨 Beautiful pink gradient background with floating hearts
- 📱 Fully responsive design for all devices

## Project Structure

```
V-day/
├── public/
│   ├── css/
│   │   └── style.css          # All styling and animations
│   ├── js/
│   │   └── script.js          # Interactive button logic
│   ├── images/
│   │   └── bear-kissing.png   # Cute bear couple image
│   └── index.html             # Main HTML page
├── server.js                  # Express server
├── package.json               # Project dependencies
└── README.md                  # This file
```

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## How to Add More Images

Simply place any images you want to use in the `public/images/` folder. You can then reference them in your HTML using:

```html
<img src="images/your-image-name.png" alt="Description">
```

## Customization

- **Change colors**: Edit the gradient values in `public/css/style.css`
- **Modify button texts**: Update the `noTexts` array in `public/js/script.js`
- **Add more images**: Place them in `public/images/` folder
- **Change celebration message**: Edit the celebration innerHTML in `public/js/script.js`

## Technologies Used

- Node.js
- Express.js
- Vanilla JavaScript
- CSS3 (with animations)
- HTML5

Made with ❤️ for that special someone!
